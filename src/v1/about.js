import React, { Component } from "react";

class About extends Component {
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
            <span style={{ cursor: 'pointer', color: 'red' }} onClick={this.goBack.bind(this)}>← Back</span> <span style={{ position: 'relative', fontSize: '2.5rem', fontWeight: 'bold', left: '42.5%', color: '#0D47A1' }}>About</span>
          </p>
          <p style={style.paragraph}><b>President University Student Council</b> is the student legislative body at university level of President University. PUSC is under coordination of Student Affairs Department, which is under Vice Rector III (Vice Rector for Student and Alumni Affairs).</p>
          <p style={style.paragraph}>PUSC consists of Board of Directors, Members of Commissions, and Members of Internal Bureau.<br/>
          <a onClick={this.goToBOD.bind(this)} style={style.link}>Board of Directors</a> of PUSC consists of Chairperson and Vice Chairperson, Secretary and Treasurer, Head of Commission I to IV and Head of Internal Bureau.</p>
          <p style={style.paragraph}><b>Functions</b><br/>President University Student Council has 5 functions:
            <ul>
              <li><a onClick={this.goToBOD.bind(this)} style={style.link}>Research</a>: Conduct research regarding student prosperity and present it to the management of President University.</li>  
              <li><a onClick={this.goToBOD.bind(this)} style={style.link}>Aspiration</a>: Collect, process and deliver the students' aspiration regarding student prosperity at university level.</li>  
              <li><a onClick={this.goToBOD.bind(this)} style={style.link}>Mediation</a>: Become mediator between students, student organizations, and management of President University.</li>  
              <li><a onClick={this.goToBOD.bind(this)} style={style.link}>Legislation</a>: Establish laws and regulations for student organizations.</li>  
              <li><a onClick={this.goToBOD.bind(this)} style={style.link}>Supervision</a>: Supervise and evaluate the performance of the student executive body at university level of President University.</li>  
            </ul>
          </p>
          <p style={style.paragraph}><b>Vision</b><br/>Become the reliable mediator for students, student organizations, and management of President Univeristy to create progressive change for President University.</p>
          <p style={style.paragraph}><b>Missions</b>
            <ol>
              <li>Strengthen the internal relations through synergy and deliberation.</li>
              <li>Collaborate with the Management of President University to create conducive environment for student activities.</li>
              <li>Bring continuous improvements through aspiration for students' welfare.</li>
              <li>Foster mutual growth and complementary relations with student organizations.</li>
              <li>Enhance the quality of student events and activities through accountability, trust, and constructive criticism.</li>
              <li>Keep peace, maintain justice and promote sustainability through law and order.</li>
            </ol>
          </p>
          <p style={style.paragraph}><b>Former Chairpersons</b>
            <ol>
              <li>Period of 2010: Lukas Adi Prakoso</li>
              <li>Period of 2011: Immanuel Edo Adita Satria (CIT 2009)</li>
              <li>Period of 2012: Haryanto (CIT 2010)</li>
              <li>Period of 2013: Ayu Yunia Harsari (IRE 2011)</li>
              <li>Period of 2014: Grace Debora Christina (IRE 2012)</li>
              <li>Period of 2015: James Tedy (IEN 2013)</li>
              <li>Period of 2016: Paulina (MGT 2014)</li>
              <li>Period of 2017: Bryan Johanes Rengkung (CIT 2015)</li>
            </ol>
          </p>
        </div>
      </div>
    );
  }

  goBack() {
    this.props.history.goBack();
  }

  goToBOD() {
    this.props.history.push({
      pathname: "/commissions"
    });
  }
}

export default About;
