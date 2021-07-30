import { React, useState } from "react";
import Modal from "react-modal";
import  { SectionGroups }  from '../../utils/SectionGroups'


Modal.setAppElement("#root");

const SlideFormsandInputs = () => {

  const {Sex,Race,BrainRegion,Stain} = SectionGroups[0]

  const [modalIsOpen, setIsOpen] = useState(false);

  let [sexCheckedState, setSexCheckedState] = useState(
    new Array(Sex.length).fill(false)
  );
  let [raceCheckedState, setRaceCheckedState] = useState(
    new Array(Race.length).fill(false)
  );

  let [brainRegionCheckedState, setBrainRegionCheckedState] = useState(
    new Array(BrainRegion.length).fill(false)
  );

  let [stainCheckedState, setStainCheckedState] = useState(
    new Array(Stain.length).fill(false)
  );

  let [minAge, setMinAge] = useState(5);
  let [maxAge, setMaxAge] = useState(100);

  let subtitle;

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
    if (position === 0) {
      updatedCheckedState = new Array(BrainRegion.length).fill(!brainRegionCheckedState[0])
    } else {
      updatedCheckedState = brainRegionCheckedState.map((item, index) => {
        if (index === position) {
          item = !item;
          if (item === true) {
            return BrainRegion[position];
          }
        } else {
          return item;
        }
      });
    }

    setBrainRegionCheckedState(updatedCheckedState);
  }

  function handleStainChange(position) {
    let updatedCheckedState;
    if (position === 0) {
      updatedCheckedState = new Array(Stain.length).fill(!stainCheckedState[0])
    } else {
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

  function handleSubmit(e) {
    e.preventDefault();
    openModal();
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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // query logic
  return (
    <div>
      <form className="slideform" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col agediv">
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
              {BrainRegion.map((region, index) => {
                return (
                  <li key={index}>
                    <label 
                    className="listings"
                    htmlFor={`custom-checkbox-${index}`}>{region}</label>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={BrainRegion}
                      value={BrainRegion}
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
          onClick = {()=> handleSubmit}
        />
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // contentLabel="Example Modal"
      >
        <h4 
        className="modal-subtitle" 
        ref={(_subtitle) => (subtitle = _subtitle)}
        >Select Files to Download</h4>
        <div className="modal-closebtn-div">
        <button
          className="btn btn-outline-dark modal-close"
          onClick={closeModal} 
         ></button>
         </div>
        <form>
          {/* form lists here */}
        </form>
      </Modal>
    </div>
  );
};

export default SlideFormsandInputs;
