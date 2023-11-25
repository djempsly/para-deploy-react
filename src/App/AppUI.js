import React from "react";
import { Tittle } from '../Tittle';
import { Search } from '../Search';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { Button } from '../Button';
import { Context } from "../Context";
import { Modal } from "../Modal";
import { AddItem } from "../AddItem";
import { Cargando } from "../Cargando";
import { Crea } from "../Crear";

function AppUI(){

  const {seachArticle,
        completedArticle,
        deleteArticle,
        error,
        loading,
        openModal
        } = React.useContext(Context)

    return (
        <div className='App'>
          <Tittle />
          <Search />
      
          <TodoList>
            {loading && <Cargando />}
            {error && <p>Hubo un error</p>}
            {(!loading && seachArticle.length === 0) && <Crea />}
            {seachArticle.map((arti) => 
            <TodoItem 
            key = {arti.nombre}
            nombre = {arti.nombre}
            disponible = {arti.disponible}
            completedArticle = {()=>completedArticle(arti.nombre)}
            deleteArticle = {()=>deleteArticle(arti.nombre)}
            />
            )}
           
          </TodoList>
      
            <Button />
            {openModal && (
                <Modal>
                    <AddItem />
                </Modal>

            )}
        </div>
        );

}

export { AppUI }





