import React from 'react'
import { Context } from '../Context';
import './Tittle.css'

function Tittle(){

    const {complArticle, 
     totalArticle } = React.useContext(Context)
    
    return(
        <h1 className='titulo'>
            Has completado <span>{complArticle}</span>  de <span> {totalArticle} </span>  palabras
        </h1>
    );
}

export {Tittle}
