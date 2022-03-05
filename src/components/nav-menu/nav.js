import React from 'react';
import {Link} from 'react-router-dom';
import Hamburger from '../hamburger/Hamburger';
import styled from 'styled-components';
import builfoldLogo from '../../assets/bifold-logo.svg';
import contactIcon from '../../assets/phone-call.png';
import './nav-style.scss';

const MenuList = styled.span`
  margin: 0 18px;
  font-size: 18px;
  line-height: 120px;
  font-weight: 600;
  cursor: pointer;

  a {
    color: #9D7BA8;
    text-decoration: none;
    transition: all .1s ease-in;

    &:hover {
    color: #878898;
    border-bottom: 2px solid #878898;
  }
  }
`;

export default function Nav() {
  return (
    <nav className='builfold-nav'>
      <div className='nav__logo'>
        <Link to='/'>
       <img src={builfoldLogo} alt='logo' />
       </Link>
      </div>
      <Hamburger />
      <div className='nav__wrapper'>
        <div className='nav__menu'>
          <MenuList className='menu__list'><Link to='/'>Design</Link></MenuList>
          <MenuList className='menu__list'><Link to='/faqs'>FAQs</Link></MenuList>
          <MenuList className='menu__list'><Link to='/privacy-policy'>Privacy Policy</Link></MenuList>
          <MenuList className='menu__list'><a href='https://www.6daydoors.co.uk/' target='_blank' rel="noopener noreferrer">Main Site</a></MenuList>
          <MenuList className='menu__list'><Link to='/contact'>Contact</Link></MenuList>
        </div>
        <div className='nav__contact'>
          <img className='contact-icon' src={contactIcon} alt='contact_icon' />
          <a href='tel:020 8500 4900'>020 8500 4900</a>
        </div>
      </div>
    </nav>
  )
}
