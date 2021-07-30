import { React, useState } from "react";
import Modal from "react-modal";
// import useForm from 'react-hook-form';
// import  Selections  from "../../utils/Selections"

const Sex = ["All", "Male", "Female"];
const Race = ["All", "Asian", "Black", "Hispanic", "White"];
const brainRegion = [
  "All",
  "Amygdala",
  "Basal Ganglia",
  "Basal Nucleus of Myenert",
  "Calcarine Cortex",
  "Caudal Hippocampus",
  "Cerebellum",
  "Cingulate Gyrus",
  "Inferior Parietal Lobule",
  "Medulla",
  "Midbrain",
  "Middle Frontal Gyrus",
  "Orbital Frontal Cortex",
  "Pons",
  "Rostral Hippocampus",
  "Superior Temporal",
  "Thalamus and Basal Ganglia"
];

const Stain = [
  "All",
  "Amyloid Beta",
  "Congo Red",
  "GFAP",
  "H&E",
  "Holzers",
  "LFB",
  "LFB-CV",
  "LFB-PAS",
  "Modified Beilschowski",
  "Perls Fe",
  "SV40-IHC",
  "Synuclein",
  "Tau",
  "TDP-43",
  "TG3",
  "Thioflavin",
  "Ubiquitin"
];

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const SlideFormsandInputs = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  let [sexCheckedState, setSexCheckedState] = useState(
    new Array(Sex.length).fill(false)
  );
  let [raceCheckedState, setRaceCheckedState] = useState(
    new Array(Race.length).fill(false)
  );

  let [brainRegionCheckedState, setBrainRegionCheckedState] = useState(
    new Array(brainRegion.length).fill(false)
  );

  let [stainCheckedState, setStainCheckedState] = useState(
    new Array(Stain.length).fill(false)
  );

  let [minAge, setMinAge] = useState(5);
  let [maxAge, setMaxAge] = useState(100);

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // openModal();
    sexCheckedState = sexCheckedState.filter(
      (item) => item !== undefined && item !== false
    );
    raceCheckedState = raceCheckedState.filter(
      (item) => item !== undefined && item !== false
    );
    brainRegionCheckedState = brainRegionCheckedState.filter(
      (item) => item !== undefined && item !== false
    );

    stainCheckedState = stainCheckedState.filter(
      (item) => item !== undefined && item !== false
    );

    console.log(
      sexCheckedState,
      raceCheckedState,
      brainRegionCheckedState,
      stainCheckedState
    );
  }
  // If the index does not match with the provided position parameter, then we're not reversing its value but we're just returning the value as it is. if it does match then reverse it
  function handleSexChange(position) {
    let updatedCheckedState;
    if(position === 0){
       updatedCheckedState = new Array(Sex.length).fill(!sexCheckedState[0])
    }else{
     updatedCheckedState = sexCheckedState.map((item,index) =>{
      if (index === position) {
        item = !item;
        if (item === true) {
          return Sex[position];
        }
      } else {
        return item;
      }
    });
    }
    setSexCheckedState(updatedCheckedState);
  }

  function handleRaceChange(position) {
    let updatedCheckedState;
    if (position === 0) {
      updatedCheckedState = new Array(Race.length).fill(!raceCheckedState[0])
    } else {
      updatedCheckedState = raceCheckedState.map((item, index) => {
        if (index === position) {
          item = !item;
          if (item === true) {
            return Race[position];
          }
        } else {
          return item;
        }
      });
    }
    setRaceCheckedState(updatedCheckedState);
  }

  function handleBrainRegionChange(position) {
    let updatedCheckedState;
    if(position === 0){
      updatedCheckedState = new Array(brainRegion.length).fill(!brainRegionCheckedState[0])
    }else{
      updatedCheckedState = brainRegionCheckedState.map((item,index)=>{
        if(index === position){
          item = !item;
          if(item === true){
            return brainRegion[position]
          }
        }
      })
    }

    setBrainRegionCheckedState(updatedCheckedState);
  }

  function handleStainChange(position) {
    let updatedCheckedState;
    if(position === 0){
      updatedCheckedState = new Array(Stain.length).fill(!stainCheckedState[0])
    }else{
       updatedCheckedState = stainCheckedState.map((item, index) => {
      if (index === position) {
        item = !item;
        if (item === true) {
          return Stain[position];
        }
      } else {
        return item;
      }
    });
    }
    
    setStainCheckedState(updatedCheckedState);
  }

  return (
    <div>
      <form className="slideform" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h4> Age </h4>

            <input
              type="number"
              placeholder="Min Age"
              onChange={(e) => setMinAge({ minAge: e.target.value })}
            />
            <input
              type="number"
              placeholder="Max Age"
              onChange={(e) => setMaxAge({ maxAge: e.target.value })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h5> Sex </h5>
            <ul className="sex">
              {Sex.map((sex, index) => {
                return (
                  <li key={index}>
                    <label
                    className="listings"
                     htmlFor={`custom-checkbox-${index}`}>{sex}</label>
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
                      <label 
                      className="listings"
                      htmlFor={`custom-checkbox-${index}`}>{race}</label>
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
              {brainRegion.map((region, index) => {
                return (
                  <li key={index}>
                    <label 
                    className="listings"
                    htmlFor={`custom-checkbox-${index}`}>{region}</label>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={brainRegion}
                      value={brainRegion}
                      checked={brainRegionCheckedState[index]}
                      onChange={() => handleBrainRegionChange(index)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="row">
          <h5> Slide Stain </h5>
          <div className="col">
            <ul className="stain">
              {Stain.map((stain, index) => {
                return (
                  <li key={index}>
                    <label 
                    className="listings"
                    htmlFor={`custom-checkbox-${index}`}>{stain}</label>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={stain}
                      value={stain}
                      checked={stainCheckedState[index]}
                      onChange={() => handleStainChange(index)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <input
          type="Submit"
          className="btn btn-primary submitbtn"
          id="submitQueryinput"
        />
      </form>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default SlideFormsandInputs;
