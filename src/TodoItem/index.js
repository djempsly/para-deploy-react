import React from "react";
import './Todoitem.css'
// import { CompleteIcon } from "../CompleteIcon";
// import { DeleteIcon } from "../DeleteIcon";
import { CgClose } from "react-icons/cg";
import { CgCheck } from "react-icons/cg";




function TodoItem(props){
    return(
        <>
            <li className="todo-item">
                <CgCheck onClick={props.completedArticle} className={`Icon Icon-check ${props.disponible && "Icon-Complete"}`} />

                {/* <CompleteIcon onClick={props.completedArticle}/> */}
                {/* <span className= {`Icon Icon-check ${props.disponible && "Icon-Complete"}`}
                onClick={props.completedArticle}
                 > V</span> */}
                <p className={`parrafo ${props.disponible && "parrafo-complete" }`}> {props.nombre} </p>
                {/* <DeleteIcon /> */}
                <CgClose onClick={props.deleteArticle} className={`Icon Icon-close ${props.disponible && "Icon-delete"}`} />
                {/* <span className= {`Icon ${props.disponible && "Icon-delete"}`}
                onClick={props.deleteArticle}>X</span> */}

                
              
            </li>
        </>
    );
}

export {TodoItem}


