import './navbar.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const drawerWidth = 240;
const navItems = ["About", "Schedule", "Tracks",  "Prizes", "FAQ", "Speakers", "Sponsors"];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton style={{color: "#F7F27D", margin: "1vh 0"}} sx={{ textAlign: 'center'}} >
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>

            {/* styles have to be inline to work */}
            <AppBar
                style={{background: 'transparent', boxShadow: 'none'}}
                component="nav" >
                <Toolbar style={{ justifyContent: "flex-end" }}>
                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <div style={{color: "#F7F27D"}} className={"toggle"}>
                            <MenuIcon />
                        </div>
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', sm: 'block' }, margin: "20px 0"}}>
                        {navItems.map((item) => (
                            <Button key={item} style={{color: "#F7F27D", fontFamily:"Righteous, monospace"}}>
                               {item}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </AppBar>


            <Box component="nav" >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <div style={{background:"#576BAA", height: "inherit", display: "grid", alignContent: "center"}}
                    >{drawer}</div>
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}
export default DrawerAppBar;
