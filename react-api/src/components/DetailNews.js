import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    let self = this
    console.log('apakah ini: ', this.props.match.params.source);
    // NOTE: Detail News Based on Source News
    axios.get(`https://newsapi.org/v1/articles?source=${this.props.match.params.source}&apiKey=8b8441d3403c4f73896ea3b0e039595b`)
    .then(response => {
      console.log('^^^^^^^^', response.data.articles);
      response.data.articles.map(article => self.setState({
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage,
          publishedAt: article.publishedAt
        })
      )
    })
    .catch(error => {
      console.log(`oops, something error: ${error}`);
    })
  }

  render() {
    return (
      <div className="columns is-mobile" style={{marginTop: 20}}>
        <div className="column is-10 is-offset-1">
          <Link to="/"><span><u>back</u></span></Link>
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

export default DetailNews