import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {CounterContext} from '../contextapi/counterCart';


import './navbar.scss';

export default function Navbar1(props) {
  const value = useContext(CounterContext)
  const amount = value.amount
  return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">Điện máy đen</a>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Link to="/" id="Trang chủ"  className="header__content__box2__listNarbar">
              <li className="nav-item active">
                <p className="nav-link">Home <span className="sr-only">(current)</span></p>
              </li>
            </Link>
            <Link to="/product" id="Trang chủ"  className="header__content__box2__listNarbar">
              <li className="nav-item">
                <p className="nav-link">Sản phẩm</p>
              </li>
            </Link>
          </ul>
          <form className="form-inline my-2 my-lg-8">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        <Link to="/card" className="header__content__box1__addShoppingCart" style={{textDecoration : "none"}}>
          <button className="navbar__card">
            <AddShoppingCartIcon/>
            Giỏ hàng ({amount})
          </button>
        </Link>
      </nav>
  );
}
// <Navbar collapseOnSelect className='navbar'  expand="lg" variant="dark">
    //   <Navbar.Brand href="#home">Điện máy đen</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Link to="/" id="Trang chủ"  className="header__content__box2__listNarbar" style={{textDecoration : "none"}}>
    //         <Nav.Link href="#features">Trang chủ</Nav.Link>
    //       </Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //       </NavDropdown>
    //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //     </Nav>
    //   </Navbar.Collapse>
    //   {/* <Form inline className='navbar__form'> */}
    //   <Link to="/card" className="header__content__box1__addShoppingCart" style={{textDecoration : "none" , color : "white"}}>
    //     <Button variant="outline-info" className='navbar__form__cart'>
    //       <AddShoppingCartIcon/>
    //       Giỏ hàng ({amount})
    //     </Button>
    //   </Link>
    //   {/* </Form> */}
    // </Navbar>
    // <div className="header">
    //     {/* <AppBar color="secondary"> */}
    //       <div className="header__content">
    //         <div className="header__content__box1">
    //           <Link to="/" className="header__content__box1__icon">
    //             <FacebookIcon style={{fontSize: 50}}/>
    //           </Link>
    //           <SearchTextField/>
    //           <Link to="/card" className="header__content__box1__addShoppingCart" style={{textDecoration : "none" , color : "white"}}>
    //             <Button variant="contained" color="primary">
    //               <AddShoppingCartIcon/>
    //               Giỏ hàng ({amount})
    //             </Button>
    //           </Link>
    //         </div>
    //         <div className="header__content__box2">
    //           <Link to="/" id="Trang chủ"  className="header__content__box2__listNarbar">
    //             <Button>
    //                 Trang chủ
    //             </Button>
    //           </Link>
    //           <Link to="/product" id="sản phẩm"  className="header__content__box2__listNarbar">
    //             <Button>
    //                 Sản phẩm
    //             </Button>
    //           </Link>
    //           <Link to="/" id="Giới thiệu"  className="header__content__box2__listNarbar">
    //             <Button>
    //                 Giới thiệu
    //             </Button>
    //           </Link>
    //           <Link to="/" id="liên hệ"  className="header__content__box2__listNarbar">
    //             <Button>
    //                 Liên hệ
    //             </Button>
    //           </Link>
    //           <Link className="header__content__box2__listNarbar" style={{ marginLeft : "100px"}}>
    //             <Button>
    //               <PersonIcon className="icon"/>
    //                 Cá nhân
    //             </Button>
    //           </Link>
    //         </div>
    //       </div>
    //     {/* </AppBar> */}
    // </div>