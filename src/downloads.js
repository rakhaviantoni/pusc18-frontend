import React, { Component } from "react";

class Downloads extends Component {
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
        fontWeight: 'bold',
        fontStyle: 'italic'
      },
      img: {
        height: '225%',
        width: '75%',
        position: 'absolute',
        margin:'auto',
        left:0,
        right:0
      },
    }

    return (
      <div className="transition-item detail-page">
        <div>
          <p style={{ padding: 10 }}>
            <span style={{ color: 'red' }} onClick={this.goBack.bind(this)}>← Back</span> <span className="page-title">Downloads</span>
          </p>
          <p style={style.paragraph}>Content incoming...
          </p>
        </div>
      </div>
    );
  }

  goBack() {
    this.props.history.goBack();
  }
}

export default Downloads;
