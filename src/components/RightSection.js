import React, {Component} from 'react'
import '../components-css/RightSection.css'

class RightSection extends Component {
  render(){
    return(
      <div class="rs-main-articles-container">
        <div class="rs-main-articles">
            <div class="rs-article-1">
                <header class="opinion-pages-title"><a href="#" target="_self">The Opinion Pages</a></header>
                <div class="opinion-articles">
                    <article class="opinion-article-1">
                        <div class="r1-opinion-headline"><a href="#" target="_self">{this.props.info.r1headline}</a></div>
                        <figure class="floated-image"><img src={this.props.info.r1image} /></figure>
                        <div class="author">{this.props.info.r1author}</div>
                        <div class="content">{this.props.info.r1content}</div>
                        <ul class="opinion-list">
                          <li class="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r1bullet1}</span></a></li>
                          <li class="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r1bullet2}</span></a></li>
                          <li class="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r1bullet3}</span></a></li>
                          <li class="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r1bullet4}</span></a></li>
                        </ul>
                    </article>
                    <article class="opinion-article-2">
                        <div class="pre-headline"><a href="#" target="_self">THE STONE</a></div>
                        <div class="r1-opinion-headline"><a href="#" target="_self">{this.props.info.r2headline}</a></div>
                        <figure class="floated-image"><img src={this.props.info.r2image} /></figure>
                        <div class="author">By {this.props.info.r2author}</div>
                        <div class="content">{this.props.info.r2content}</div>
                        <ul class="opinion-list">
                          <li class="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r2bullet1}</span></a></li>
                          <li class="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r2bullet2}</span></a></li>
                          <li class="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r2bullet3}</span></a></li>
                          <li class="opinion-link"><a href="#" target="_self"><span style={{fontSize: '12px'}}>{this.props.info.r2bullet4}</span></a></li>
                        </ul>
                    </article>
                </div>
            </div>
            <div class="rs-article-2">
                <header class="watching-headline"><a href="#" target="_self">Watching</a></header>
                <div class="divide">
                    <time class="one-hour" datetime="2015-10-8 19:30-0500">1h</time>
                    <figure class=""><img src={this.props.info.r3watchimage} class="pic-width" />
                        <figcaption class="watching-pic-citation">{this.props.info.r3watchimagecitation}</figcaption>
                        <figcaption class="watching-description"><a href="#" target="_self">{this.props.info.r3watchcontent}</a></figcaption>
                    </figure>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default RightSection
