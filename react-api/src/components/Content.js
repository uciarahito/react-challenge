import React from 'react'

import ContentItem from './ContentItem'

import { getAllSources } from '../actions'
import { getAllNews } from '../actions'

import { connect } from 'react-redux'

class Content extends React.Component {
  constructor() {
    super()

    this.sourceChange = this.sourceChange.bind(this)
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
            </div>
            <br />
            {this.renderNewsItem()}
          </div>
        </div>
      )
  }

  sourceChange(e) {
    this.props.getNewsArticle(e.target.value)
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