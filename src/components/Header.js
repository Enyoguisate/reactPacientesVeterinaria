import React from 'react';
import '../bootstrap.min.css';

const Header = ({titulo}) => ( 
    <header>
        <h1 className="text-center">{titulo}</h1>
    </header>
);

export default Header;