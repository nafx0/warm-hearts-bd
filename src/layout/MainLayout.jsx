import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Campaigns from '../pages/Campaigns';
import ActiveCampaigns from '../pages/ActiveCampaigns';
import Faq from '../pages/Faq';
import Footer from '../pages/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;