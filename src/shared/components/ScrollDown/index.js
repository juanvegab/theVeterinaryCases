import React from "react";
import s from './style.module.scss';

class ScrollDown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.ScrollDown}>
        <div className={s.mouseIcon}></div>
        <p className={s.indication}>Scroll Down</p>
      </div>
    );
  }
}

export default ScrollDown;