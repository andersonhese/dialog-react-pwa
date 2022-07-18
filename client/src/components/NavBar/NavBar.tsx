import { styled, alpha } from '@mui/material/styles';

import { useEffect, useState, useContext } from 'react';
import { gql, useQuery } from '@apollo/client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import { Link as RouterLink } from 'react-router-dom';

import './NavBar.css';

import { AppContext } from '../../AppContext';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {

  const { filterMainList } = useContext(AppContext);

  const handleSearchInput = (txt: string) => {
    filterMainList('search', txt)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className='AppName'
            variant="h6"
            noWrap
            sx={{ overflow: { xs: 'initial' } }}
            component={RouterLink}
            to="/"
          >
            MySocial
          </Typography> 
          <Search 
            sx={{ marginLeft: { xs: '20px' } }} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              id="mySearchInput"
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={event => handleSearchInput(event.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

