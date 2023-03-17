import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
const pages = ["About", "Schedule", "Tracks",  "Prizes", "FAQ", "Speakers", "Sponsors"];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="sticky"
            style={{
                display: "inline",
                background: "#2E3440"
                // justify: ""
        }}>
            <Container>
                <Toolbar disableGutters>
                    {/*phone*/}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                         style={{background: "#2E3440",
                             color: "#FFFF00"
                         }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            styles={{color: "#FFFF00"}}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right"
                            }}
                                keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" }
                            }}
                            styles={{color: "#FFFF00"}}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/*/!*desk*!/*/}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }}}>
                        {pages.map((page) => (
                            <Button variant="text"
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: "block" }}
                                    style={{color:"#F7F27D",
                                        fontFamily: "'Righteous', monospace",
                                    }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
