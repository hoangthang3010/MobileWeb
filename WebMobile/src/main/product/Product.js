import React, { useState } from 'react';
import './Product.scss'

export default function Product() {
  const listmenu = [
    {
      title: "Điện thoại di động",
      // drop: "hi"
      drop: [
        {
          name: "iPhone",
        },
        {
          name: "Samsung",
        },
        {
          name: "Xiaomi",
        },
        {
          name: "Oppo"
        }
      ]
    },
    {
      title: "Đồng hồ thông minh",
      drop: [
        {
          name: "iPhone",
        },
        {
          name: "Samsung",
        },
        {
          name: "Xiaomi",
        },
        {
          name: "Oppo"
        }
      ]
    },
    {
      title: "Máy tính bảng",
      drop: [
        {
          name: "iPhone",
        },
        {
          name: "Samsung",
        },
        {
          name: "Xiaomi",
        },
        {
          name: "Oppo"
        }
      ]
    },
    {
      title: "Laptop - Pc",
      drop: [
        {
          name: "iPhone",
        },
        {
          name: "Samsung",
        }
      ]
    },
    {
      title: "Phụ kiện",
      drop: [
        {
          name: "",
        }
      ]
    },
  ]
  const [showDrop, setShowDrop] = useState('0')
  const [id, setId] = useState()
  const [id1, setId1] = useState()
  const onHandleShowDrop = (index) =>{
    setShowDrop(index)
    setId(index)
  }
  const onHandleDisShowDrop = () => {
    setId()
  }
  console.log(listmenu[0].drop);
  return (
    <div className="product">
      <div className="product__drop dropright">
        {
          listmenu && listmenu.map((item, index) => {
            return (
              <>
                <div 
                  className="product__drop__item" 
                  style={{ backgroundColor: `${id == index ? '#F5F8FD' :''}`}}
                  onMouseEnter={() => onHandleShowDrop(index)}
                  onMouseLeave={() => onHandleDisShowDrop()}
                >
                  <span>{item.title} </span>
                  {
                    item.drop  ?  <a>&rsaquo;</a> : ''
                  }
                </div>
              </>
            )
          })
        }
        {
          listmenu[showDrop].drop.map((item) => {
            console.log(item);
            return(
              item.name && 
              item.name !== '' ? (
                <div style={{display: 'inline-grid'}}>
                  <div className="product__drop__right">
                      <span>{item.name}</span>
                  </div>
                </div>
              ) : ''
            )
            
          })
        }
        {/* {
          listmenu.drop && listmenu.drop.map((item) =>{
            return(
              {
                listmenu[showDrop].drop && 
                listmenu[showDrop].drop !== '' ? 
                (<div className="product__drop__right">
                  {
                    <div 
                        className="btn product__drop__item" 
                        style={{ backgroundColor: `${id1 == index ? '#F5F8FD' :''}`}}
                        onMouseEnter={() => onHandleShowDrop(index)}
                        onMouseLeave={() => onHandleDisShowDrop()}
                    >
                        <span>{listmenu[showDrop].drop}</span>
                      
                    </div>
                  }
                </div>) : ''
              }
            )
          }
        } */}
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
