import React, { Component } from "react";

class Commissions extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {

    const style = {
      header : {
        fontFamily: 'Open Sans Condensed',
        fontSize: '50px',
        fontWeight: 600
      },
      paragraph : {
        fontFamily: 'Open Sans Condensed',
        fontSize: '20px',
        letterSpacing: '0.62px',
        lineHeight: '30px',
        fontWeight: 300
      },
      link : {
        cursor: 'pointer',
        fontWeight: 'bold',
        fontStyle: 'italic'
      },
      img: {
        width: '100%',
        position: 'relative',
        margin:'auto',
        left:0,
        right:0
      },
    }

    return (
      <div className="transition-item detail-page">
        <div>
          <p style={{ padding: 10 }}>
            <span style={{ cursor: 'pointer', color: 'red' }} onClick={this.goBack.bind(this)}>← Back</span> <span style={{ position: 'relative', fontSize: '2.5rem', fontWeight: 'bold', left: '42.5%', color: '#0D47A1' }}>Commissions</span>
          </p>
          <img alt="BOD" id="bod" src={require('./imgs/BOD.png')} style={style.img}></img>
          <img alt="COMM1" id="comm1" src={require('./imgs/COMM1.png')} style={style.img}></img>
          <img alt="COMM2" id="comm2" src={require('./imgs/COMM2.png')} style={style.img}></img>
          <img alt="COMM3" id="comm3" src={require('./imgs/COMM3.png')} style={style.img}></img>
          <img alt="COMM4" id="comm4" src={require('./imgs/COMM4.png')} style={style.img}></img>
          <img alt="IB" id="ib" src={require('./imgs/IB.png')} style={style.img}></img>
        </div>
      </div>
    );
  }

  goBack() {
    this.props.history.goBack();
  }
}

export default Commissions;
