/* 
File Created:3.2.2023
Author: Mahmudur Rahman
*/
import React, { lazy } from 'react';

// components or pages
const ToLet = lazy(() => import('../../components/tolet/ToLet.js'));

const Home = () => {
    return (
        <>
            <ToLet />
        </>
    );
};

export default Home;