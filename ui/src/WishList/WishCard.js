import React, { Component, Fragment } from 'react'
import * as constants from '../constants'
import './WishCard.css'

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
    switch (wishType) {
      case constants.WISH_TYPE_GO:
        verb = ' go to ';
        break;
        case constants.WISH_TYPE_MEET:
        verb = ' meet ';
        break;
        case constants.WISH_TYPE_SEE:
        verb = ' see ';
        break;
        case constants.WISH_TYPE_BE:
        verb = ' be ';
        break;
      default:
        break;
    }
    return (
      <Fragment>
        <div className="card">
          <p>
            <b>{firstName}</b> - Age {age} from {hometown}, GA
          </p>
          <p>
            {firstName} wishes to {verb} {wishDetail}
        </p>
        </div>

        <div>{date}</div>
        <div>{sponsor}</div>
      </Fragment>
    )
  }
}
