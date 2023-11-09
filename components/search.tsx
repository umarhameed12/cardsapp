import React from 'react'

interface SearchProps {
    onChange?: (e: any) => void;
}

const Search: React.FC<SearchProps> = ({ onChange }) => {
    return (
        <input
            type="search"
            onChange={onChange}
            placeholder={`Search Cards`}
            className="border bg-white w-1/3 outline-none px-4 py-2 rounded-lg"
        />
    )
}

export default Search