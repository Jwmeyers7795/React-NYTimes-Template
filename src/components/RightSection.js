import React, {Component} from 'react'
import '../components-css/RightSection.css'

class RightSection extends Component {
  render(){
    return(
      <div className="rs-main-articles-container">
        <div className="rs-main-articles">
            <div className="rs-article-1">
                <header className="opinion-pages-title"><a href="#" target="_self">The Opinion Pages</a></header>
                <div className="opinion-articles">
                    <article className="opinion-article-1">
                        <div className="pre-headline"><a href="#" target="_self">{this.props.info.r1preheadline}</a></div>
                        <a href="#" target="_self">
                          <div className="r1-opinion-headline">{this.props.info.r1headline}</div>
                          <figure className="floated-image"><img src={this.props.info.r1image} /></figure>
                          <div className="author">{this.props.info.r1author}</div>
                          <div className="content">{this.props.info.r1content}</div>
                        </a>
                        <ul className="opinion-list">
                          <li className="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r1bullet1}</span></a></li>
                          <li className="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r1bullet2}</span></a></li>
                          <li className="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r1bullet3}</span></a></li>
                          <li className="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r1bullet4}</span></a></li>
                        </ul>
                    </article>
                    <article className="opinion-article-2">
                        <div className="pre-headline"><a href="#" target="_self">{this.props.info.r2preheadline}</a></div>
                        <a href="#" target="_self">
                          <div className="r1-opinion-headline">{this.props.info.r2headline}</div>
                          <figure className="floated-image"><img src={this.props.info.r2image} /></figure>
                          <div className="author">By {this.props.info.r2author}</div>
                          <div className="content">{this.props.info.r2content}</div>
                        </a>
                        <ul className="opinion-list">
                          <li className="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r2bullet1}</span></a></li>
                          <li className="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r2bullet2}</span></a></li>
                          <li className="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r2bullet3}</span></a></li>
                          <li className="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r2bullet4}</span></a></li>
                        </ul>
                    </article>
                </div>
            </div>
            <div className="rs-article-2">
                <header className="watching-headline"><a href="#" target="_self">Watching</a></header>
                <div className="divide">
                    <time className="one-hour" dateTime="2015-10-8 19:30-0500">1h</time>
                    <figure className=""><img src={this.props.info.r3watchimage} className="pic-width" />
                        <figcaption className="watching-pic-citation">{this.props.info.r3watchimagecitation}</figcaption>
                        <figcaption className="watching-description"><a href="#" target="_self">{this.props.info.r3watchcontent}</a></figcaption>
                    </figure>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default RightSection
