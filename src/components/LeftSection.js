import React, {Component} from 'react'
import '../components-css/LeftSection.css'

class LeftSection extends Component {
  render() {
    return(
      <div className="ls-main-articles-container">
          <div className="ls-main-articles">
              <article className="ls-article-1">
                  <div className="pre-headline">NEWS ANALYSIS</div>
                  <div className="l1-headline"><a href="#" target="_self">{this.props.info.l1headline}</a></div>
                  <div className="author-and-time">
                      <div className="author">By {this.props.info.l1author}</div>
                      <time className="time" datetime="2015-10-8 20:13-0500">17 minutes ago</time>
                  </div>
                  <div className="content">{this.props.info.l1content}
                  </div>
              </article>
              <article className="ls-article-2">
                  <div className="l2-headline"><a href="#" target="_self">{this.props.info.l2headline}</a></div>
                  <div className="author">By {this.props.info.l2author}</div>
                  <time className="time" datetime="2015-10-8 20:01-0500">8:01 PM ET</time>
                  <figure className="floated-image"><img src={this.props.info.l2image} /></figure>
                  <div className="content">{this.props.info.l2content}
                  </div>
                  <div className="blue-comments"><a href="#" target="_self">- 1311 Comments</a></div>
                  <div className="pre-headline"><a href="#" target="_self">RELATED COVERAGE</a></div>
              </article>
          </div>
      </div>
    )
  }
}

export default LeftSection
