import { createContext, useEffect, useState } from "react"
import AxiosInstance from "../api/AxiosInstance"


export const TrendingContext = createContext([]);

export function TrendingContextProvider(props) {
    
    const [trendingList, setTrendingList] = useState([]);

    useEffect(() => {
        AxiosInstance.get('category').then((resp) => resp.data.data.flatMap(category => category.items).slice(0, 4)).then((results) => { 
            setTrendingList(results)   
                     
        })
    },[]);

    return <TrendingContext.Provider value={trendingList}>
        {props.children}
    </TrendingContext.Provider>

}
