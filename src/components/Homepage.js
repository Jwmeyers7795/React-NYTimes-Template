import React, {Component} from 'react'
import Header from './Header';
import CenterSection from './CenterSection';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import Mccarthy from '../NYT_images/mccarthy_pic.png'
import Hospital from '../NYT_images/hospital_pic.png';
import Briefing from '../NYT_images/briefing_pic.png';
import Vw from '../NYT_images/VW_pic.png'
import Asian from '../NYT_images/asian_pic.png'
import Meteor from '../NYT_images/meteor_pic.png'

class Homepage extends Component {
  render() {
    return(
      <div>
        <Header info={{
          date: 'Thursday, October 8, 2015',
          temp: '63',
          percent: '0.00'
        }} />
        <div className="all-articles">
          <LeftSection info={{
            l1headline: 'A House, and a Republican Party, Divided Against Itself',
            l1author: 'CARL HULSE',
            l1image: '',
            l1content: 'Kevin McCarthys decision to drop out of the race for speaker echoed the disarray in the House 17 years ago, but some Republicans worry that this time may be worse.',
            l2headline: 'McCarthy Drops Out of Speakers Race, Adding to Chaos',
            l2author: 'JENNIFER STEINHAUER and DAVID M. HERSZENHORN',
            l2image:   Mccarthy,
            l2content: 'Representative Kevin McCarthy abruptly took himself out of the race to succeed John A. Boehner as House speaker, leaving shocked members with no clear path forward.',
            l2comments: '1311'
          }} />
          <CenterSection info={{
            c1image: Hospital,
            c1imagecaption: 'The intensive care unit at Mercy Hospital Independence in Kansas, which closes this weekend. Without patients, the unit has been used for storage.',
            c1imagecitation: 'Amy Stroth for the New York Times',
            c1headline: 'Hospital Crisis Emerges in Rural America',
            c1author: 'MITCH SMITH and ABBY GOODNOUGH',
            c1content: 'This weekend, Mercy Independence Hospital in Kansas will join dozens of rural hospitals that have closed in the last five years because of financial challenges and shrinking populations.',
            c2image: Briefing,
            c2imagecitation:'Doug MGills NYT',
            c2author: 'ANDREA KANNAPELL and SANDRA STEVENSON',
            c2picsoftheday: 'Israel and Elsewhere'
          }} />
          <RightSection info={{
            r1preheadline: '',
            r1headline: 'VW Needs to Come Clean, Now',
            r1image: Vw,
            r1author: 'THE EDITORIAL BOARD',
            r1content: 'Nobody believes that only a handful of managers knew about the elaborate scheme to cheat on emissions tests.',
            r1bullet1: 'Editorial: Cultural Destruction as a War Crime',
            r1bullet2: 'Room for Debate: Reparations for Slavery in Former Colonies',
            r1bullet3: 'Join us on Facebook >>',
            r1bullet4: 'Join us on Twitter >>',
            r2preheadline: 'THE STONE',
            r2headline: 'The Invisible Asian',
            r2image: Asian,
            r2author: 'GEORGE YANCY and DAVID HAEKWON KIM',
            r2content: 'Often hoodwinked by the label of the "model minority," we must resist the stereotype of Asian passivity.',
            r2bullet1: 'Blow: With Ben Carson, the Doctor is Always',
            r2bullet2: 'Cohen: Indifference Kills',
            r2bullet3: 'Collins: Too Many Bushes',
            r2bullet4: 'Kristof: 3 Peerless Republicans for President',
            r3watchimage: Meteor,
            r3watchimagecitation: 'ASSOCIATED PRESS PHOTO/SCANPIX, P-M HEDEN',
            r3watchcontent: 'The annual Draconid meteor shower peaks Thursday night and is likely to be helped by good visibility and a'
          }} />
        </div>
      </div>
    )
  }
}

export default Homepage
