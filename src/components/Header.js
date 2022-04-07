import React from "react";
import HeaderLinks from "./HeaderLinks";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <div className='header'>
            <HeaderLinks />
            <ul>
                <li><h5 className='logo'>trend-sell</h5></li>
                <input className='header_input' type="text" placeholder='Поиск...'/>
                <div style={{float: "right", display: 'flex'}}>
                    <li><a href="signin">Войти</a></li>
                    <li><a href="signup">Зарегистрироваться</a></li>
                </div>

            </ul>
            <Navigation />
        </div>
    )
}
export default Header


// import { useSelector, useDispatch } from 'react-redux';
// import { GetSearchAction } from '../store/actions/PropertyAction';
//
// const NavBar = () => {
//
//     const LoadingFilter = useSelector((state) => state.PropertyReducer.PropertSearchLoading)
//     const InputRef = useRef()
//     const dispatch = useDispatch()
//     const HandleSearchClick = (query) => {
//         if (query){
//             if (query.length >= 3){
//                 dispatch(GetSearchAction(query))
//             }
//         }
//     }
//
//     return (
//         <Navbar expand="lg">
//             <Container fluid>
//                 <Navbar.Brand href="/">trend-sell</Navbar.Brand>
//                 <Form className="search">
//                     <FormControl
//                         ref={InputRef}
//                         type="search"
//                         placeholder="Введите..."
//                         className="me-2"
//                         aria-label="Search"
//                     />
//                     <Button variant="outline-secondary" onClick={() => HandleSearchClick(InputRef.current.value)}>Поиск</Button>
//                 </Form>
