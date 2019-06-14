import React, { Component } from 'react'
import WishCard from './WishCard'
import axios from 'axios'

// TODO: This is temporary, need to hook up to real data call
// const wishes = [
//   {
//     firstName: 'Sally',
//     age: '12',
//     hometown: 'Marietta',
//     illness: 'Critical Illness 1',
//     wishType: 'GO',
//     wishDetail: 'disney world'
//   },
//   {
//     firstName: 'Homer',
//     age: '8',
//     hometown: 'Woodstock',
//     illness: 'Critical Illness 2',
//     wishType: 'MEET',
//     wishDetail: 'someone famous'
//   },
//   {
//     firstName: 'Bobby',
//     age: '9',
//     hometown: 'Gwinnett',
//     illness: 'Critical Illness 3',
//     wishType: 'BE',
//     wishDetail: 'superhero'
//   },
//   {
//     firstName: 'Ally',
//     age: '16',
//     hometown: 'Atlanta',
//     illness: 'Critical Illness 4',
//     wishType: 'SEE',
//     wishDetail: 'grand canyon'
//   },
//   {
//     firstName: 'Elizabeth',
//     age: '13',
//     hometown: 'Alpharetta',
//     illness: 'Critical Illness 5',
//     wishType: 'GO',
//     wishDetail: 'the beach'
//   }
// ]

var wishes

console.log(wishes)

// import wishes from '../../../api/src/db/seed/wishes.json'

export default class WishList extends Component {
  state = {
    wishes: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3002/wish/getwishes`).then(res => {
      if (res.data && !res.data.message) {
        const wishes = res.data;
        this.setState({ wishes });
      }
    })
    .catch(err => console.log(err))
  }

  render() {
    const { wishes } = this.state
    return wishes ? (
      <div>
        <div>Wish List</div>
        {wishes.map((wish, index) => (
          <WishCard data={wish} key={index}></WishCard>
        ))}
      </div>
    ) : null
  }
}

// const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) =>
//         <ListItem key={number.toString()}
//                   value={number} />

//       )}
//     </ul>
//   );
