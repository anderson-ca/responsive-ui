import navbarStyles from '../styles/components/navbar.module.css';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import Image from 'next/image'
import logo from '../public/logo.svg'

const Navbar = () => {
  return (
    <div className={navbarStyles.gpt3__navbar}>
      <div className={navbarStyles.gpt3__navbar_links}>
        <div className={navbarStyles.gpt3__navbar_links_logo}>
          <Image src={logo} alt='logo' />
        </div>
        <div className={navbarStyles.gpt3__navbar_links_container}>
          <p>
            <a href='#home'>
              Home
            </a>
          </p>
          <p>
            <a href='#wgpt3'>
              What is GPT-3?
            </a>
          </p>
          <p>
            <a href='#pos'>
              Open AI
            </a>
          </p>
          <p>
            <a href='#features'>
              Case Studies
            </a>
          </p>
          <p>
            <a href='#blog'>
              Library
            </a>
          </p>
        </div>
        <div className={navbarStyles.gpt3__navbar_sign}>
          <p>Sign in</p>
          <button type='button'>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
