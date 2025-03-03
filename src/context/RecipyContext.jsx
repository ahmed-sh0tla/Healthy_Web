import { createContext, useEffect, useState } from "react"
import AxiosInstance from "../api/AxiosInstance"


export const RecipyContext = createContext([]);

export function RecipyContextProvider(props) {
    
    const [recipesList, setRecipesList] = useState([]);

    useEffect(() => {
        AxiosInstance.get('category').then((resp) => resp.data.data.flatMap(category => category.items)).then((results) => { 
            setRecipesList(results)   
                     
        })
    },[]);

    return <RecipyContext.Provider value={recipesList}>
        {props.children}
    </RecipyContext.Provider>

}
