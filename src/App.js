import React from 'react';

import SideDrawer from './components/SideDrawer/SideDrawer';
import Navbar from './components/Navbar/Navbar';
import Backdrop from './components/Backdrop/Backdrop';
import Container from './components/MainContainer/MainContainer';

class App extends React.Component {
  state={
    sideDrawerOpen:false
  };

  drawerToggleCLickHandler = () => {
    this.setState((prevState)=>{
      return {sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false});
  };

  render(){
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop=<Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div style={{height:'100%'}}>
        <Navbar drawerClickHandler={this.drawerToggleCLickHandler}/>
        <Container/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
      </div>
    );
  }
}

export default App;
