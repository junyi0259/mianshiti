import AAA from './aaa.jsx'
import BBB from './bbb.jsx'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    const picList = [
      {
        id: '1',
        name: 'foo',
        url: 'https://www.super-hobby.com/zdjecia/7/9/3/29984_2_tru01050_15.jpg'
      },
      {
        id: '2',
        name: 'foo',
        url: 'https://www.super-hobby.com/zdjecia/2/8/3/29984_1_tru01050_12.jpg'
      },
      {
        id: '3',
        name: 'foo',
        url: 'https://www.super-hobby.com/zdjecia/3/8/3/29984_1_tru01050_2.jpg'
      },
    ];
    return (
      <div>
        <div className="App">
          <AAA itemList={picList}></AAA>
          <BBB a1='3333' a2='444444'></BBB>
        </div>
      </div>
    )
  }
}
