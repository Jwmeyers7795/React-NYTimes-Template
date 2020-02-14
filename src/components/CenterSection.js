import React, {Component} from 'react'
import '../components-css/CenterSection.css'
import Briefing from '../NYT_images/briefing_pic.png'

class CenterSection extends Component {
  render() {
    return(
      <div className="c-main-articles-container">
          <div className="c-main-articles">
              <article className="c-article-1">
                  <figure className="article-image">
                     <img src={this.props.info.c1image} className="pic-width" />
                        <figcaption className="image-caption">{this.props.info.c1imagecaption}</figcaption>
                        <figcaption className="author">{this.props.info.c1imagecitation}</figcaption>
                  </figure>
                  <a href="#" target="_self">
                    <div className="c1-headline">{this.props.info.c1headline}</div>
                    <div className="author-and-time">
                         <div className="author">By {this.props.info.c1author}</div>
                         <time className="time" dateTime="2015-10-8 20:13-0500">8:13 PM ET</time>
                    </div>
                    <div className="content">{this.props.info.c1content}</div>
                  </a>

              </article>
              <article className="c-article-2">
                  <figure className="floated-image-2"><img src={this.props.info.c2image} className="pic-width" />
                      <figcaption className="evening-briefing-pic-citation">{this.props.info.c2imagecitation}</figcaption>
                  </figure>
                  <a href="#" target="_self">
                    <div className="c2-headline">Your Evening Briefing</div>
                    <div className="author-and-time">
                      <div className="author">By {this.props.info.c2author}</div>
                      <div><time className="time" dateTime="2015-10-8 17:55-0500">5:55 PM ET</time></div>
                    </div>
                    <div className="content">Here's what you need to know at the end of the day.</div>
                  </a>
                  <div className="pictures-of-the-day"><a href="#" target="_self">- Pictures of the Day: {this.props.info.c2picsoftheday}</a></div>
              </article>
          </div>
      </div>
    )
  }
}

export default CenterSection
