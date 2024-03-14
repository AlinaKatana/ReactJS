import React from "react";
import "./../assets/css/Header.css"; // za import na css samo pateka

// eksport so arrow function
export const Header = () => {
    return (
        <div id='header'>
            <h1 className='naslov'>This is the header</h1>
            <h2>This is the subheader</h2>
        </div>
    )
};