import React from "react";
import { Context } from "../Context";
import './AddItem.css'

function AddItem(){
    const {addNewArticle, setOpenModal} = React.useContext(Context)
    const [newArticle, setNewArticle] = React.useState('')

    const onSubmit = (event)=>{
        event.preventDefault();
        addNewArticle(newArticle)
        setOpenModal(false)

    }
    const onCancel =()=>{
        setOpenModal(false)
    }

    const onChange = (event)=>{
    setNewArticle(event.target.value)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Crea tu Articulo</label>
            <textarea placeholder="Escribe tu Articulo en este espacio" 
            value={newArticle}
            onChange={onChange}
            
            />
            <div>
                <button
                type="button"
                onClick={onCancel}
                className="button-form cancel"
                >Cancelar</button>
                <button
                className="button-form add"
                >Añadir
                </button>
            </div>
        </form>
    );
}

export {AddItem}


