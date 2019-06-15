import React, { Component, Fragment } from 'react'
import * as constants from '../constants'
import './WishCard.css'
import Image from '../Image'

export default class WishCard extends Component {
  render() {
    const {
      firstName,
      age,
      hometown,
      wishType,
      wishDetail,
      date,
      sponsor
    } = this.props.data
    let verb
    let imgprofile
    let imgsponsor
    let sponsortext
    let imgclass = 'icon'
    let imgsrc
    let imgtext
    switch (wishType) {
      case constants.WISH_TYPE_GO:
        verb = ' go to ';
        imgprofile = 'monthMagenta';
        imgsponsor = 'thd';
        sponsortext = "The Home Depot";
        imgsrc = 'goSomewhere';
        imgtext = 'To Go';
        break;
        case constants.WISH_TYPE_MEET:
        verb = ' meet ';
        imgprofile = 'monthBlue';
        imgsponsor = 'thd';
        sponsortext = "The Home Depot";
        imgsrc = 'meetSomeone';
        imgtext = 'To Meet';
        break;
        case constants.WISH_TYPE_SEE:
        verb = ' see ';
        imgprofile = 'monthMagenta';
        imgsponsor = 'needSponsor';
        sponsortext = "Need Sponsor";
        imgsrc = 'seeSomething';
        imgtext = 'To See';
        break;
        case constants.WISH_TYPE_BE:
        verb = ' be ';
        imgprofile = 'monthBlue';
        imgsponsor = 'needSponsor';
        sponsortext = "Need Sponsor";
        imgsrc = 'beSomeone';
        imgtext = 'To Be';
        break;
      default:
        break;
    }
    return (
      <Fragment>
        <div className="card">
          <p>
          <Image className={imgclass} src={imgprofile}/>
          <Image className={imgclass} src={imgsrc}/>
          
          <span>
            <b>{firstName}</b> - Age {age} from {hometown}, GA
          </span>
          <span>
            {firstName} wishes to {verb} {wishDetail}
          </span>
          <span> </span>
        
          <label class="verticalLine">{sponsortext}</label>
          <Image className={imgclass} src={imgsponsor}/>
          
          <label class="verticalLine">{imgtext}</label>
          <Image className={imgclass} src={imgsrc}/>
          
          <Image src="seeMore"/>
          </p>
        </div>
      </Fragment>
    )
  }
}
