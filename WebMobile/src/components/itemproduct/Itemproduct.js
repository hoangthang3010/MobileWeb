import './Itemproduct.scss'
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';

const Itemproduct = ({product}) => {
    // console.log(product[0].type);
    return(
        <div className='card-group itemproduct'>
            { 
               product && product.map((item, key) => {
                    return (
                        <>
                        {
                            item.items.map((product, index) => {
                                // console.log(product);
                                return(
                                    <div className="col-3 itemproduct__box" key={index}>
                                        <div className="card text-center">
                                            <img className="card-img-top" src={product.image} alt="Card image cap"/>
                                            <div className="card-body">
                                                <Link className='itemproduct__detail__title' to={`/purchase/${key+1}/${product.id}/0/0`}>
                                                    <h5 className="card-title">{product.title}</h5>
                                                </Link>
                                                <span className="card-text">{product.price}</span>
                                                {/* <button>Thêm vào giỏ hàng</button> */}
                                                <div style={{margin:'10px 0px'}}>
                                                    <Link to={`/purchase/${key+1}/${product.id}/0/0`}>
                                                        <p className="btn btn-primary col-6">Xem thêm</p>
                                                    </Link>
                                                    <Link to={`/compare/${key+1}/${product.id}/0/0`}>
                                                        <p className="btn btn-primary col-6">So sánh</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </>
                        // <div className="itemproduct__detail">
                        //     <img className="image" src={product.image} alt={product.title} key={index}/>
                        //     <Link className='itemproduct__detail__title' to={`/productdetail/${index}`}>
                        //         <span>{product.title}</span>
                        //     </Link>
                        //     <span>{product.price}</span>
                        //     <button>Thêm vào giỏ hàng</button>
                        // </div>
                     )
                 })
            } 
        </div>
        
    )
}
export default Itemproduct;
//  onClick={() => handlePoductDetail(item.title, item.price, item.src)}