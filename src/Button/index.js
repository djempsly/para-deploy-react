import React from "react";
import { Context } from "../Context";
import './button.css'

function Button(){
    const {setOpenModal} = React.useContext(Context)
    return(
        <button 
            onClick={() => setOpenModal(state => !state)}
            className="button"
         > + 
         </button>
    );
}

export {Button}


