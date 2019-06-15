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
    let imgclass = 'icon'
    let imgsrc
    switch (wishType) {
      case constants.WISH_TYPE_GO:
        verb = ' go to ';
        imgprofile = 'monthMagenta';
        imgsponsor = 'thd';
        imgsrc = 'goSomewhere';
        break;
        case constants.WISH_TYPE_MEET:
        verb = ' meet ';
        imgprofile = 'monthBlue';
        imgsponsor = 'thd';
        imgsrc = 'meetSomeone';
        break;
        case constants.WISH_TYPE_SEE:
        verb = ' see ';
        imgprofile = 'monthMagenta';
        imgsponsor = 'needSponsor';
        imgsrc = 'seeSomething';
        break;
        case constants.WISH_TYPE_BE:
        verb = ' be ';
        imgprofile = 'monthBlue';
        imgsponsor = 'needSponsor';
        imgsrc = 'beSomeone';
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
            <span class="verticalLine">
            <b>{firstName}</b> - Age {age} from {hometown}, GA
            </span>
          <span class="verticalLine">
            {firstName} wishes to {verb} {wishDetail}
            </span>
        <Image className={imgclass} src={imgsponsor}/>
        <Image className={imgclass} src={imgsrc}/>
        <Image src="seeMore"/>
        </p>
        <p>{date}</p>
        <p>{sponsor}</p>
        </div>
      </Fragment>
    )
  }
}
