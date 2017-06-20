import React from 'react'
import axios from 'axios'

import ContentItem from './ContentItem'

class Content extends React.Component {
  constructor() {
    super()
    this.state = {
      listnews: [],
      source: ''
    }
  }

  sourceChange(e) {
    // for (var i = 0; i < this.props.sources.length; i++) {
    //   if (this.props.sources[i].id == e.target.value) {
    //     this.props.source = this.props.sources[i]
    //   }
    // }
    this.props.sourcesnews.map(source => {
      console.log('((()))', source);
      // if (source.id == e.target.value) {
      //   this.state.source = source
      // }
    })
  }

  componentDidMount() {
    let self = this

    // NOTE: List News Based on Source News
    axios.get(`https://newsapi.org/v1/articles?source=abc-news-au&apiKey=8b8441d3403c4f73896ea3b0e039595b`)
    .then(response => {
      console.log('^^^^^^^^', response.data.articles);

      self.setState({
        listnews: response.data.articles
      })
    })
    .catch(error => {
      console.log(`oops, something error: ${error}`);
    })

  }

  render() {
    if (this.props.sourcesnews.length > 0) {
      return (
        <div className="columns is-mobile" style={{marginTop: 20}}>
          <div className="column is-10 is-offset-1">
            <div className="field has-addons">
              <p className="control is-expanded">
                <span className="select is-fullwidth">
                  <select name="sources">
                    { this.props.sourcesnews.map(source => {
                      console.log('--------------', source);
                      return (
                        <option value={source.id}>{source.name}</option>
                      )
                    })}
                  </select>
                </span>
              </p>
              <p className="control">
                <button type="submit" className="button is-primary">Choose</button>
              </p>
            </div>
            <br />
            {this.state.listnews.map((item, index) => {
              return (
                <ContentItem item={item} key={index} />
              )
            })}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Data is empty</h1>
        </div>
      )
    }

  }
}

export default Content