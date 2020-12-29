import React from 'react'
import "./Header.css"
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        <div className="header">
            

            <div className="header__icons">

                <div className="header__icon  header__icon--active">
            <HomeIcon/>
            <p>Home</p>
            </div>

            <div className="header__icon">
            <SearchIcon/>
            <p>Search</p>
            </div>

           <div className="header__icon ">
            <FlashOnIcon/>
            <p>Trending</p>
            </div>

            <div className="header__icon">
            <LiveTvIcon/>
            <p>Verifiend</p>
                </div>
            <div className="header__icon">
            <VideoLibraryIcon/>
            <p>Collection</p>
            </div>
            <div className="header__icon">
            <PersonOutlineIcon/>
            <p>Acount</p>
            
            </div>

            </div>

            <img src="https://assets.stickpng.com/images/58480a75cef1014c0b5e491b.png"/>
        </div>
    )
}

export default Header
