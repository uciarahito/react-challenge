import React from 'react'

class ContentItem extends React.Component {
  render() {
    const { item } = this.props

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={item.urlToImage} alt="Icon" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{item.title}</strong> <small>{item.publishedAt.slice(0, 10)}</small>
                <br />
                {item.description}
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a href={item.url} className="button is-primary is-outlined">Go To The Website</a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    )
  }
}

export default ContentItem