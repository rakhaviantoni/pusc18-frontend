import React, { Component } from "react";
import ParallaxMousemove from './lib';
import Background from './imgs/puscedit.jpg';
import DropdownMenu from 'react-dd-menu';
import HamburgerMenu from 'react-hamburger-menu';

class Home extends Component {

    /* componentDidMount(){
      const ele = document.getElementById('pusc-progress-indicator')
      if(ele){
        setTimeout(() => {
          ele.classList.add('available')
          setTimeout(() => {
            ele.outerHTML = ''
          }, 2000)
        }, 1000)
      }
    } */

    state = { isMenuOpen: false };
  
    toggle = () => {
      this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }
  
    close = () => {
      this.setState({ isMenuOpen: false });
    };
  
    click = () => {
      console.log('You clicked an item');
    };

  render() {
    
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      toggle: <HamburgerMenu
                isOpen={this.state.isMenuOpen}
                menuClicked={this.toggle}
                color='#0D47A1'
                animationDuration={0.5}
              />,
      align: 'center',
      upwards: true,
      className: 'menu',
      animate: true,
    };

    const style = {
      outter: {
        background: 'url('+ Background +')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width:'100%',
        position: 'relative',
        overflow: 'hidden'
      },
      inner: {
        width:700,
        height:500,
        position: 'absolute',
        margin:'auto',
        left:0,
        right:0,
        bottom:0,
        textAlign:'center'
      },
      button: {
        fontFamily: 'Open Sans Condensed',
        textTransform: 'uppercase',
        borderRadius: '100px',
        boxShadow: '0 5px 15px -5px #222',
        background: 'white',
        textDecoration: 'none',
        color: '#0D47A1',
        textAlign: 'center',
        marginTop: '60%',
        fontSize: '30px',
        fontWeight: 'bold',
        display: 'block'
      },
      button2: {
        fontFamily: 'Open Sans Condensed',
        textTransform: 'uppercase',
        borderRadius: '100px',
        boxShadow: '0 5px 15px -5px #222',
        background: '#000',
        textDecoration: 'none',
        color: 'white',
        textAlign: 'center',
        marginTop: '10%',
        marginLeft: '20%',
        fontSize: '25px',
        width: '60%',
        fontWeight: 'bold',
        display: 'block'
      },
      logo: {
        height: '20%',
        position: 'absolute',
        margin:'auto',
        left:0,
        right:0,
        top:5,
        borderRadius: '100%',
        boxShadow: '0 5px 15px -15px #222'
      },
      infoLayerStyle: {
        position: 'relative',
        marginTop: '-60px'
      },
      logoLayerStyle: {
        position: 'relative',
        height: '100%'
      },
      bgLayerStyle: {
        position: 'absolute',
        height: '100%',
        transform: 'translate(-15%, 17%)',
      }
    }

    return (
      /*<div>
      <div className="pusc-progress-indicator" id="pusc-progress-indicator">
        <div className="pusc-progress-indicator-head">
          <div className="first-indicator"></div>
          <div className="second-indicator"></div>
        </div>
        <div className="insp-logo-frame">
          <center><img src={require('./imgs/pusclogo.png')} alt="Logo PUSC" height="112" width="112" /></center>
        </div>
    </div>*/
      <div className="transition-item home-page">
        <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
        <ParallaxMousemove.Layer layerStyle={style.logoLayerStyle} config={{
            xFactor: 0.025,
            yFactor: 0.025,
            springSettings: {
              stiffness: 50,
              damping: 30
            }
          }}>
          <img src={require('./imgs/pusclogo.png')} style={style.logo} alt="Logo PUSC"></img>
        </ParallaxMousemove.Layer>
          <div style={style.inner}>
          <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
              xFactor: 0.1,
              yFactor: 0.025,
              springSettings: {
                stiffness: 50,
                damping: 30
              }
            }}>
            <a className="button">president university student council</a>
          </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.2,
                yFactor: 0.075,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
            <a className="button2">unite the will, uni propositum</a>
            </ParallaxMousemove.Layer>
          </div>
          <DropdownMenu {...menuOptions}>
            <li onClick={this.goToAbout.bind(this)}>About</li>
            <li onClick={this.goToCommissions.bind(this)}>Commissions</li>
            <li onClick={this.goToDownloads.bind(this)}>Downloads</li>
          </DropdownMenu>
        </ParallaxMousemove>
      </div>
      //</div>
    );
  }

  goToAbout() {
    this.props.history.push({
      pathname: "/about"
    });
  }

  goToCommissions() {
    this.props.history.push({
      pathname: "/commissions"
    });
  }

  goToDownloads() {
    this.props.history.push({
      pathname: "/downloads"
    });
  }
}

export default Home;
