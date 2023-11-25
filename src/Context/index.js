import React from "react";
import { useLocalStorage } from "./LocalStorage";

const Context = React.createContext()

function ProviderItem ({children}){

    const {item:article, 
           saveItem:saveWord,
           loading,
           error } = useLocalStorage('Product_V1', [])
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    
    const complArticle = article.filter((art) => art.disponible).length
    const totalArticle = article.length
    
    const seachArticle = article.filter((art) =>{
      const valueText = art.nombre.toLocaleLowerCase();
      const value = searchValue.toLocaleLowerCase();
      return valueText.includes(value)
    })
    
    const addNewArticle = (nombre) =>{
      const newArticle = [...article]
          newArticle.push({
            nombre,
            disponible:false
          })
          saveWord(newArticle)
    }
    
    const completedArticle = (nombre) =>{
      const newArticle = [...article]
        const newIndex =  newArticle.findIndex((art)=> 
            art.nombre === nombre)
          newArticle[newIndex].disponible = true;
          saveWord(newArticle)
    }
    
    const deleteArticle = (nombre) =>{
      const newArticle = [...article]
        const newIndex =  newArticle.findIndex((art)=> 
            art.nombre === nombre)
          newArticle.splice(newIndex, 1)
          saveWord(newArticle)
    }
    
        return(
            <Context.Provider value={{
                complArticle,
                totalArticle,
                searchValue, 
                setSearchValue,
                seachArticle,
                completedArticle,
                deleteArticle, 
                loading, 
                error,
                openModal, 
                setOpenModal,
                addNewArticle
            }}>
                    {children}
            </Context.Provider>
        )
        }
        
   

export { Context, ProviderItem}