import React, { Component } from 'react'
import injectSheet from "react-jss";
import isNil from 'lodash/fp/isNil';
import styles from './ModalStyles';
import Heading from './Heading';
import Auth from './Auth';


class Modal extends Component {
    constructor(props) {
        super(props);
    
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
      }

    componentDidMount() {
        window.addEventListener('keyup', this.handleKeyUp, false);
        document.addEventListener('click', this.handleOutsideClick, false);
      }
      
      componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
      }

      handleKeyUp(e) {
        const { onCloseRequest } = this.props;
        const keys = {
          27: () => {
            e.preventDefault();
            onCloseRequest();
            window.removeEventListener('keyup', this.handleKeyUp, false);
          },
        };
      
        if (keys[e.keyCode]) { keys[e.keyCode](); }
      }

      handleOutsideClick(e) {
        const { onCloseRequest } = this.props;
      
        if (!isNil(this.modal)) {
          if (!this.modal.contains(e.target)) {
            onCloseRequest();
            document.removeEventListener('click', this.handleOutsideClick, false);
          }
        }
      }

    render () { 
        const { onCloseRequest, children, classes, showModal } = this.props;
      
        return (
          <div className={classes.modalOverlay}>
            <div className={classes.modal} ref={node => (this.modal = node)}>
                {/* <img src=""/> */}
               <Heading />
               <Auth/>
              <div className={classes.modalContent}>
                {children}
              </div>
            </div>
      
            <button
              className={classes.closeButton}
              onClick={onCloseRequest}
            />
          </div>
        );
      }
}

export default injectSheet(styles)(Modal);
