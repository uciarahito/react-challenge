import React from 'react';

import { Header, Content, DetailNews } from './components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Content} />
            <Route exact path="/detailnews/:id/:source" component={DetailNews} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
