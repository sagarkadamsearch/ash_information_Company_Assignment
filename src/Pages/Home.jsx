import React from 'react';
import './Home.css';
import Tree from './Tree.png'
import { CgProfile } from "react-icons/cg";


const Home = () => {
    return (
        <div>
            <div className='header'>
               <nav>
                  <div className='nav-logo'>
                    <img src={Tree} alt="" />
                    <p>Trophy Nig.</p>
                    <p>PROPERTY LIMITED</p>
                  </div>
                  <div className='nav-links'>
                    <p>Home</p>
                    <p>Properties</p>
                    <p>Designs</p>
                    <p>Search</p>
                    <p>About us</p>
                    <p>Contact us</p>
                  </div>
                  <div className='buttons'>
                    <CgProfile he/>
                    <button></button>
                  </div>
               </nav>
            </div>
        </div>
    );
};

export default Home;