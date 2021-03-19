import React,{useEffect, useState} from 'react';
import productApi from '../../api/productApi'
import {useParams} from 'react-router-dom'
import './compare.scss'
import SearchTextField from '../searchtextfield/SearchTextField'
import iconcompare from  '../../picture/iconcompare.jpg'

const Compare = ({match})=>{
    // const listInformation = [
    //     {
    //         title: "Kích thước"
    //     },
    //     {
    //         title: "Màn hình"
    //     },
    //     {
    //         title: "Cam sau"
    //     },
    //     {
    //         title: "Cam trước"
    //     },
    //     {
    //         title: "Hệ điều hành"
    //     },
    //     {
    //         title: "CPU"
    //     },
    //     {
    //         title: "Ram"
    //     },
    //     {
    //         title: "Dung lượng pin"
    //     },
    //     {
    //         title: "Bộ nhớ"
    //     }
    // ]
    const param = useParams()
    const [product, setProduct] = useState('')
    const [productCompare, setProductCompare] = useState('')
    const [idItems] = useState(param.id-1)
    const [idVersion] = useState(param.id1)
    const [idType] = useState(param.id2)
    const [idVersion2, setIdVersion2] = useState('')
    const [idType2, setIdType2] = useState('')
    const [idCompare, setIdCompare] = useState('')
    const [listProduct, setListProduct] = useState('')
    const [value, setValue] = useState('')
    const fetchProductApi = async () => {
        const response = await productApi.fetchProductApiById(param.items)
        setProduct(response)
    }
    const fetchProductCompare = async () => {
        const response = await productApi.fetchProductApiById(listProduct)
        setProductCompare(response)
    }
    useEffect(() => {
        fetchProductApi()
        fetchProductCompare()
    }, [listProduct])
    const onClickProduct = (index, index1, index2, item) => {
        setIdType2(index2)
        setIdVersion2(index1)
        setIdCompare(index)
        setListProduct(item+1)
    }
    const onValue = (i) => {
        setValue(i)
        if(i === ''){
            console.log('hi');
            setListProduct('')
        }
    }
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
                            placeholder = {`${product.items && product.items[idItems].title}`}
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
                                src={product.items && product.items[idItems].version[idVersion].type[idType].image}
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
                                src={productCompare.items && productCompare.items[idCompare].version[idVersion2].type[idType2].image}
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
                            {   
                                
                                // console.log(product.items[idItems].version[idVersion].type[idType].price),
                                product.items && 
                                `${product.items[idItems].version[idVersion].type[idType].price}`.slice(-9,-6) + '.' + 
                                `${product.items[idItems].version[idVersion].type[idType].price}`.slice(-6,-3) + '.' + 
                                `${product.items[idItems].version[idVersion].type[idType].price}`.slice(-3)
                            } đ
                        </span>
                    </td>
                    <td className='col-4'>
                        {
                            productCompare.items &&
                            productCompare.items ? (
                            <span> 
                                {   
                                    productCompare.items[idCompare] && 
                                    `${productCompare.items[idCompare].version[idVersion2].type[idType2].price}`.slice(-9,-6) + '.' + 
                                    `${productCompare.items[idCompare].version[idVersion2].type[idType2].price}`.slice(-6,-3) + '.' + 
                                    `${productCompare.items[idCompare].version[idVersion2].type[idType2].price}`.slice(-3)
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
                        product.items && product.items[idItems].information.map((item, index)  =>{
                            return(
                                <tr className='row' key={index}>
                                    <td className='col-2' style={{fontWeight: 'bold'}}>{item.title}</td>
                                    <td className='col-4'>{
                                        item.name ==='rom' ? product.items[idItems].version[idVersion].capacity : item.info}
                                    </td>
                                    {
                                        productCompare && 
                                        productCompare.items ? (
                                        <td className='col-4'>
                                            {
                                                productCompare &&
                                                productCompare.items[idCompare].information[index].name ==='rom' ? productCompare.items[idCompare].version[idVersion2].capacity : productCompare.items[idCompare].information[index].info
                                            }
                                        </td>) : <td className='col-4'/>
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