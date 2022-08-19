//import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NavBar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <a className="navbar-brand" href="/">Picture News </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle active" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/">business</a>
                        <a className="dropdown-item" href="/">entertainment</a>
                        <a className="dropdown-item" href="/">general</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">health</a>
                        <a className="dropdown-item" href="/">science</a>
                        <a className="dropdown-item" href="/">sports</a>
                        <a className="dropdown-item" href="/">technology</a>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
  }
}

export default NavBar