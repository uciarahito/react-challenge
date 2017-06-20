import React, { Component } from 'react';

import { Header, Content } from './components'
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

    // NOTE: List News Based on Source News
    // axios.get(`https://newsapi.org/v1/articles?source=abc-news-au&apiKey=8b8441d3403c4f73896ea3b0e039595b`)
    // .then(response => {
    //   console.log('^^^^^^^^', response.data.articles);
    //
    //   self.setState({
    //     listnews: response.data.articles
    //   })
    // })
    // .catch(error => {
    //   console.log(`oops, something error: ${error}`);
    // })

  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <Content sourcesnews={this.state.sourcesnews} />
      </div>
    );
  }
}

export default App;
