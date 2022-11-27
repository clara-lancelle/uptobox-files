
import React from 'react';
import Image from '../images/logo.png';

//header with h1

function Header() {
    return (
        <header>
            <h1> Watch </h1>
            <img id='logo' src={Image} alt='logo'></img>
        </header>
    )
}

export default Header