import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AxiosInstance from '../../api/AxiosInstance';


export default function StoreInfo(){
    const {product_code} = useParams();

    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        AxiosInstance.get( `products/${product_code}`).then((resp) => resp.data.data).then((results) => { 
            setProductDetails(results)   
                     
        })
    },[product_code]);

    return <>
    <div>
    </div>
    </>
}

