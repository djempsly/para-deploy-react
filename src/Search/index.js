import React from "react";
import { Context } from "../Context";
import './search.css'

function Search(){

    const {searchValue, setSearchValue} = React.useContext(Context)
    return(
        <>
            <input className="search"
             placeholder="Busca tu TODO"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            />
        </>
    );
}

export {Search}