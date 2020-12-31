import React, { Component } from 'react';
import './aaa.css'
// import { Checkbox, Divider } from 'antd';

// const CheckboxGroup = Checkbox.Group;
let itemInfo = []
// const plainOptions = ['Apple', 'Pear', 'Orange'];
class AAA extends Component {
    constructor(props) {
        super(props)
        // let itemList = this.props
    }
    selectAll = (e) => {
        console.log(`checked = ${e.target.checked}`);
        console.log(e.target.value);
    }
    select = (e,item) => {
        console.log(`checked = ${e.target.checked}`);
        console.log(item)
        let list = []
        if(e.target.checked === true) {
            list.push(item)
            list.forEach((item1,index) => {
                if(item1.id == item.id) {
                    list.splice(index,1)
                }
            })
    }
    }
    render() {
        let bbb = this.props.itemList
        console.log(this.props.itemList)
        console.log(bbb)
        return (
            <div className='aaa'>
                <label><input type="checkbox" onChange={this.selectAll} value={'全选'} />全选</label>
                <div className="all">
                    {
                        bbb.map((item, index) => {
                            console.log(item.url)
                            let bg = {
                                width: '100px',
                                height: '100px',
                                backgroundImage: `url(${item.url})`,
                                backgroundSize: '80px 60px'
                            }
                            return (
                                <div className='item'>
                                    <div style={bg}>
                                        <label><input type="checkbox" onChange={this.select.bind(item)} /></label>
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                            )
                        })
                        // itemList.map()
                    }
                </div>
            </div>
        );
    }
}

export default AAA;