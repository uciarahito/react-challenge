import React from 'react'

import axios from 'axios'

import ContentItem from './ContentItem'

import { getAllSources } from '../actions'
import { getAllNews } from '../actions'

import { connect } from 'react-redux'

class Content extends React.Component {
  constructor() {
    super()
    this.state = {
      listnews: [],
      source: ''
    }

    this.sourceChange = this.sourceChange.bind(this)
    this.handleNewsArticle = this.handleNewsArticle.bind(this)
    this.renderListNews = this.renderListNews.bind(this)
  }

  renderLoading() {
    return (
      <div>
        <a className="button is-primary is-loading">Loading</a>
      </div>
    )
  }

  renderNewsItem() {
    if (this.props.newsList) {
      const components = []
      this.props.newsList.map((item, index) => {
        components.push(
          <ContentItem item={item} key={index} index={index} source={this.props.sourceText} />
        )
      })
      return components
    } else {
      return (
        <div>
          <h1>Choose the source</h1>
        </div>
      )
    }
  }

  renderListNews() {
    console.log(this.renderNewsItem)
    return (
        <div className="columns is-mobile" style={{marginTop: 20}}>
          <div className="column is-10 is-offset-1">
            <div className="field has-addons">
              <p className="control is-expanded">
                <span className="select is-fullwidth">
                  <select name="sources" onChange={this.sourceChange}>
                    { this.props.sourceList.map(source => (
                      <option value={source.id} key={source.id}>{source.name}</option>
                    ))}
                  </select>
                </span>
              </p>
              <p className="control">
                <button type="submit" className="button is-primary" onClick={this.handleNewsArticle}>Choose</button>
              </p>
            </div>
            <br />
            {this.renderNewsItem()}
          </div>
        </div>
      )
  }

  sourceChange(e) {
    console.log('*** sources: **** ', e.target.value);
    // this.setState({
    //   source: e.target.value
    // })
    this.setState({
      source: e.target.value
    })
    console.log('ubah state source: ', this.state.source)
  }

  handleNewsArticle() {
    console.log('@@@@@@@@', this.state.source)
    this.props.getNewsArticle(this.state.source)
  }

  componentDidMount() {
    this.props.getSources()
  }

  render() {
    if (this.props.loadingSource) {
      return (
          this.renderLoading()
        )
    } else {
      
      return (
          this.renderListNews()
        )
    }
  }
}

const mapStateToProps = ({news, source}) => {
  console.log('mapStateToProps Source di Content', source)
  console.log('mapStateToProps News di Content', news.newsList.articles)
  console.log('mapStateToProps source based on news', news.newsList.source)
  return {
    sourceList: source.sourceList,
    loadingSource: source.loading,
    newsList: news.newsList.articles,
    sourceText: news.newsList.source
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSources: () => {
      dispatch(getAllSources())
    },
    getNewsArticle: (source) => {
      dispatch(getAllNews(source))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)