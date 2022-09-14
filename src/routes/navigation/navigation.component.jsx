//mod conext-second -video
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
//mod conext-second -video
// import { UserContext } from "../../contexts/user.context";
// import { CartContext } from "../../contexts/cart.context";

// import { signOutUser } from "../../utils/firebase/firebase.utils";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx'
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from "../../store/user/user.action";
const Navigation = () => {
    // const { currentUser, } = useContext(UserContext);
    // const currentUser = useSelector((state) => state.user.currentUser)
    const currentUser = useSelector(selectCurrentUser)
    // const { isCartOpen } = useContext(CartContext);
    const isCartOpen = useSelector(selectIsCartOpen);

    const dispatch = useDispatch();

    const signOutUser = () => dispatch(signOutStart());


    // console.log(currentUser)
    // const signOutHandler = async () => {
    //     // const res = await signOutUser();
    //     // console.log(res)// 
    //     await signOutUser();
    //     setCurrentUser(null)

    // }
    return (
        <Fragment>
            <NavigationContainer >
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    {/* conext-vid-4 */}
                    {currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : (
                        <NavLink to="/auth">
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment >
    )
}
export default Navigation;
