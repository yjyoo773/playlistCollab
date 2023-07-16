import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from '.pages/Home';
import PlaylistDetails from '.pages/PlaylistDetails'
import './App.css';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/playlist/:id" component={PlaylistDetails} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
