import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from 'react-transition-group/Transition';

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  openModal = () => {
    this.setState({modalIsOpen : true})
  }

  closeModal = () => {
    this.setState({modalIsOpen : false})
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState({showBlock: !this.state.showBlock})}>Toggle</button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={500}
          mountOnEnter
          unmountOnExit>
          {state => (
            <div style={{
                backgroundColor:'red',
                width: state === 'exiting' ? 0 : 100,
                height: state === 'entered' ? 100 : 0,
                margin: 'auto',
                transition: 'all 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1
              }}>
            </div>
          )}
        </Transition>
        <Modal closed={this.closeModal} show={this.state.modalIsOpen}/>
        <Backdrop closed={this.closeModal} show={this.state.modalIsOpen}/>
        <button onClick={this.openModal} className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
