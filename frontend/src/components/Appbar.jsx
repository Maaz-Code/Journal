import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import { Menu, MenuList, Divider, InputBase, Button, Typography, Toolbar, Box, Link } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function Appbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={
        { 
          backgroundColor: '#282C35', 
          borderEndStartRadius: '1.5rem',
          borderEndEndRadius: '1.5rem'
        }
      }>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            <Link color="inherit" underline="none" href="/">Journal</Link>
          </Typography>
          <Search sx={{mr: 4, ml: 3}}>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Link underline="none" color="inherit" href="/pages">
            <Button color="inherit">Pages</Button>
          </Link>
          <Button color="inherit"
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} > Maaz <KeyboardArrowDownIcon/> </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{'aria-labelledby': 'basic-button',}}
          >
            <MenuList onClick={handleClose} divider="true">
              <Typography component="div" color="inherit" sx={{marginLeft: '15px', marginRight: '15px'}}>
                Profile
              </Typography>            
            </MenuList>
            <Divider sx={{ my: 0.5 }} />
            <MenuList onClick={handleClose}>
              <Typography component="div" color="inherit" sx={{marginLeft: '15px', marginRight: '15px'}}>
                Logout
              </Typography> 
            </MenuList>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
