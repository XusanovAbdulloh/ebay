import React from 'react';
import Categories from '../../components/categories/Categories';
import MainProducts from '../../components/main-products/MainProducts';

const Home = () => {
    return (
       <>
         <main>
            <Categories/>
            <MainProducts/>
         </main>
       </>
    );
}

export default Home;
