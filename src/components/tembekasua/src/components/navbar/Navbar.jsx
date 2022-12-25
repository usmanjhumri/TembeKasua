import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import Saved from "../../assets/images/saved.svg";
import Cart from "../../assets/images/cart.svg";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
    const [drawer, setDrawer] = useState(false);
    return (
        <nav>
            <div className="upper-nav">
                <div className="nav-container">
                    <a href="#">
                        Sell on <span>tembekasua</span>
                    </a>
                    <div>
                        <a href="#">Help</a>
                        <a href="#">Buyer Protection</a>
                    </div>
                </div>
            </div>

            <div className="main-nav">
                <div className="nav-container">
                    <div className="logo-div">
                        <img src={Logo} />
                    </div>
                    <div className="input-div">
                        <input
                            type="text"
                            placeholder="Search food items, classification and categories"
                        />
                        <button>Search</button>
                    </div>
                    {/* Empty Div */}
                    <div></div>
                    <div className="links-div">
                        <a href="">
                            <img src={Saved} />
                        </a>
                        <a href="">
                            <img src={Cart} />
                        </a>
                        <button className="button button-green">
                            Create account
                        </button>
                        <button className="button button-grey">Sign in</button>
                    </div>
                    {/* Drawer Menu */}
                    <div className="menu-div">
                        <FiMenu onClick={() => setDrawer((prev) => !prev)} />
                    </div>
                </div>
            </div>
            <NavDrawer isOpen={drawer} setOpen={setDrawer} />
        </nav>
    );
};

export default Navbar;

const NavDrawer = ({ isOpen, setOpen }) => {
    return (
        <div className={`${isOpen ? "drawer-div show-drawer" : "drawer-div"}`}>
            <FiX
                onClick={() => setOpen(false)}
                style={{
                    alignSelf: "flex-end",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                }}
            />
            <div>
                <a href="">
                    <img src={Saved} />
                </a>
                <a href="">
                    <img src={Cart} />
                </a>
            </div>
            <button className="button button-green">Create account</button>
            <button className="button button-grey">Sign in</button>
        </div>
    );
};
