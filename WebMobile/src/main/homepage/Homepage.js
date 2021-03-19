import React, {useState, useEffect } from 'react'
import './Homepage.scss';
import DropProduct from '../../components/dropproduct/DropProduct'
import productApi from '../../api/productApi'
import Slideshow from '../../components/slideshow/Slideshow'
import Itemproduct from  '../../components/itemproduct/Itemproduct'
import img1 from '../../picture/slide1.jpg';
import img2 from '../../picture/slide2.jpg';
import img3 from '../../picture/slide3.jpg';
import img4 from '../../picture/slide4.jpg';

function Homepage(){
    const collection = [
        { src: img1, caption: "Caption one" },
        { src: img2, caption: "Caption two" },
        { src: img3, caption: "Caption three" },
        { src: img4, caption: "Caption four" },
      ];
    const [product, setProduct] = useState('')
    const [productList, setProductList] = useState('')
    const fetchProductApi = async () => {
        // `product/${productList}`
        const response = await productApi.fetchProductApi(`product/${productList}`)
        setProduct(response)
      }
    useEffect(() => {
        fetchProductApi()
    }, [productList])
    const onProductList = (e) =>{
        setProductList(e.target.value)
    }
    return (
        <div style={{backgroundColor: '#F5F8FD'}}>
            <div className='container'>
                <div className='container__top'>
                    <div className='col-3  container__top__left'>
                        <div style={{marginLeft: '-10px'}}>
                        <DropProduct/>
                        </div>
                    </div>
                    <div className='col-9 container__top__right'>
                        <div className="App"  style={{marginRight: '-10px'}}>
                            <Slideshow
                            input={collection}
                            ratio={`7:3`}
                            mode={`automatic`}
                            timeout={`3000`}
                            />
                        </div>
                    </div>
                </div>
                <br/>
                <div className='container__product'>
                    <div className='container__product__seemore'>
                        <span>Sản phẩm</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className='container__product__filtersort'>
                        {/* <button>Lọc sản phẩm</button> */}
                        <select id="cars" 
                                value ={productList}
                                onChange = {onProductList}
                        >
                            <option value="">Tất cả sản phẩm</option>
                            <option value="?name=mobile">Điện thoại di động</option>
                            <option value="opel">Đồng hồ thông minh</option>
                            <option value="?name=tablet">Máy tính bảng</option>
                            <option value="audi">Laptop - PC</option>
                            <option value="?name=samsung">Phụ kiện</option>
                            <option value="?name=iphone">iphone</option>
                        </select>
                    </div>
                    <div className='container__product__item'>
                        <Itemproduct
                            product={product}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homepage;
