import React, { Component } from 'react'
import injectSheet from 'react-jss';
import Modal from './SignIn/Modal';
import styles from './SignIn/ModalStyles';
import Auth from './SignIn/Auth';

class ModalLauncher extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
        };
      }
      
      handleToggleModal() {
        this.setState({ showModal: !this.state.showModal });
      }

    render() {
        const { classes } = this.props;
        const { showModal } = this.state;
      
        return (
            <div>
            <button 
            className={classes.modalButton} 
            onClick={() => this.handleToggleModal()}
            >
            Open Modal
            </button>  
            {showModal && 
            <Modal showModal onCloseRequest={() => this.handleToggleModal()}>
                {this.children}
            </Modal>}
            </div>
        );
    }
}

export default injectSheet(styles)(ModalLauncher);
