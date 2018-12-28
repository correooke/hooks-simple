import React, { useState, useEffect } from 'react';

const Search = ({ onChangeSearch }) => {
    const [ search, setSearch ] = useState('');
    
    useEffect( () => {
        document.title = `Buscando ${search}`;
    }, [search]);

    return (
        <div className='search'>
            <span>Búsqueda</span>
            <input type="text" 
                value={search} 
                onChange={e => { 
                    const { value } = e.target;
                    setSearch(value);
                    onChangeSearch(value);
                }} />
        </div>
    );
};

export default Search;