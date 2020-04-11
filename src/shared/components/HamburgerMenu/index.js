import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import s from './style.module.scss';
import sButtons from '../../styles/buttons.scss';

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpened: false
    };

    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick = (e) => {
    console.log(this.state.isMenuOpened);
    e.preventDefault();
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  };

  render() {
    const { menuItems } = this.props;
    const { isMenuOpened = false } = this.state;
   
    return (
      <div className={s.hamburgerMenu}>
        <div onClick={e => this.toggleClick(e)} className={classnames(s.toggle, isMenuOpened ? s.opened : null)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={classnames(s.menu, isMenuOpened ? s.opened : null)}>
          {menuItems && menuItems.length > 0
          ? menuItems.map((item, i) => 
            <li key={i}><Link className={classnames(s.linkItem, sButtons.underlinedLinkWhite)} to={item.link}>{item.label}</Link></li>)
          : null}
        </ul>
      </div>
    );
  }
}

export default HamburgerMenu
