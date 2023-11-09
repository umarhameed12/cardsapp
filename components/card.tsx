import React from 'react'

interface CardProps {
    name: string,
    imageUrl: string,
    artist: string,
    text: string,
    type: string,
}

const Card: React.FC<CardProps> = ({ name, imageUrl, artist, text, type }) => {
    return (
        <div className='w-1/4 p-1 '>
            <div className='p-1 rounded-lg shadow-xl'>
                <img
                    alt="Card Image"
                    src={imageUrl}
                    height="50"
                    width="100"
                    className='w-full'
                />
                <div className='px-2 my-3'>
                    <p className='font-bold text-lg'>Name: {name}</p>
                    <p className='text-md'>Artist: {artist}</p>
                    <p className='text-md'>Type: {type}</p>
                    <p className='text-sm'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card