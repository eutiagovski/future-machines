import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    navigate(e);
  };

  const menu = [
    {
      categorie: "Produtos",
      label: "iLINDA",
      path: "/ilinda",
    },
    {
      categorie: "Produtos",
      label: "BRILHO DMX",
      path: "/brilho",
    },
    {
      categorie: "Soluções",
      label: "Criação de Website",
      path: "/brilho",
    },
  ];

  const categories = menu
    .map((item) => item.categorie)
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="left">
          <div className="logo-container">
          <img src="/assets/img/fmachines_logo_branca.png" alt="" className="logo" />
          </div>
        </div>
        <div className="center"></div>
        <div className="right">
          {/* <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="button"
            >
              Produtos
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {menu
                .filter((menuItem) => menuItem.categorie === "Produtos")
                .map((item, i) => (
                  <MenuItem onClick={() => handleClose(item.path)}>
                    {item.label}
                  </MenuItem>
                ))}
            </Menu>
          </div>

          <div>
            <Button
              id="basic-button1"
              aria-controls={open ? "basic-menu1" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="button"
            >
              Soluções
            </Button>
            <Menu
              id="basic-menu1"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button1",
              }}
            >
              {menu
                .filter((menuItem) => menuItem.categorie === "Soluções")
                .map((item, i) => (
                  <MenuItem onClick={() => handleClose(item.path)}>
                    {item.label}
                  </MenuItem>
                ))}
            </Menu>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
