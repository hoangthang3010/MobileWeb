import React,{useContext, useEffect, useState} from 'react';
import {CounterContext} from '../contextapi/counterCart'
import './card.scss'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Link } from 'react-router-dom';

const Cart = ()=>{
    const value = useContext(CounterContext)
    const [product1, setProduct] = value.product
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        const getTotal = () => {
            const res = product1.reduce((prev,item) =>{
                return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()
    }, [product1])
    const countUp = (i) => {
        product1.forEach((item,index) => {
            if(i===index){
                item.count += 1;
            }
        })
        setProduct([...product1])
    }
    const countDown = (i) => {
        product1.forEach((item,index) => {
            if(i===index){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        setProduct([...product1])
    }
    const removeProduct = (i) =>{
        product1.forEach((item,index) => {
            if(i===index){
                product1.splice(index, 1)
            }
        })
        setProduct([...product1])
    }
    console.log(product1);
    return(
        <>
        {
            product1 && product1.length !== 0 ? (
                <div className='checkout'>
                    <div className='checkout__top card-group'>
                        <Link to='/'>
                         <p className='checkout__top__back col-6'>Tiếp tục tìm kiếm sản phẩm</p>
                        </Link>
                        <h2 className='checkout__top__title col-6'>Giỏ hàng của bạn</h2>
                    </div>
                    <hr />
                    {
                        product1.map((product,index) => (
                            <div className='checkout__item card-group' key={index}>
                                <div className='checkout__item__image col-4'>
                                <hr /><img src={product.image} alt="Card image cap"/>                                       
                                </div>
                                <div className='checkout__item__detail col-9'>
                                    <hr />
                                    <Link to={`/product/${product.id}/${product.id1 - 1}/${product.id2 - 1}`}>
                                        <h2>{product.name} - {product.color} - {product.capacity}</h2>
                                    </Link>
                                    <span>{`${product.price}`.slice(-9,-6) + '.' + `${product.price}`.slice(-6,-3) + '.' + `${product.price}`.slice(-3)}đ</span>
                                    {/* <Counter/> */}
                                    
                                    <div className='checkout__item__detail__count'>
                                        <CounterContext.Consumer>
                                            {({removeProduct})  => 
                                                    <p  className='checkout__item__detail__count--change'
                                                        onClick={() => 
                                                            {   
                                                                removeProduct(index);
                                                            }}
                                                    >
                                                        Xóa khỏi giỏ hàng
                                                    </p>
                                            }
                                        </CounterContext.Consumer>
                                        {/* <p onClick={() => removeProduct(index)}>Xóa khỏi giỏ hàng</p> */}
                                        {
                                            product1[index].count && product1[index].count !== 1 ? (
                                                <p  className='checkout__item__detail__count--down' onClick={() => countDown(index)}>-</p>
                                            ) : ''
                                        }
                                        <p  className='checkout__item__detail__count--num'>{product.count}</p>
                                        <p  className='checkout__item__detail__count--change' onClick={() => {countUp(index);}}>+</p>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        ))
                    }
                    <hr />
                    <div className='checkout__total' checkout__top>Tổng tiền: {`${total}`.slice(-9,-6) + '.' + `${total}`.slice(-6,-3) + '.' + `${total}`.slice(-3)}đ</div>
                    
                </div>
                
            ) : (
                <div className="noitem">
                    <SentimentVeryDissatisfiedIcon/>
                    <span>Không có sản phẩm nào trong giỏ hàng</span>
                    <Link to='/'>
                        <button>Quay lại trang chủ</button>
                    </Link>
                </div>
            ) 
        }
        </>
    )
}
export default Cart