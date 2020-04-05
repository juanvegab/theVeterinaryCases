import React, { Component } from "react";
import CaseCard from "../../components/CaseCard";
import s from './style.module.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cases: []
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/apptKv4T6bAJJRBFN/Pets?api_key=keysPevbjWbucANJ3')
    .then(res => res.json())
    .then(data => this.setState({cases: data.records}))
    .catch(error => console.log(error));
  }

  render() {
    const { cases } = this.state;
    return (
      <div className={s.homeWrapper}>
        <h1>Welcome to The Veterinary Cases</h1>
        <div className={s.cardsWrapper}>
          {
            cases && cases.length
            ? cases.map((item, i) =>  
              <div className={s.caseCard}>
                <CaseCard key={i} petCase={item}></CaseCard>
              </div>)
            : null
          }  
        </div>
      </div>
    );
  }
}

export default Home;
