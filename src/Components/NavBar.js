import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMaster</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">About Us</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/category/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/category/general">General</Link></li>
                    <li><Link className="dropdown-item" to="/category/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/category/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/category/sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/category/technology">Technology</Link></li>
                    <li><Link className="dropdown-item" to="/category/entertainment">Entertainment</Link></li>
                  </ul>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}
