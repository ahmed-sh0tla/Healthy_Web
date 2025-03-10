import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AxiosInstance from '../../api/AxiosInstance';
import { Rating } from 'react-simple-star-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function StoreInfo() {
    const { productCode } = useParams();

    const [rating, setRating] = useState(0)

    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        AxiosInstance.get(`products/${productCode}`).then((resp) => resp.data.data).then((results) => {
            setProductDetails(results)
            console.log(results);



        })
    }, [productCode]);

    const { product_name, image, price, product_nutrition_info } = productDetails

    const [owned, setOwned] = useState(false);

    const handleClick = () => {
        setOwned(true);
        alert("Purchase successful !!");
    };

    return <>
        <div className="container mx-auto px-4 my-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="flex-shrink-0">
                    <img
                        src={image}
                        alt="pic"
                        className="rounded-2xl w-80 md:w-96 lg:w-[450px] h-80 md:h-96 lg:h-[450px] object-cover shadow-xl transform perspective-1000 rotate-y-6"
                    />
                </div>
                <div className="text-center md:text-left max-w-xl">
                    <p className="font-mono text-3xl font-semibold pb-4">{product_name}</p>
                    <p className="text-gray-500 pb-3 text-lg">{product_nutrition_info}</p>
                    <div className="flex items-center justify-center md:justify-start gap-2 pb-2">
                        <span className="text-red-400 text-lg">Rating</span>
                        <Rating emptyClassName="rating-flex" allowHover={true} initialValue={rating} />
                    </div>
                    <div className="flex items-center gap-8 pt-4">
                        <p className="text-xl font-semibold" style={{ color: owned ? "green" : "red" }}>
                            {owned ? "Owned" : `$${price}`}
                        </p>
                        <button
                            onClick={handleClick}
                            className="btn bg-gray-400 hover:bg-gray-500 rounded-xl px-4 py-2"
                        >
                            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{ color: "#ffffff", }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </>
}

