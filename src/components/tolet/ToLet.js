/* 
File Created:3.2.2023
Author: Mahmudur Rahman
*/

// Import packages
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

// Main Code
const ToLet = () => {
    return (
        <>
            <div className="grid grid-cols-2 container mx-auto">
                <div>
                    <p className="text-[#7A86F2] text-3xl px-5">To-LET</p>
                </div>
                <div>
                    <p className="text-[#7A86F2] text-3xl px-5 text-right flex items-center">
                        SEE MORE
                        <IoIosArrowForward />
                    </p>
                </div>
            </div>
        </>
    );
};

export default ToLet;