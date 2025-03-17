import React from 'react';
import './Header.css';

function Header(){
    return(
        <>
            <header className="header">
                <nav>
                    <ul>
                        <li><a href="#">Valorant</a></li>
                        <li><a href="#">Heroi</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
export default Header;