import React, { useState } from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import { AppContext } from './AppContext';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      alert(`Graphql erro ${message}`);
    });
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:4001/graphql' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {

  const [ items, setItems ] = useState([]);
  const [ fullItems, setFullItems ] = useState([]);

  const filterMainList = (actionType: any, payload: any) => {
    const regexText = `.*${payload.trim().replaceAll(' ', '.*.*')}.*`
    const regex = new RegExp(regexText, 'gi');

    const newItems = fullItems.filter((u: any) => {
      return u.name.match(regex)
    })

    setItems(newItems)
  }
  
  const setMainResults = (payload: any) => {
    setItems(payload)
    setFullItems(payload)
  }

  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={{ items, filterMainList, setMainResults }}>
        <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserDetail />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  </ApolloProvider>
  );
}

export default App;
