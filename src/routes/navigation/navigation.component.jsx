import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown.component/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setLanguage } from "../../store/language/language.action";
import { selectCurrentLanguage } from "../../store/language/language.selector";
import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
  LanguageContainer,
  LogoContainer,
  NavigationConatiner,
  NavLink,
  NavLinksContainer,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const currentLanguage = useSelector(selectCurrentLanguage);
  const dispatch = useDispatch();

  const signOut = () => dispatch(signOutStart());

  const changeLanguage = () => {
    dispatch(setLanguage(!currentLanguage));
  };

  return (
    <Fragment>
      <NavigationConatiner>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          {currentUser ? (
            <NavLink as="span" onClick={signOut}>
              {currentLanguage ? "ВЫЙТИ" : "SIGN OUT"}
            </NavLink>
          ) : (
            <NavLink to="/auth">
              {currentLanguage ? "ВОЙТИ" : "SIGN IN"}
            </NavLink>
          )}
          <NavLink to="/shop">{currentLanguage ? "МАГАЗИН" : "SHOP"}</NavLink>
          <CartIcon />
          <LanguageContainer onClick={changeLanguage}>
            {currentLanguage ? "EN" : "РУС"}
          </LanguageContainer>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationConatiner>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
