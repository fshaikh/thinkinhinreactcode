import React from 'react';
import SearchBox from './SearchBox'

export default function ProductFilterComponent(props) {
    return (
        <div>
            <SearchBox onSearch={props.onSearch} />
            <input type="checkbox"
                   onChanged={props.onStockChange}
                   >Show only stocked products</input>
        </div>
    );
}