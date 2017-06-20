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

    this.sourceChange = this.sourceChange.bind(this)
    this.fetchNewsBasedSource = this.fetchNewsBasedSource.bind(this)
  }

  sourceChange(e) {
    console.log('*** sources: **** ', e.target.value);
    this.setState({
      source: e.target.value
    })
  }

  fetchNewsBasedSource() {
    let self = this

    // NOTE: List News Based on Source News
    axios.get(`https://newsapi.org/v1/articles?source=${this.state.source}&apiKey=8b8441d3403c4f73896ea3b0e039595b`)
    .then(response => {
      console.log('^^^^^^^^', response.data.articles);

      self.setState({
        listnews: response.data.articles
      })
      self.setState({
        source: ''
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
                  <select name="sources" onChange={this.sourceChange}>
                    { this.props.sourcesnews.map(source => {
                      return (
                        <option value={source.id} key={source.id}>{source.name}</option>
                      )
                    })}
                  </select>
                </span>
              </p>
              <p className="control">
                <button type="submit" className="button is-primary" onClick={this.fetchNewsBasedSource}>Choose</button>
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