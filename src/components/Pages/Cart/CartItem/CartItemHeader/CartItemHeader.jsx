import { useState } from 'react';
import { Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CartItemHeader({product_name, index, deleteSelectedProduct}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleMenuOpen = (event, index) => {
        setAnchorEl(event.currentTarget);
        setSelectedIndex(index);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedIndex(null);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        deleteSelectedProduct(index);
        handleMenuClose();
    };

    return (
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
            }}
        >
            <Typography textAlign="top" variant="h6">{product_name}</Typography>
            <IconButton onClick={(event) => handleMenuOpen(event, index)}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={selectedIndex === index}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={(event) => handleMenuItemClick(event, index)}>Delete</MenuItem>
            </Menu>
        </Box>
    )
}
