import React, { useState } from 'react';
import './DropProduct.scss'
import { Link } from 'react-router-dom';


export default function Product() {
  const listmenu = [
    {
      title: "Điện thoại di động",
      name: "mobile",
      drop: [
        {
          name: "iphone",
          title: "iPhone",
          type: [
            {
              ten: 'ip11',
            },
            {
              ten: 'ip12'
            }
          ]
        },
        {
          name: "samsung",
          title: "Samsung",
          type: [
          ]
        },
        {
          name: "xiaomi",
          title: "Xiaomi",
          type: [
          ]
        },
        {
          name: "oppo",
          title: "Oppo",
          type: [
          ]
        }
      ]
    },
    {
      title: "Đồng hồ thông minh",
      name: "smartwatch",
      drop: [
        {
          name: "applewatch",
          title: "Apple Watch",
          type: [
          ]
        },
        {
          name: "Samsung Watch",
          title: "Samsung Watch",
          type: [
          ]
        },
        {
          name: "Xiaomi Watch",
          title: "Xiaomi Watch",
          type: [
          ]
        },
        {
          name: "Oppo Watch",
          type: [
          ]
        }
      ]
    },
    {
      title: "Máy tính bảng",
      name: "tablet",
      drop: [
        {
          name: "ipad",
          title:"iPad",
          type: [
          ]
        },
        {
          name: "samsung",
          title:"Samsung",
          type: [
          ]
        },
        {
          name: "xiaomi",
          title:"Xiaomi",
          type: [
          ]
        }
      ]
    },
    {
      title: "Laptop - Pc",
      name: "laptop",
      drop: [
        {
          name: "ha",
          title:"ho",
          type: [
          ]
        },
        {
          name: "hi",
          title:"ho",
          type: [
          ]
        }
      ]
    },
    {
      title: "Phụ kiện",
      name: "gear",
      drop: [
        {
          name:'',
          type: [
          ]
        }
      ]
    },
  ]
  const [showDrop, setShowDrop] = useState('')
  const [showDrop1, setShowDrop1] = useState('')
  const [id, setId] = useState()
  const [id1, setId1] = useState()
  const [id2, setId2] = useState()
  const onHandleShowDrop = (index) =>{
    setShowDrop(index)
    setId(index)
    setId1()
    setShowDrop1('')
  }
  const onHandleShowDrop1 = (index) =>{
    setShowDrop1(index)
    setId1(index)
  }
  const onHandleShowDrop2 = (index) =>{
    setId2(index)
  }
  const onHandleDisShowDrop = () => {
  }
  const onHandleDisShowDrop1 = (index) => {
    setId2()
    setShowDrop1(index)
  }
  const onHandleDisShowDrop2 = () => {
    setId2()
  }
  const onHandleDisShowDrop3 = () => {
    setId()
    setId1()
    setId2()
    setShowDrop('')
    setShowDrop1('')
  }
  return (
    <div className="dropproduct">
      <div 
          className="dropproduct__drop"
          // style={{width: `${listmenu[showDrop].drop[showDrop1].type && listmenu[showDrop].drop[showDrop1].type * 200}px`}}
          onMouseLeave={() => onHandleDisShowDrop3()}
      >
        <div style={{display: 'inline-grid', minWidth:'200px'}}>
          {
            listmenu && listmenu.map((item, index) => {
              return (
                <Link className="btn dropproduct__drop__item  dropright"  to = {'/product/' + `${item.name}`}
                      style={{ backgroundColor: `${id === index ? '#F8F4F4' :''}`, zIndex: '1'}}
                      onMouseEnter={() => onHandleShowDrop(index)}
                    onMouseLeave={() => onHandleDisShowDrop(index)}
                >
                  <div 
                    
                  >
                    <span>{item.title} </span>
                    {
                      item.drop.length > 1  ?  <p>&rsaquo;</p> : ''
                    }
                  </div>
                </Link>
              )
            })
          }
        </div>
        <div
              style= {{  
                backgroundColor:'white',
                boxShadow: `${showDrop !=='' ?  '-1px 0px 3px #888888' : 'none'}`,
                zIndex: '2'
              }}
        >
          { 
            showDrop !== '' ? (
              listmenu[showDrop].drop &&
              listmenu[showDrop].drop.map((item, index) => {
                return(item.name !== '' ? (
                    <Link to = {'/product/' + `${listmenu[showDrop].name}` + '/' + `${item.name}`}>
                      <div  
                          className="dropproduct__drop__right"
                          style={{ backgroundColor: `${id1 === index ? '#F8F4F4' :''}`}}
                          onMouseEnter={() => onHandleShowDrop1(index)}
                          onMouseLeave={() => onHandleDisShowDrop1(index)}
                          // onClick={() => onHandlerop1(index)}
                      >
                        <span>{item.title}</span>
                        {
                          listmenu[showDrop].drop[index].type.length > 1 ? <a>&rsaquo;</a> : ''
                        }
                      </div>
                    </Link>
                  ) : ''
                )
              })
            ) : ''
          }
        </div>
        <div
              style= {{ 
                backgroundColor:'white',
                boxShadow: `${showDrop1 !=='' ?  '-1px 0px 3px #888888' : 'none'}`,
                zIndex: '3'
              }}
        >
          {
            showDrop1 !== '' && listmenu[showDrop].drop[showDrop1] ? (
              listmenu[showDrop].drop[showDrop1].type  &&
              listmenu[showDrop].drop[showDrop1].type.map((item, index) => {
                return(item.name !== '' ? (
                    <Link to = {'/product/' + `${listmenu[showDrop].name}` +
                                '/' + `${listmenu[showDrop].drop[showDrop1].name}` + 
                                '/' + `${item.ten}`}>
                      <div  
                          className="dropproduct__drop__right1"
                          style={{ backgroundColor: `${id2 == index ? '#F8F4F4' :''}`}}
                          onMouseEnter={() => onHandleShowDrop2(index)}
                          onMouseLeave={() => onHandleDisShowDrop2()}
                      >
                          <span>{item.ten}</span>
                      </div>
                    </Link>
                  ) : ''
                )
              })
             ) :  ''
          }
        </div>
      </div>
    </div>
  )
}

                  {/* <div className="product__dropright__item" onClick={() => onHandleDrop(index)}>
                    <span>{item.title} </span>
                    <a>&rsaquo;</a>
                  </div> */}
                  
{/* <div className="product">
        <div className="product__dropright btn-group dropright">
          <button 
                  // type="button" 
                  className="btn btn-secondary dropdown-toggle" 
                  // data-toggle="dropdown"
                  // aria-haspopup="true" 
                  // aria-expanded="false"
          >
            Dropright
          </button>
          <div className="product__dropright__right dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
    </div> */}
{/* <div className='container__top__left '>
        <ul>
            <li>
                <div className="container__top__left__dropdown">
                    <button>Điện thoại di động</button>
                    <div className="container__top__left__dropdown__content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </li>
            <li>
                <div className="container__top__left__dropdown">
                    <button>Đồng hồ thông minh</button>
                    <div className="container__top__left__dropdown__content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </li>
            <li>
                <div className="container__top__left__dropdown">
                    <button>Máy tính bảng</button>
                    <div className="container__top__left__dropdown__content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </li>
            <li>
                <div className="container__top__left__dropdown">
                    <button>Laptop - Pc</button>
                    <div className="container__top__left__dropdown__content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </li>
            <li>
                <div className="container__top__left__dropdown">
                    <button>Phụ kiện</button>
                    <div className="container__top__left__dropdown__content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </li>
            <li>Đồng hồ thông minh</li>
            <li>Máy tính bảng</li>
            <li>Laptop - Pc</li>
            <li>Phụ kiện</li> 
        </ul>
    </div> */}
// const [id, setId] =useState('')
//   const [id2, setId2] =useState('')
//   const [id3, setId3] =useState('')
//   const [id4, setId4] =useState('')
//   const [id5, setId5] =useState('')
//   const onThree = () => {
//     setId('1')
//   }
//   const onSeven = () => {
//     setId2('2')
//   }
//   const onNhan = () => {
//     setId3('2')
//   }
//   const onBang = () => {
//     setId4('2')
//   }
//   const onKq = () => {
//     setId3('2')
//   }
//   console.log(id);
//   return (
//     <div className="product">
//         <div style={{ 
//                       width: '200px', 
//                       height: '300px', 
//                       margin: '20px 200px', 
//                       border: '1px solid black'
//                     }}
//         > 
//           <span style={{marginLeft: '75px', fontWeight: '800'}}>CASIO</span>
//           <div style={{ 
//                         width: '180px',
//                         height: '60px',
//                         border: '1px solid black',
//                         margin: '30px auto'
//           }}>
//             {
              
//               id && id === '1' ? (<><a>3</a></>) : ''
//             }
            
//             {
              
//               id3 && id3 === '2' ? (<><a>x</a></>) : ''
//             }
//             {
              
//               id2 && id2 === '2' ? (<><a>7</a></>) : ''
//             }
//             {
              
//               id4 && id4 === '2' ? (<><a>=</a><a>28</a></>) : ''
//             }
//           </div>
//           <div style={{display: 'flex', textAlign: 'center', marginTop: '20px'}}>
//               <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>9</div>
//               <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>8</div>
//               <div className='col-2' style={{border: '1px solid black',padding: '10px'}} onClick={onSeven}>7</div>
//               <div className='col-3' style={{border: '1px solid black',padding: '10px'}}>+</div>
//               <div className='col-3' style={{border: '1px solid black',padding: '10px'}}>-</div>
//             </div>
//             <div style={{display: 'flex', textAlign: 'center', marginTop: '20px'}}>
//               <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>6</div>
//               <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>5</div>
//               <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>4</div>
//               <div className='col-3' style={{border: '1px solid black',padding: '10px'}} onClick={onNhan}>x</div>
//               <div className='col-3' style={{border: '1px solid black',padding: '10px'}}>/</div>
//             </div>
//             <div style={{display: 'flex', textAlign: 'center', marginTop: '20px'}}>
//               <a className='col-2' style={{border: '1px solid black',padding: '10px'}} onClick={onThree}>3</a>
//               <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>2</div>
//               <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>1</div>
//               <div className='col-3' style={{border: '1px solid black',padding: '10px'}} onClick={onBang}>=</div>
//               <div className='col-3' style={{border: '1px solid black',padding: '10px'}}>.</div>
//             </div>
//         </div>
//     </div>
//   );
