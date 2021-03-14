import React, { useEffect, useState, useRef } from 'react';
import productApi from '../../api/productApi'
import './SearchProduct.scss'

export default function CustomizedInputBase(props) {
  const [product, setProduct] = useState('')
  const [value, setValue] = useState({text : ''});
  const [word , setWord] =useState(null);
  const [backgroundItem, setBackgroundItem] = useState('')
  const [listProduct , setListProduct] = useState([]);
  const fetchProductApi = async () => {
    const response = await productApi.fetchProductApi('product')
    setProduct(response)
  }
  useEffect(() => {
      fetchProductApi()
  },[] )
  const typingTimeoutRef = useRef(null);
  const onHandleChangeWordSearch = (e) =>{
    // if(!onSearch) return;
    const value = e.target.value;
    if(typingTimeoutRef.current){
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() =>{
      // props.onSearch(value);
      onSearch(value);
      props.onValue(value)
    },5e2);
    console.log(value)
  }
  const onSearch = async (word) =>{
    setWord(word);
    if(word){
      let listProduct = product;
      let listProduct2 = null;
      listProduct = await product.filter((mem)=>{
          return mem.id.toLowerCase().indexOf(word) !== -1;
      });
      listProduct2 = await  product.filter((mem)=>{
          return mem.title.toLowerCase().indexOf(word) !== -1;
      });
      listProduct = await [...listProduct , ...listProduct2];
      listProduct = await listProduct.reduce((unique, o) => {
          if(!unique.some(obj => obj.id === o.id )) {
              unique.push(o);
          }
          return unique;
      },[]);
      setListProduct(listProduct)
      // console.log(listProduct)
    }
  }
  const onClickProduct = (index, index1, index2) => {
    setWord(null)
    props.onClickProduct(index, index1, index2)
    setValue({text: product[index].title})
  }
  const onHandleName = e =>{
    setValue({text : e.target.value})
}
  return (
    <div className="searchproduct" onChange = {onHandleChangeWordSearch}>
      <input 
        name="keyword" 
        type="text"  
        placeholder="Nhập từ khóa..."
        autoComplete='off'
        value={value.text}
        onChange={onHandleName}
      />
      { 
        listProduct &&
        listProduct.length !== 0 && word ? (
        <div 
            className= 'searchproduct__nameproduct'
            style = {{ 
                      height:'300px', 
                      overflowY: 'scroll',
                      border: '1px solid black',
                      borderRadius: '4px',
                      position: 'absolute',
                      zIndex: '100',
                      backgroundColor: 'white'
                     }}>
          {
            listProduct.map((item,index) => {
              // console.log(item.version);
              return(
                <div className= 'searchproduct__nameproduct__version'>
                  { 
                    item.version &&
                    item.version.map((item1,index1) => {
                      return(
                        <>
                        {
                          item1.type &&
                          item1.type.map((item2, index2) => {
                            return(
                              <div 
                                  className= 'searchproduct__nameproduct__version__type'
                                  style = {{ 
                                            display: 'flex', 
                                            borderBottom: '1px solid #D7D8DA',
                                            padding: '5px'
                                          }}
                                  onClick={() => onClickProduct(index, index1, index2, listProduct)}
                              >
                                <img className='col-2' src ={item2.image}
                                    style = {{ maxWidth: '30%'}}
                                />
                                <div   
                                    className='col-10' 
                                    // style = {{ display: 'flex'}}
                                >
                                  {/* &ensp;|&ensp; */}
                                  <p>{item.title}</p>
                                  <p>{item1.capacity}</p>
                                  <p>{item2.color}</p>
                                </div>
                              </div>
                            )
                          })
                        }
                        </>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div> ) : ''
      }
    </div>
  );
}