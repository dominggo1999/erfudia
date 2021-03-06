import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HeaderWrapper, HeaderInner, MenuIcon } from './Header.style';
import Brand from '../../common/Brand/Brand';
import Navigation from '../../common/Navigation/Navigation';
import MobileNavigation from '../../common/MobileNavigation/MobileNavigation';
import useShowNavigation from '../../hooks/useShowNavigation';

const Header = () => {
  const { showNavigation, toggleNavigation, closeNavigation } = useShowNavigation();

  return (
    <HeaderWrapper showNavigation={showNavigation}>
      <HeaderInner>
        <Brand />
        <MenuIcon
          aria-label="Navigation menu icon"
          onClick={toggleNavigation}
        >
          {
            showNavigation
              ? <AiOutlineClose />
              : <AiOutlineMenu />
          }
        </MenuIcon>
        <Navigation />

        {
          showNavigation && <MobileNavigation closeNavigation={closeNavigation} />
        }
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
