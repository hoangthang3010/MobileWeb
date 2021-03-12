import React,{useContext, useEffect, useState} from 'react';
import productApi from '../../api/productApi'
import {useParams} from 'react-router-dom'
import './compare.scss'
import { Link } from 'react-router-dom';

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
            title: "Bộ nhớ"
        },
        {
            title: "Dung lượng pin"
        }
    ]
    const param = useParams()
    const [product, setProduct] = useState('')
    const [productCompare, setProductCompare] = useState('')
    const [idVersion, setIdVersion] = useState(param.id1)
    const [idType, setIdType] = useState(param.id2)
    const fetchProductApi = async () => {
        const response = await productApi.fetchProductApiById(param.id)
        setProduct(response)
    }
    const fetchProductCompare = async () => {
        const response = await productApi.fetchProductApiById(param.id)
        setProductCompare(response)
    }
      useEffect(() => {
        fetchProductApi()
        fetchProductCompare()
    }, [])
    return(
        <div className='compare'>
            <div className='compare__product'>
                <div className='compare__product__title'>
                    <h1>So sánh điện thoại </h1>
                </div>
                <div style={{display: 'flex', marginTop: '30px'}}>
                    <div className='col-2'></div>
                    <div className='col-4 compare__product__information__1'>
                        <input
                            style={{pointerEvents: 'none'}}
                            placeholder = {`${product.title}`}
                        />
                        <img src={product.version && product.version[idVersion].type[idType].image}/>
                        <span>  {   product.version && 
                                    `${product.version[idVersion].type[idType].price}`.slice(-9,-6) + '.' + 
                                    `${product.version[idVersion].type[idType].price}`.slice(-6,-3) + '.' + 
                                    `${product.version[idVersion].type[idType].price}`.slice(-3)
                                } đ
                        </span>
                    </div>
                    <div className='col-4 compare__product__information__2'>
                        <input  
                            type='text'
                        />
                        <div></div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='compare__product__information'>
                <table className='table table-borderless table-hover'>
                    <thead style={{fontSize: '20px', fontWeight: '600'}}>Thông tin chi tiết</thead>
                    <hr/>
                    <tbody>
                    {
                        listInformation && product.information && listInformation.map((item, index)  =>{
                            return(
                                <tr className='row'>
                                    <td className='col-2' style={{fontWeight: 'bold'}}>{listInformation[index].title}</td>
                                    <td className='col-4'>{product.information[index].info}</td>
                                    <td className='col-4'>{product.information[index].info}</td>
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