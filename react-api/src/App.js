import React, { Component } from 'react';

import { Header, Content, DetailNews } from './components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      listnews: [],
      sourcesnews: []
    }
  }

  componentDidMount() {
    let self = this

    // NOTE: Get All Sources News
    axios.get(`https://newsapi.org/v1/sources?languange=en`)
    .then(response => {
      console.log('^^^^^^^^', response.data.sources);

      self.setState({
        sourcesnews: response.data.sources
      })
    })
    .catch(error => {
      console.log(`oops, something error: ${error}`);
    })

  }

  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={ () => (
              <Content sourcesnews={this.state.sourcesnews}></Content>
            )} />
            <Route exact path="/detailnews/:id" component={DetailNews} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
