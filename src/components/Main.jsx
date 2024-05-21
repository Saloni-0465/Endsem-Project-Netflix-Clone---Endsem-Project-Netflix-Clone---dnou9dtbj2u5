import React from 'react';
import Navbar from './Navbar';
import Movies from './Movies';
import PopularMovies from './PopularMovies';
import HorrorMovies from './HorrorMovies';
import SciFiction from './SciFiction';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Movies></Movies>
            <PopularMovies />
            <HorrorMovies />
            <SciFiction />
        </div>
    )
}

export default Main;

