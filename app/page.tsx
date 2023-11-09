"use client"
import Card from "@/components/card";
import Search from "@/components/search";
import Spinner from "@/components/spinner";
import { useEffect, useState } from "react";

export default function Home() {
  const URL = "https://api.magicthegathering.io/v1/cards?Count=20";
  const [visibleObjects, setVisibleObjects] = useState(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [cards, setCards] = useState<any[]>([]);
  const [filteredCards, setFilteredCards] = useState<any[]>([]);
  const getCardsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(URL, {
        method: 'GET',
        headers: {
          "Count": "20",
        }
      });
      const data = await res.json();
      setCards(data.cards);
      setFilteredCards(data.cards);
      setLoading(false);
    } catch (err) {
      console.log(err)
      setLoading(false);
    }
  }
  useEffect(() => {
    getCardsData();
  }, [])
  const filteredCardsFunction = (value: string) => {
    return cards.filter((data: any) => {
      return (
        data.name.toLowerCase().includes(value.toLowerCase())
      );
    });
  };
  const loadMore = () => {
    setVisibleObjects((prevCount) => prevCount + 10);
  };
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <Search
        onChange={(e: any) => {
          setFilteredCards(filteredCardsFunction(e.target.value));
        }}
      />
      {loading && <Spinner />}
      {!loading && (
        <>
          <div className="flex gap-0 flex-wrap w-full">
            {filteredCards.slice(0, visibleObjects).map((card, index) => {
              if (card.imageUrl == undefined) {
                return;
              } else {
                return (
                  <>
                    <Card
                      key={index}
                      name={card.name}
                      imageUrl={card.imageUrl}
                      artist={card.artist}
                      text={card.originalText}
                      type={card.originalType}
                    />
                  </>
                )
              }
            })}
          </div>
          <button onClick={loadMore} className="border shadow-lg px-4 py-2 rounded-lg">Load More</button>
        </>
      )}
    </main>
  )
}
