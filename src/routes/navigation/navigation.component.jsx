import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown.component/cart-dropdown.component";


import CartIcon from "../../components/cart-icon/cart-icon.component";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  LogoContainer,
  NavigationConatiner,
  NavLink,
  NavLinksContainer,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationConatiner>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationConatiner>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
