import React,{useContext, useEffect, useState} from 'react';
import productApi from '../../api/productApi'
import {useParams} from 'react-router-dom'
import './compare.scss'
import { Link } from 'react-router-dom';
import SearchTextField from '../searchtextfield/SearchTextField'
import iconcompare from  '../../picture/iconcompare.jpg'

const Compare = ({match})=>{
    const listInformation = [
        {
            title: "Kích thước"
        },
        {
            title: "Màn hình"
        },
        {
            title: "Cam sau"
        },
        {
            title: "Cam trước"
        },
        {
            title: "Hệ điều hành"
        },
        {
            title: "CPU"
        },
        {
            title: "Ram"
        },
        {
            title: "Dung lượng pin"
        },
        {
            title: "Bộ nhớ"
        }
    ]
    const param = useParams()
    const [product, setProduct] = useState('')
    const [productCompare, setProductCompare] = useState('')
    const [idVersion, setIdVersion] = useState(param.id1)
    const [idType, setIdType] = useState(param.id2)
    const [idVersion2, setIdVersion2] = useState('')
    const [idType2, setIdType2] = useState('')
    const [idCompare, setIdCompare] = useState('')
    const [listProduct, setListProduct] = useState([])
    const [value, setValue] = useState('')
    const fetchProductApi = async () => {
        const response = await productApi.fetchProductApiById(param.id)
        setProduct(response)
        // let detail1 = Object.assign(response,{name},{capacity},{id}, {id1})
    }
    const fetchProductCompare = async () => {
        const response = await productApi.fetchProductApiById(idCompare)
        setProductCompare(response)
    }
    useEffect(() => {
        fetchProductApi()
        fetchProductCompare()
    }, [idCompare])
    const onClickProduct = (index, index1, index2) => {
        setIdType2(index2)
        setIdVersion2(index1)
        setIdCompare(index+1)
    }
    const onValue = (i) => {
        setValue(i)
        if(i === ''){
            console.log('hi');
            setIdCompare('')
        }
        
    }
    console.log(value);
    console.log(idCompare);
    console.log(productCompare);
    return(
        <div className='compare'>
            <div className='compare__product'>
                <div className='compare__product__title'>
                    <h1>So sánh điện thoại </h1>
                </div>
                <tr className='row' style={{textAlign:'center'}}>
                    <td className='col-2'/>
                    <td className='col-4'>
                        <input
                            style={{pointerEvents: 'none'}}
                            placeholder = {`${product.title}`}
                        />
                    </td>
                    <td className='col-4'>
                        <SearchTextField 
                            onClickProduct={onClickProduct} 
                            onValue={onValue}
                        />
                    </td>
                    <td className='col-2'/>
                </tr>
                <tr className='row' style={{textAlign:'center'}}>
                    <td className='col-2'/>
                    <td className='col-4'>
                        <div>
                            <img 
                                src={product.version && product.version[idVersion].type[idType].image}
                                style={{
                                    maxWidth: '100%',
                                    padding: '20px'
                                }}
                            />
                        </div>
                    </td>
                    <td className='col-4' style={{margin:'auto'}}>
                    {
                        !productCompare.length && value ? (
                            <img 
                                src={productCompare.version && product.version[idVersion2].type[idType2].image}
                                style={{
                                    maxWidth: '100%',
                                    padding: '20px'
                                }}
                            />
                        ) : ( 
                                <img src={iconcompare}
                                    style={{
                                        maxWidth:'50%',
                                    }}
                                />
                        )
                    }
                    </td>
                    <td className='col-2'/>
                </tr>
                <tr className='row' style={{textAlign:'center'}}>
                    <td className='col-2'/>
                    <td className='col-4'>
                        <span>  
                            {   product.version && 
                                `${product.version[idVersion].type[idType].price}`.slice(-9,-6) + '.' + 
                                `${product.version[idVersion].type[idType].price}`.slice(-6,-3) + '.' + 
                                `${product.version[idVersion].type[idType].price}`.slice(-3)
                            } đ
                        </span>
                    </td>
                    <td className='col-4'>
                        {
                            productCompare.version ? (
                            <span> 
                                {   
                                    productCompare.version && 
                                    `${productCompare.version[idVersion2].type[idType2].price}`.slice(-9,-6) + '.' + 
                                    `${productCompare.version[idVersion2].type[idType2].price}`.slice(-6,-3) + '.' + 
                                    `${productCompare.version[idVersion2].type[idType2].price}`.slice(-3)
                                } đ
                            </span>) : (<span>Giá sản phẩm</span>)
                        } 
                    
                    </td>
                    <td className='col-2'/>
                </tr>
            </div>
            <hr/>
            <div className='compare__product__information'>
                <table className='table table-borderless table-hover'>
                    <thead style={{fontSize: '20px', fontWeight: '600'}}>Thông tin chi tiết</thead>
                    <hr/>
                    <tbody>
                    {
                        listInformation  && product.information && listInformation.map((item, index)  =>{
                            console.log(product.version[idVersion].capacity);
                            let info = product.version[idVersion].capacity
                            let detail = product.information.concat({name: 'rom',info})
                            // let info1 = []
                            let detail1 = []
                            if (productCompare.information){
                                // info1 = productCompare.version[idVersion2].capacity;
                                detail1 = productCompare.information.concat({name: 'rom',info: `${productCompare.version[idVersion2].capacity}`})
                            }
                            console.log(detail1);
                            return(
                                <tr className='row'>
                                    <td className='col-2' style={{fontWeight: 'bold'}}>{listInformation[index].title}</td>
                                    {
                                        
                                    }
                                    <td className='col-4'>{detail[index].info}</td>
                                    {
                                        productCompare.information &&
                                        detail1 ? (<td className='col-4'>{detail1[index].info}</td>) : ''
                                    }
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Compare

                {/* display: 'flex', */}
                {/* <div style={{  display: 'flex', marginTop: '30px'}}>
                    <div className='col-2'></div>
                    <div className='col-4 compare__product__information__1'>
                        <input
                            style={{pointerEvents: 'none'}}
                            placeholder = {`${product.title}`}
                        />
                        <div>
                            <img src={product.version && product.version[idVersion].type[idType].image}/>
                        </div>
                        <span>  {   product.version && 
                                    `${product.version[idVersion].type[idType].price}`.slice(-9,-6) + '.' + 
                                    `${product.version[idVersion].type[idType].price}`.slice(-6,-3) + '.' + 
                                    `${product.version[idVersion].type[idType].price}`.slice(-3)
                                } đ
                        </span>
                    </div>
                    <div className='col-4 compare__product__information__2'>
                        <SearchTextField 
                            onClickProduct={onClickProduct} 
                            onValue={onValue}
                        />
                        {
                            !productCompare.length && value ? (
                                <img src={productCompare.version && product.version[idVersion2].type[idType2].image}
                                    style={{maxWidth:'100%', maxHeight: '300px',padding: '10px 10px'}}
                                />
                            ) : ( 
                                    <img src={iconcompare}
                                        style={{maxWidth:'50%', maxHeight: '300px', marginTop: '20px'}}
                                    />
                            )
                        }
                    </div>
                    <div className='col-2'></div>
                </div> */}

{/* <table>
                        <thead>Thông tin chi tiết</thead>
                        <tbody>
                            <tr>
                                <td>
                                {
                                    listInformation && listInformation.map((item) =>{
                                        return(
                                            <tr>
                                                <td>{item.title}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </td>
                                <td>{
                                    product.information && product.information.map((item) =>{
                                        return(
                                            <tr>
                                            <td>{item.info}</td>
                                            </tr>
                                        )
                                    })
                                }</td>
                            </tr>
                        </tbody>
                    </table> */}






                            {/* <td>{
                                product.information && product.information.map((item) =>{
                                    return(
                                        <tr>
                                        <td>{item.info}</td>
                                        </tr>
                                    )
                                })
                            }</td> */}
                            {/* <table class="table table-hover table-dark">
                        <tbody> */}
                            {/* <tr className='row'>
                                <td className='col-4'>
                                    <ul>
                                        {
                                            listInformation && listInformation.map((item) =>{
                                                return(
                                                    <li>{item.title}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </td>
                                <td className='col-4'>
                                    <ul>
                                        {
                                            product.information && product.information.map((item) =>{
                                                return(
                                                    <li>{item.info}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </td>
                            </tr> */}
                        {/* </tbody>
                    </table> */}