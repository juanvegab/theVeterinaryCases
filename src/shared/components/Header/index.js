import React from "react";
import classnames from "classnames";
import s from './style.module.scss';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import HamburgerMenu from '../HamburgerMenu';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { scrollTop: 0 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.location && prevProps.location.key !== this.props.location.key) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return null;
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = (e) => this.setState({ scrollTop: window.scrollY });

  render() {
    const { scrollTop } = this.state;
    const menuItems = [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/surgeries/oncological', label: 'Oncological Surgeries' },
      { path: '/surgeries/soft-tissue', label: 'Soft-Tissue Surgeries' },
      { path: '/contact', label: 'Contact' },
    ];

    return (
      <header
        id="header"
        className={classnames(s.header, scrollTop > 0 ? s.darkHeader : null)}>

        {/* Logo Section */}
        <div className={classnames(s.branding)}>
          <Link to="/">
            <img src={logo} alt="The Veterinary Cases" />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className={s.hamburgerMenu}>
          <HamburgerMenu menuItems={menuItems} />
        </div>

      </header>
    );
  }
}

export default Header;
