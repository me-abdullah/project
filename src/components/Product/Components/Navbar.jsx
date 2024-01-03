import React, { useState } from "react";
import menu from "../Pictures/icon-menu.svg";
import logo from "../Pictures/logo.svg";
import avatar from "../Pictures/image-avatar.png";
import { Badge, IconButton } from "@mui/material";
import Cart from "./Cart";
import MobileLinksDrawer from "./MobileLinksDrawer";

const Navbar = ({ onOrderedQuant, onReset }) => {
  const [showCart, setShowCart] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = (val) => {
    setOpen(val);
  };

  return (
    <header>
      <nav>
        <section className="left">
          <div className="imgs">
            <img
              className="hide-in-desktop"
              src={menu}
              alt="icon-menu"
              onClick={() => {
                handleOpen(true);
              }}
            />
            <MobileLinksDrawer onHandleOpen={handleOpen} onOpen={open} />
            <img src={logo} alt="logo" />
          </div>
          <div className="links hide-in-mobile">
            <ul>
              <li>
                <button>Collections</button>
              </li>
              <li>
                <button>Men</button>
              </li>
              <li>
                <button>Women</button>
              </li>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Contact</button>
              </li>
            </ul>
          </div>
        </section>
        <div className="right">
          <IconButton
            disableRipple
            onClick={() => {
              setShowCart(!showCart);
            }}
          >
            <Badge
              invisible={onOrderedQuant === 0}
              badgeContent={onOrderedQuant}
              variant="standard"
              sx={{
                color: "#fff",
                fontFamily: "Kumbh sans",
                fontWeight: 700,
                "& .css-fvc8ir-MuiBadge-badge ": {
                  fontFamily: "kumbh sans",
                  fontWeight: 700,
                },
              }}
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                />
              </svg>
            </Badge>
          </IconButton>
          <img src={avatar} alt="img-avatar" className="avatar" />
          {showCart && (
            <Cart
              onOrderedQuant={onOrderedQuant}
              onReset={onReset}
              onShow={setShowCart}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
