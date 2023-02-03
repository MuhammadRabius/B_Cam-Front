/* 
File Created:3.2.2023
Author: Mahmudur Rahman
*/

// Import packages
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ToLetCard = () => {
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        axios
            .get("/data/ToLetData.json")
            .then((res) => setCardData(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
            {
                cardData.map((data, index) => {
                    return (
                        <div key={index}>
                            <p>{data.location}</p>
                        </div>
                    )
                })
            }
        </>
    );
};

export default ToLetCard;