import React, {Component} from 'react'

import '../components-css/Header.css'
import Usint from '../NYT_images/us_int.png'
import Headline from '../NYT_images/headline.png'

class Header extends Component {
  render() {
    return(
      <div className="wrap-head">
        <header className="menu-list">
            <div className="left">
              <div className="option-one"><a href="/Loginpage" target="_self"><i className="material-icons" style={{fontSize: '20px'}}>menu</i></a></div>
              <div className="option-two"><a href="#" target="_self"><i className="material-icons" style={{fontSize: '20px'}}>search</i></a></div>
            </div>
            <div className="right">
              <div className="option-three"><a href="/Login"><button value="Log In" className="styled">Log In</button></a></div>
              <div className="option-four"><a href="#" target="_self"><i className="material-icons" style={{fontSize: '20px'}}>settings</i></a></div>
            </div>
        </header>
        <header className="header">
            <div className="us-int"><img src={Usint} alt="HTML map" border="0" usemap="#html3"/>
                <map name="html3">
                    <area shape="rect" coords="10,10,32,25" href="#" alt="US Link" target="_self"/>
                    <area shape="rect" coords="43,10,114,25" href="#" alt="Int Link" target="_self"/>
                    <area shape="rect" coords="126,10,146,25" href="#" alt="Chinese Link" target="_self"/>
                </map>
            </div>
        </header>
        <header className="header-2">
            <div className="title"><img className="test" src={Headline} alt="HTML map" border="0" usemap="#html4"/>
                <map name="html4">
                    <area shape="rect" coords="5,9,383,55" href="#" alt="Homepage Link" target="_self"/>
                </map>
            </div>
            <div className="sub-header">{this.props.info.date} | <a href="#" target="_self">Today's
                Paper</a> | <a href="#" target="_self">Video</a> | <a href="#" target="_self">{this.props.info.temp}F</a> | <a href="#" target="_self">Shanghai {this.props.info.percent}%</a>
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
