import React, { useEffect, useState} from 'react'
import './Productdetail.scss'
import productApi from '../../api/productApi'
import {useParams} from 'react-router-dom'
import {CounterContext} from '../contextapi/counterCart'
import { Link } from 'react-router-dom';

const Productdetail = ({match}) => {
    // console.log(match.params.id);
    // console.log(match.params.id1);
    const param = useParams()
    const [product, setProduct] = useState('')
    const [showRate, setShowRate] = useState(false)
    const [idVersion, setIdVersion] = useState(match.params.id1)
    const [idType, setIdType] = useState(match.params.id2)
    const fetchProductApi = async () => {
        const response = await productApi.fetchProductApiById(param.id)
        setProduct(response)
      } 
    //   console.log(product.version[idVersion].type[idType].price);
    //   console.log(product);
    useEffect(() => {
        fetchProductApi()
    }, [])
    const handleRate = () =>{
        setShowRate(true)
    }
    const handleCancel = ()=>{
        setShowRate(false)
    }
    const handleVersion = (index) =>{
        setIdVersion(index)
        setIdType(0)
        // setBorder(index)
        // setId1(index)
        
    }
    const handleType = (index) =>{
        setIdType(index)

    }
    const ShowRate = showRate ? (<div className="product__mid__rate__box__action">
                                    <div><span>Vui lòng chọn đánh giá: </span></div>
                                </div>) : ''
    const btnshowRate = showRate ? (<button onClick={handleCancel}>Đóng</button>) : (<button onClick={handleRate}>Gửi đánh giá của bạn</button>)
    return(
        <div className="productD">
            <div className="productD__top">
                <div className="card-group">
                    <div className="col-4 productD__top__left">
                        <img src={product.version && product.version[idVersion].type[idType].image}/>
                    </div>
                    <div className="col-4 productD__top__center">
                        <h3>{product.title}</h3>
                        <div className="productD__top__center__price">Giá từ: <span>{product.version && `${product.version[idVersion].type[idType].price}`.slice(-9,-6) + '.' + `${product.version[idVersion].type[idType].price}`.slice(-6,-3) + '.' + `${product.version[idVersion].type[idType].price}`.slice(-3)}đ</span></div>
                        <div className="productD__top__center__capacity">
                            <h1>Chọn dung lượng sản phẩm</h1>
                                <div className="productD__top__center__color__item card-group">
                                    {   product &&
                                        product.version.map((element,index) => {
                                            return (
                                                <>
                                                {/* style={{border: `1px solid ${border && (border === 1 ? '#e1e4e9' : 'red')}`}} */}
                                                {/* style={{border: `1px solid ${id1 == index ? 'red' : '#e1e4e9'}`}} */}
                                                    <div className="col-4">
                                                        <div    
                                                            key={index} 
                                                            style={{border: `1px solid ${idVersion == index ? 'red' : '#e1e4e9'}`, padding: '10px', margin: '5px -10px'}} 
                                                            onClick={()=>handleVersion(index)}
                                                        >
                                                            <h1>{element.capacity}</h1>
                                                            <span>{element.price}đ</span>
                                                        </div>
                                                    </div>
                                                </>
                                            ) 
                                        })
                                    }
                                </div>
                        </div>
                        <div className="productD__top__center__color">
                            <h1>Chọn màu sản phẩm</h1>
                                <div className="productD__top__center__color__item card-group" >
                                    {   product.version &&
                                        product.version[idVersion].type.map((element,index) => {
                                            return (
                                                <>
                                                <div className="col-4">
                                                    <div    
                                                        key={index} 
                                                        style={{border: `1px solid ${idType == index ? 'red' : '#e1e4e9'}`, padding: '10px', margin: '5px -10px'}} 
                                                        onClick={()=>handleType(index)}
                                                    >
                                                        <h1>{element.color}</h1>
                                                        <span>{`${element.price}`.slice(-9,-6) + '.' + `${element.price}`.slice(-6,-3) + '.' + `${element.price}`.slice(-3)}đ</span>
                                                    </div>
                                                </div>
                                                </>
                                            ) 
                                        })
                                    }
                                </div>
                        </div>
                        {
                            <CounterContext.Consumer>
                                {({buyNow, addToCart})  => 
                                    <div>
                                        <Link to='/card'>
                                            <button className='col-6'
                                                onClick={() => {buyNow(product.version[idVersion].type[idType],product.title,product.version[idVersion].capacity, product.version[idVersion].id1, param.id);}}
                                            >
                                                MUA NGAY
                                            </button>
                                        </Link>
                                        <button className='col-6'
                                            onClick={() => {addToCart(product.version[idVersion].type[idType],product.title,product.version[idVersion].capacity, product.version[idVersion].id1, param.id);}}
                                        >
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                }
                            </CounterContext.Consumer>
                        }
                    </div>
                    <div className="col-4 productD__top__right">
                        <div className="productD__top__right__specifications">
                            <div className="productD__top__right__specifications__title">
                                <span>Thông số kĩ thuật</span>
                            </div>
                            <div>hi</div>
                        </div>
                        <div className="productD__top__right__top">

                        </div>
                        <h1>Tình trạng</h1>
                        <p>Máy mới 100% , chính hãng Apple Việt Nam. CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam</p>
                        <h1>Hộp bao gồm</h1>
                        <p>Thân máy, cáp USB-C to Lightning, sách HDSD</p>
                        <h1>Bảo hành</h1>
                        <p>Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple Việt Nam. 1 ĐỔI 1 trong 30 ngày nếu có lỗi nhà sản xuất.(Chi tiết)</p>
                    </div>
                </div>
            </div>
            <div className="productD__mid">
                <div className="card-group">
                    <br/>
                    <div className="col-8 productD__mid__rate">
                        <span>Đánh giá {product.title}</span>
                        <div className="productD__mid__rate__box">
                            <div className="card-group">
                                <div className="col-3 productD__mid__rate__box__left">
                                    <span>SAO TRUNG BÌNH</span>
                                    <div>
                                    </div>
                                </div>
                                <div className="col-6 productD__mid__rate__box__center">
                                    <div>
                                        <ul>
                                            <li>5 sao</li>
                                            <li>4 sao</li>
                                            <li>3 sao</li>
                                            <li>2 sao</li>
                                            <li>1 sao</li>  
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 productD__mid__rate__box__right">
                                    {/* <div className="product__mid__rate__box__right__btn"> */}
                                        {btnshowRate}
                                    {/* </div> */}
                                    
                                </div>
                            </div>
                            {ShowRate}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}
export default Productdetail;