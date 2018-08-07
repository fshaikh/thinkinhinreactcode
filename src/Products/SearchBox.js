import React from 'react';

export default function SearchBox(props) {
    return (
        <div>
            <input type="text"
                placeholder="...Search"
                onChange={(event) => {
                    const value = event.target.value;
                    props.onSearch(value);
                }}
            />
        </div>
    );
}