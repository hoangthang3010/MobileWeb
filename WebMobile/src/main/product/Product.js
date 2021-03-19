import React, { useState, useEffect } from 'react';
import './Product.scss'
import {useParams} from 'react-router-dom'
import productApi from '../../api/productApi'
import { Link } from 'react-router-dom';


export default function Product({match}) {
  const [category, setCategory] = useState('')
  const [product, setProduct] = useState('')
  const fetchCategoryApi = async () => {
    const response = await productApi.fetchCategoryApi(`category/?type=${match.params.type}`)
    setCategory(response)
    console.log(response);
  }
  const fetchProductApi = async () => {
    const response = await productApi.fetchProductApi(`product/?name=${match.params.type}`)
    setProduct(response)
  }
  useEffect(() => {
    fetchCategoryApi()
    fetchProductApi()
  }, [])
  const param = useParams()
  // console.log(match.params.type);
  // console.log(match.params.manufactory);
  // console.log(match.params.name);
  // console.log(match);
  console.log(product);
  return(
    <div className= 'product'>
      <div className='row product__title'>
        <p className='col-2'></p>
        <p className='col-10'>{category && category[0].title}</p>
      </div>
      <div className='card-group product__body'>
        <div className='col-2 product__body__sidebar' style={{maxWidth:'100%'}}>
          {
              category && 
              category[0].sidebar.map((item, key) => {
                return(
                  <>
                    <div className='product__body__sidebar__detail'>
                      <p>{item.name}</p>
                      <a></a>
                    </div>
                  </>
                )
              })
          }
        </div>
        <div className='col-10 product__body__detail1 row'>
          {
            product &&
            product[0].items.map((item,key)=>{
              return(
                // <div className='col-2' style={{padding:'10px', border:'1px solid #EEEEEE'}}>
                //   <img src={item.image} style={{maxWidth:'100%'}}/>
                //   <p>{item.title}</p>
                //   <p>{item.price}</p>
                // </div>
                <div className="col-2" key={key}  style={{padding:'10px', border:'1px solid #EEEEEE'}}>
                  {/* <div className="card text-center"> */}
                      <img className="card-img-top" src={item.image} alt="Card image cap"/>
                      <div className="card-body">
                          <Link className='itemproduct__detail__title' to={`/purchase/${item.id}/0/0`}>
                              <h5 className="card-title">{item.title}</h5>
                          </Link>
                          <span className="card-text">{item.price}</span>
                        </div>
                    {/* </div> */}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}