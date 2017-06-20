import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img src="http://blog.thepilatessuite.co.uk/wp-content/uploads/2016/08/ls_news.jpg" alt="Bulma logo" style={{width:'100px'}} />
            </a>
            <a className="nav-item is-tab is-hidden-mobile is-active">Home</a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab is-hidden-tablet is-active">Home</a>
            <a className="nav-item is-tab is-hidden-tablet">Features</a>
            <a className="nav-item is-tab is-hidden-tablet">Pricing</a>
            <a className="nav-item is-tab is-hidden-tablet">About</a>
            <a className="nav-item is-tab">
              <figure className="image is-16x16" style={{marginRight: 8}}>
                <img src="http://bulma.io/images/jgthms.png" alt="icon profile"/>
              </figure>
              Profile
            </a>
            <a className="nav-item is-tab">Log out</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header