import React from 'react'

import axios from 'axios'

import { Link } from 'react-router-dom'

import { getAllNews, clearStateSource } from '../actions'

import { connect } from 'react-redux'

class DetailNews extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      url: '',
      urlToImage: '',
      publishedAt: ''
    }
  }

  componentDidMount() {
    console.log('xxxxxx111xxxxx', this.props.match.params.source)
    console.log('xxxxxx222xxxx', this.props.match.params.id)
    console.log('xxxxxx333xxxx', this.props.newsList[3].title)

    let index = this.props.match.params.id

    this.setState({
      title: this.props.newsList[this.props.match.params.id].title,
      description: this.props.newsList[this.props.match.params.id].description,
      url: this.props.newsList[this.props.match.params.id].url,
      urlToImage: this.props.newsList[this.props.match.params.id].urlToImage,
      publishedAt: this.props.newsList[this.props.match.params.id].publishedAt
    })
  }

  clearStateDetail() {
    this.props.clearDataSource
    this.setState({
      title: '',
      description: '',
      url: '',
      urlToImage: '',
      publishedAt: ''
    })
  }

  render() {
    return (
      <div className="columns is-mobile" style={{marginTop: 20}}>
        <div className="column is-10 is-offset-1">
          <Link to="/"><span onClick={() => this.clearStateDetail()}><u>back</u></span></Link>
          <div className="box" style={{margin:20}}>
            <article className="media">
              <div className="card-content" style={{padding:0}}>
                <div className="media-content" style={{textAlign:'center'}}>
                  <img src={this.state.urlToImage} alt="urlimage balabala" style={{width:500}}/>
                </div>
                <hr />
                <div className="content">
                  <p>
                    <strong>{this.state.title}</strong>
                    <br />
                    <label><u>Description:</u> &nbsp; <i><small>{this.state.publishedAt ? this.state.publishedAt.slice(0, 10) : '-'}</small></i></label>
                    <br />
                    {this.state.description}
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a href={this.state.url} className="button is-primary is-outlined">Go To The Website</a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({news, source}) => {
  console.log('!!!!!!!!', news.newsList.source)
  return {
    newsList: news.newsList.articles,
    sourceText: news.newsList.source
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNewsArticle: (source) => {
      dispatch(getAllNews(source))
    },
    clearDataSource: () => {
      dispatch(clearStateSource())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailNews)