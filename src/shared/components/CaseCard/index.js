import React, { Component } from "react";
import SimpleSlider from "../SimpleSlider";
import s from './style.module.scss';

class CaseCard extends Component {
  render() {

    const { petCase } = this.props;
    const { Name, Animal, Sex, Notes, images } = petCase.fields;

    return (
      <div className={s.caseCardWrapper}>
        <h2>{`${Name} The ${Animal}`} <small>{Sex}</small></h2>
        <p>{Notes}</p>
        <div className={s.slider}>
          <SimpleSlider images={images}></SimpleSlider>
        </div>
        {/* {
          Medications && Medications.length > 0 ?
          <>
            <p>Medicinas:</p>
            <ul>
              {Medications.map((med, index) => <li key={index}>{med}</li>)}
            </ul>
          </>
          : null
        } */}
      </div>
    );
  }
}

export default CaseCard;
