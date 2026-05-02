import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../cash-macanaya-dDMLlk4ULy4-unsplash.jpg';

const Home = function() {
    return (<>
    <header className='header'>
        <h1 className='headertitle'>Welcome to our website!</h1>
        <img src={homeImage} alt="Home" className='homeImage' />
    </header>
    <section className='cards'>
        <Link to='/about' className='card'>
            <h2>About Us</h2>
            <p>Learn more about our company.</p>
        </Link>
        <Link to='/contact' className='card'>
            <h2>Contact Us</h2>
            <p>Get in touch with us.</p>
        </Link>
    </section>
    </>
    )
}

export default Home;