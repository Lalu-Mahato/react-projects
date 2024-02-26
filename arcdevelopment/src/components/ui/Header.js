import {
    AppBar,
    Box,
    Button,
    Tab,
    Tabs,
    Toolbar,
    styled,
    useScrollTrigger,
  } from "@mui/material";
  import React from "react";
  import PropTypes from "prop-types";
  import logo from "../../assets/logo.svg";
  import { Link } from "react-router-dom";
  
  function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };
  
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  const FreeEstimateButton = styled(Button)`
    border-radius: 50px;
    margin-left: 25px;
    margin-right: 25px;
    texttransform: none;
    color: white;
    font-size: 1rem;
  `;
  
  const CustomTabs = styled(Tabs)`
    & .MuiTabs-flexContainer {
      justify-content: space-between;
    }
  
    & .MuiTab-root {
      padding: 10px;
      font-family: "Raleway";
      text-transform: none;
      font-weight: 700;
      font-size: 1rem;
      color: white;
    }
  
    & .Mui-selected {
      backgroundColor: 'rgba(255, 255, 255, 0.3)';
      borderRadius: '10px';
    }
  `;
  
  function Header() {
    const [value, setValue] = React.useState("home");
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <React.Fragment>
        <ElevationScroll>
          <AppBar position="fixed" color="primary">
            <Toolbar disableGutters>
              <img
                alt="company logo"
                src={logo}
                style={{ maxWidth: "13.75em", maxHeight: "7em" }}
              />
              <Box sx={{ marginLeft: "auto" }}>
                <CustomTabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                >
                  <Tab value="home" label="Home" component={Link} to="/" />
                  <Tab value="services" label="Services"  component={Link} to="/services" />
                  <Tab value="aboutus" label="About Us"  component={Link} to="/about" />
                  <Tab value="contactus" label="Contact Us"  component={Link} to="/contact" />
                </CustomTabs>
              </Box>
              <FreeEstimateButton variant="contained" color="secondary">
                FREE ESTIMATE
              </FreeEstimateButton>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Offset />
      </React.Fragment>
    );
  }
  
  export default Header;
  