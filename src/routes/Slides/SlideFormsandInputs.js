import { React, useState } from "react";
// import useForm from 'react-hook-form';
// import  Selections  from "../../utils/Selections"

const Sex = ["Male", "Female", "Both"];
const Race = ["Asian", "Black", "Hispanic", "White", "Other", "Unknown"];
const leftSideRegion = [
  "Amygdala",
  " Basal Ganglia",
  "Basal Nucleus of Myenert",
  "Calcarine Cortex",
  "Caudal Hippocampus",
  "Cerebellum",
  "Cingulate Gyrus",
  "Inferior Parietal Lobule"
];
const rightSideRegion = [
  "Medulla",
  "Midbrain",
  "Middle Frontal Gyrus",
  "Orbital Frontal Cortex",
  "Pons",
  "Rostral Hippocampus",
  "Superior Temporal",
  "Thalamus and Basal Ganglia"
];

const leftSideStain = [
  "Amyloid Beta",
  "Congo Red",
  "GFAP",
  "H&E",
  "Holzers",
  "LFB",
  "LFB-CV",
  "LFB-PAS"
];
const rightSideStain = [
  "Modified Beilschowski",
  "Perls Fe",
  "SV40-IHC",
  "Synuclein",
  "Tau",
  "TDP-43",
  "TG3",
  "Thioflavin",
  "Ubiquitin",
  "Other"
];

//  export  const Selections = ["Male","Female","Both","Asian","Black","Hispanic","White", "Other","Unknown","Amygdala"," Basal Ganglia","Basal Nucleus of Myenert",
//  "Calcarine Cortex","Caudal Hippocampus","Cerebellum","Cingulate Gyrus","Inferior Parietal Lobule","Medulla","Midbrain","Middle Frontal Gyrus","Orbital Frontal Cortex",
//  "Pons","Rostral Hippocampus","Superior Temporal","Thalamus and Basal Ganglia","Amyloid Beta","Congo Red","GFAP","H&E","Holzers","LFB","LFB-CV","LFB-PAS","Modified Beilschowski",
//  "Perls Fe","SV40-IHC","Synuclein","Tau","TDP-43","TG3","Thioflavin","Ubiquitin","Other"]

const SlideFormsandInputs = () => {
  const [sexCheckedState, setSexCheckedState] = useState(
    new Array(Sex.length).fill(false)
  );
  const [raceCheckedState, setRaceCheckedState] = useState(
    new Array(Race.length).fill(false)
  );

  const [leftRegionCheckedState, setLeftRegionCheckedState] = useState(
    new Array(leftSideRegion.length).fill(false)
  );
  const [rightRegionCheckedState, setRightRegionCheckedState] = useState(
    new Array(rightSideRegion.length).fill(false)
  );

  const [leftStainCheckedState, setLeftStainCheckedState] = useState(
    new Array(leftSideStain.length).fill(false)
  );
  const [rightStainCheckedState, setRightStainCheckedState] = useState(
    new Array(rightSideStain.length).fill(false)
  );

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      sexCheckedState,
      raceCheckedState,
      leftRegionCheckedState,
      rightRegionCheckedState,
      leftStainCheckedState,
      rightStainCheckedState
    );
  }
  // If the index does not match with the provided position parameter, then we're not reversing its value but we're just returning the value as it is. if it does match then reverse it
  function handleSexChange(position) {
    const updatedCheckedState = sexCheckedState.map((item, index) => {
      if (index === position) {
        item = !item;
        if (item === true) {
          return Sex[position];
        }
      } else {
        return item;
      }
    });

    setSexCheckedState(updatedCheckedState);
    console.log(updatedCheckedState);
  }

  function handleRaceChange(position) {
    const updatedCheckedState = raceCheckedState.map((item, index) => {
      if (index === position) {
        item = !item;
        if (item === true) {
          return Race[position];
        }
      } else {
        return item;
      }
    });

    setRaceCheckedState(updatedCheckedState);
    console.log(updatedCheckedState);
  }

  function handleLeftRegionChange(position) {
    const updatedCheckedState = leftRegionCheckedState.map((item, index) => {
      if (index === position) {
        item = !item;
        if (item === true) {
          return leftSideRegion[position];
        }
      } else {
        return item;
      }
    });

    setLeftRegionCheckedState(updatedCheckedState);
    console.log(updatedCheckedState);
  }

  function handleRightRegionChange(position) {
    const updatedCheckedState = rightRegionCheckedState.map((item, index) => {
      if (index === position) {
        item = !item;
        if (item === true) {
          return rightSideRegion[position];
        }
      } else {
        return item;
      }
    });
    setRightRegionCheckedState(updatedCheckedState);
    console.log(updatedCheckedState);
  }

  function handleLeftStainChange(position) {
    const updatedCheckedState = leftStainCheckedState.map((item, index) => {
      if (index === position) {
        item = !item;
        if (item === true) {
          return leftSideStain[position];
        }
      } else {
        return item;
      }
    });
    setLeftStainCheckedState(updatedCheckedState);
    console.log(updatedCheckedState);
  }

  function handleRightStainChange(position) {
    const updatedCheckedState = rightStainCheckedState.map((item, index) => {
      if (index === position) {
        item = !item;
        if (item === true) {
          return rightSideStain[position];
        }
      } else {
        return item;
      }
    });
    setRightStainCheckedState(updatedCheckedState);
    console.log(updatedCheckedState);
  }

  return (
    <div>
      <form className="slideform" onSubmit={() => handleSubmit()}>
        <div className="row">
          <div className="col">
            <h4> Age </h4>
            <input type="number" placeholder="Min Age" />
            <input type="number" placeholder="Max Age" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h5> Sex </h5>
            <ul className="sex">
              {Sex.map((sex, index) => {
                return (
                  <li key={index}>
                    <label htmlFor={`custom-checkbox-${index}`}>{sex}</label>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name="Sex"
                      value={sex}
                      checked={sexCheckedState[index]}
                      onChange={() => handleSexChange(index)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col">
            <div>
              <h5>Race</h5>
              <ul className="race">
                {Race.map((race, index) => {
                  return (
                    <li key={index}>
                      <label htmlFor={`custom-checkbox-${index}`}>{race}</label>
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={race}
                        value={race}
                        checked={raceCheckedState[index]}
                        onChange={() => handleRaceChange(index)}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <h5> Brain Region</h5>
          <div className="col">
            <ul className="region">
              {leftSideRegion.map((leftRegion, index) => {
                return (
                  <li key={index}>
                    <label htmlFor={`custom-checkbox-${index}`}>
                      {leftRegion}
                    </label>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={leftRegion}
                      value={leftRegion}
                      checked={leftRegionCheckedState[index]}
                      onChange={() => handleLeftRegionChange(index)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col">
            <div>
              <ul className="region">
                {rightSideRegion.map((rightRegion, index) => {
                  return (
                    <li key={index}>
                      <label htmlFor={`custom-checkbox-${index}`}>
                        {rightRegion}
                      </label>
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={rightRegion}
                        value={rightRegion}
                        checked={rightRegionCheckedState[index]}
                        onChange={() => handleRightRegionChange(index)}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <h5> Slide Stain </h5>
          <div className="col">
            <ul className="stain">
              {leftSideStain.map((stain, index) => {
                return (
                  <li key={index}>
                    <label htmlFor={`custom-checkbox-${index}`}>{stain}</label>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={stain}
                      value={stain}
                      checked={leftStainCheckedState[index]}
                      onChange={() => handleLeftStainChange(index)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col">
            <div>
              <ul className="stain">
                {rightSideStain.map((stain, index) => {
                  return (
                    <li key={index}>
                      <label htmlFor={`custom-checkbox-${index}`}>
                        {stain}
                      </label>
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={stain}
                        value={stain}
                        checked={rightStainCheckedState[index]}
                        onChange={() => handleRightStainChange(index)}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <input
          type="Submit"
          className="btn btn-primary submitbtn"
          id="submitQueryinput"
        />
      </form>
    </div>
  );
};

export default SlideFormsandInputs;
