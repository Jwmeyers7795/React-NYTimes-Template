import React, {Component} from 'react'
import {Link} from 'react-router-dom'


import '../components-css/Header.css'
import Usint from '../NYT_images/us_int.png'
import Headline from '../NYT_images/headline.png'


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class Header extends Component {
  constructor() {
    super()
    this.state = {
      inout: "Log In"
    }
  }

  render() {

    const n = new Date()
    const y = n.getFullYear()
    const m = n.getMonth() + 1
    const d = n.getDate();

    var weekday = Array(7);

    weekday[0] = "Sunday"
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wednesday"
    weekday[4] = "Thursday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"

    var dd  = weekday[n.getDay()]


    let month

    if (m == 1) {
      month = "January"
    } else if (m == 2) {
      month = "February"
    } else if (m == 3) {
      month = "March"
    } else if (m == 4) {
      month = "April"
    } else if (m == 5) {
      month = "May"
    } else if (m == 6) {
      month = "June"
    } else if (m == 7) {
      month = "July"
    } else if (m == 8) {
      month = "August"
    } else if (m == 9) {
      month = "September"
    } else if (m == 10) {
      month = "October"
    } else if (m == 11) {
      month = "November"
    } else {
      month = "December"
    };

    return(
      <div className="wrap-head">
        <header className="menu-list">
            <div className="left">
              <div className="option-one"><a href="#" target="_self"><i className="material-icons" style={{fontSize: '20px'}}>menu</i></a></div>
              <div className="option-two"><a href="#" target="_self"><i className="material-icons" style={{fontSize: '20px'}}>search</i></a></div>
              <div className="search-box"><input type="text" placeholder="search" className="search" /></div>
              <div className="search-go"><button type="button" class="go-btn">Go</button></div>
            </div>
            <div className="right">
              <div className="option-three">
                <Link to='/Login'>
                  <button value="Log In" className="styled">{this.state.inout}</button>
                </Link>
              </div>
              <div className="option-four"><a href="#" target="_self"><i className="material-icons" style={{fontSize: '20px'}}>settings</i></a></div>
            </div>
        </header>
        <header className="header">
            <div className="us-int"><img src={Usint} alt="HTML map" border="0" useMap="#html3"/>
                <map name="html3">
                    <area shape="rect" coords="10,10,32,25" href="#" alt="US Link" target="_self"/>
                    <area shape="rect" coords="43,10,114,25" href="#" alt="Int Link" target="_self"/>
                    <area shape="rect" coords="126,10,146,25" href="#" alt="Chinese Link" target="_self"/>
                </map>
            </div>
        </header>
        <header className="header-2">
            <div className="title"><img className="test" src={Headline} alt="HTML map" border="0" useMap="#html4"/>
                <map name="html4">
                    <area shape="rect" coords="5,9,383,55" href="#" alt="Homepage Link" target="_self"/>
                </map>
            </div>
            <div className="sub-header">
                <div className="space">{dd} {month} {d}, {y} </div>
                <div className="space">|</div>
                <div className="space"><a href="#" target="_self"> Today's Paper</a></div>
                <div className="space">|</div>
                <div className="space"><a href="#" target="_self">Video</a></div>
                <div className="space">|</div>
                <div className="space"><a href="#" target="_self">{this.props.info.temp} F</a></div>
                <div className="space">|</div>
                <div className="space"><a href="#" target="_self">Shanghai {this.props.info.percent}%</a></div>
            </div>
        </header>
        <nav className="nav-sections">
            <div className="split"><a href="#" target="_self" className="nav">World</a></div>
            <div className="split"><a href="#" target="_self" className="nav">U.S.</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Politics</a></div>
            <div className="split"><a href="#" target="_self" className="nav">N.Y.</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Business</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Opinion</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Tech</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Science</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Health</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Sports</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Arts</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Style</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Food</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Style</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Travel</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Magazine</a></div>
            <div className="split"><a href="#" target="_self" className="nav">T Magazine</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Real Estate</a></div>
            <div className="split"><a href="#" target="_self" className="nav">Video</a></div>
        </nav>
      </div>
    )
  }
}

export default Header
