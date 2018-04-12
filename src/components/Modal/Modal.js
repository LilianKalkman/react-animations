import React from 'react';
import './Modal.css';
import CSSTransition from 'react-transition-group/CSSTransition';

const modal = (props) => {
  return(
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={500}
      classNames="fade-slide">
      <div className="Modal">
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>
            Dismiss
          </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
