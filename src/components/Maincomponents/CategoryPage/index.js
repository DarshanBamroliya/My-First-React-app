import React from 'react'
import Highdemand from '../../Pages/Ctagory-sec/High_demand/High_demand';
import Mostpopular from '../../Pages/Ctagory-sec/Most_popular/most_popular';
import Trendingslider from '../../Pages/Ctagory-sec/trending_slider/trendingslider';
import Exclusive_slider from '../../Pages/Ctagory-sec/Exclusivesec/exclusive_slider';
import Genretor from '../../Pages/Ctagory-sec/Generator_slider/genretor';
import Better from '../../Pages/Ctagory-sec/Better_price/better_price';


function CategoryPage() {
    return (
        <>
            <Highdemand />
            <Mostpopular />
            <Trendingslider />
            <Exclusive_slider />
            <Genretor />
            <Better />
        </>
    )
}

export default CategoryPage