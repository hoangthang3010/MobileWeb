import React, {createContext, useState } from "react";
import {notification} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

// Khởi tạo context mới.
export  const CounterContext = createContext();
export default function ContextAPI(props){
  const [amount, setAmount] = useState(0)
  const [product, setProduct] = useState([])
  const removeProduct = (index) => {
      product.splice(index, 1)
      setProduct([...product])
      setAmount(amount-1)
  }
  const buyNow = (product1, name, capacity, id1, id) => {
    let count = 0
    let detail1 = Object.assign(product1,{name},{capacity},{id}, {id1})
    console.log(product)
    if (product.length === 0){
      return (setProduct(product.concat(detail1)),
        setAmount(amount+1)
      )
    }
    else{
      for(let i=0; i<product.length; i++){
        if (product[i].id2 === product1.id2 && product[i].capacity === capacity && product[i].name === name){
           count = 1
        }
      }
      if(count === 0){
        setProduct(product.concat(detail1))
        setAmount(amount+1)
      }
      else{
        // alert("Sản phẩm đã có trong giỏ hàng")
        notification.open({
          message: 'Sản phẩm đã có trong giỏ hàng',
          icon: <SmileOutlined style={{fontSize: '100', color: '#108ee9' }} />,
        });
      }
    }
  }
  const addToCart = (product1, name, capacity, id1, id) => {
    let count = 0
    let detail1 = Object.assign(product1,{name},{capacity}, {id}, {id1})
    if (product.length === 0){
      return (setProduct(product.concat(detail1)),
        setAmount(amount+1),
        notification.open({
          message: 'Đã thêm vào giỏ hàng',
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        })
      )
    }
    else{
      for(let i=0; i<product.length; i++){
        if (product[i].id2 === product1.id2 && product[i].capacity === capacity && product[i].name === name){
           count = 1
        }
      }
      if(count === 0){
        setProduct(product.concat(detail1))
        setAmount(amount+1)
        notification.open({
          message: 'Đã thêm vào giỏ hàng',
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
        console.log('ok');
      }
      else{
        // alert("Sản phẩm đã có trong giỏ hàng")
        notification.open({
          message: 'Sản phẩm đã có trong giỏ hàng',
          icon: <SmileOutlined style={{fontSize: '100', color: '#108ee9' }} />,
        });
      }
    }
  }
  // console.log(product.length);
  // console.log(product);
  const value = {
    amount: [amount, setAmount],
    product: [product, setProduct],
    buyNow: buyNow,
    removeProduct: removeProduct,
    addToCart: addToCart
  }
  return (
    <CounterContext.Provider
      value={value} 
    >
      {props.children}
    </CounterContext.Provider>
  );
}

// export default class ContextAPI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 1,
//       amount: 0,
//       cartItems: [],
//       name: [],
//     };
//   }
//   addToCart(product, name) {
//     var detail1 = Object.assign(product,{name});
//     this.setState({
//       amount: this.state.amount + 1,
//       cartItems: this.state.cartItems.concat(product),
//       name: this.state.name.concat({name:`${name}`}),
//     });
//     console.log(this.state.cartItems);
//   }
  
//   countUp() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }
//   // countDown = id =>{
//   //   const {cartItems} = this.state
//   //   cartItems.forEach(item =>{
//   //     if(item.id2 === id){
//   //       this.state.count === 1 ? this.state.count = 1 : this.state.count -=1;
//   //     }
//   //   })
//   //   this.setState({cartItems: cartItems})
//   // }
//   countDown() {
//     this.state.count === 1 ? this.state.count = 1 : this.state.count -=1;
//     this.setState({
//       count: this.state.count
//     });
//   }
//   render() {
//     return (
//       <CounterContext.Provider
//         value={{
//           name: this.state.name,
//           count: this.state.count,
//           amount: this.state.amount,
//           product: this.state.cartItems,
//           addToCart: this.addToCart.bind(this),
//           countUp: this.countUp.bind(this),
//           countDown: this.countDown.bind(this),
//         }}
//       >
//         {this.props.children}
//       </CounterContext.Provider>
//     );
//   }
// }

// export default class ContextAPI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   countUp() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }
//   countDown() {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   }
//   render() {
//     return (
//       <CounterContext.Provider
//         value={{
//           count: this.state.count,
//           countUp: this.countUp.bind(this),
//           countDown: this.countDown.bind(this),
//         }}
//       >
//         {this.props.children}
//       </CounterContext.Provider>
//     );
//   }
// }

    // <div>
    //   <code>freetuts.net</code>
    //   <h1>{counter.count}</h1>
    //   <button
    //     onClick={() => {
    //       counter.countUp();
    //     }}
    //   >
    //     Tăng
    //   </button>
    //   <button
    //     onClick={() => {
    //       counter.countDown();
    //     }}
    //   >
    //     Giảm
    //   </button>
    // </div>


  // countDown = id =>{
    
  //   const {cartItems} = this.state
  //   const {count} = this.state
  //   cartItems.forEach(item =>{
  //     if(item.id2 === id){
  //       // count === 1 ? count = 1 : count -=1;
  //       count = count - 1
  //     }
  //     console.log(item.id2);
  //     console.log(id);
  //     console.log(count);
  //   })
  //   this.setState({cartItems: cartItems})
  // }