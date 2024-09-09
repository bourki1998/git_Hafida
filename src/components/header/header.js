// src/components/Header.js
import React, { useState }  from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from '@mui/material';
import { Link } from "react-router-dom";
import { IconButton,
} from '@mui/material';
import { useTranslation, setLanguage } from "react-multi-lang";
import classNames from "classnames";
import { useAppState } from "../AppProvider/AppProvider";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch } from "react-redux";
import date from "../../assets/date.png";
const Header = () => {

    //options for languages
    const options = [
      { title: "Language", value: "" },
      { title: "An", value: "an" },
      { title: "Fr", value: "fr" },
      { title: "Ar", value: "ar" },
    ];
  const currentLang = options.findIndex(o => o.value == localStorage.getItem('lang'));
  // const dispatch = useDispatch();
  // const state = useState();
  const [state, dispatch] = useAppState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(currentLang);
  
  /**function to handle language toggle */
  const handleLanguageToggle = (event) => setAnchorEl(event.currentTarget);


  const handleMenuItemClick = (event, index) => {
    if (options[index].value === "ar") {
      setLanguage(options[index].value);
      localStorage.setItem('lang', options[index].value);

      if (state.direction === "ltr") {
        dispatch({ type: "direction" });
      }
      setSelectedIndex(index);
      setAnchorEl(null);
    } else {
      setLanguage(options[index].value);
      localStorage.setItem('lang', options[index].value);
      if (state.direction === "rtl") {
        dispatch({ type: "direction" });
      }
      setSelectedIndex(index);
      setAnchorEl(null);
    }
    window.location.reload();
  };

  const handleCloseMenu = () => setAnchorEl(null);
    return (
        <AppBar position="static" sx={{ backgroundColor: '#cc99a2' }}>
          <Toolbar>
          
           <img src={date} alt="dateLogo"   style={{ height: '40px', marginRight: '16px' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LoveConnect
            </Typography>
            <Box>
              {/* <Button color="inherit">Langue</Button> */}
              <IconButton
                aria-label="User Settings"
                aria-owns={anchorEl ? "lang-menu" : null}
                aria-haspopup="true"
                color="inherit"
                onClick={handleLanguageToggle}
              >
                {options[selectedIndex].title}
                <ArrowDropDownIcon />
              </IconButton>
              <Menu
            id="lang-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
           
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option.title}
              </MenuItem>
            ))}
          </Menu>
              <Link to="/login" className="mx-1">
              <Button color="inherit" style={{ color: 'white' }} >
                Se connecter
              </Button>
              </Link>
              <Link to="/">
              <Button color="inherit" style={{ color: 'white' }}>
                L'accueil
              </Button>
              </Link>
              
            </Box>
          </Toolbar>
        </AppBar>
      );
    };
    
    export default Header;
