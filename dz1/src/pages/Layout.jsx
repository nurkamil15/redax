import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div>
                <Link to={'/'}>Главная</Link>
                <Link to={'/form'}>Формочки</Link>
            </div>
            <Outlet/>
            <footer>See you</footer>
        </div>
    );
};

export default Layout;