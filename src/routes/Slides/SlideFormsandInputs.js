import { React, useState } from 'react';
import useForm from 'react-hook-form';
// import  Selections  from "../../utils/Selections"


const  Sex = ["Male","Female","Both"];
const  Race = ["Asian","Black","Hispanic","White", "Other","Unknown"];
const  leftSideRegion = ["Amygdala"," Basal Ganglia","Basal Nucleus of Myenert","Calcarine Cortex","Caudal Hippocampus","Cerebellum","Cingulate Gyrus","Inferior Parietal Lobule"]
const  rightSideRegion = ["Medulla","Midbrain","Middle Frontal Gyrus","Orbital Frontal Cortex","Pons","Rostral Hippocampus","Superior Temporal","Thalamus and Basal Ganglia"]

const  leftSideStain = ["Amyloid Beta","Congo Red","GFAP","H&E","Holzers","LFB","LFB-CV","LFB-PAS"]
const  rightSideStain = ["Modified Beilschowski","Perls Fe","SV40-IHC","Synuclein","Tau","TDP-43","TG3","Thioflavin","Ubiquitin","Other"]

//  export  const Selections = ["Male","Female","Both","Asian","Black","Hispanic","White", "Other","Unknown","Amygdala"," Basal Ganglia","Basal Nucleus of Myenert",
//  "Calcarine Cortex","Caudal Hippocampus","Cerebellum","Cingulate Gyrus","Inferior Parietal Lobule","Medulla","Midbrain","Middle Frontal Gyrus","Orbital Frontal Cortex",
//  "Pons","Rostral Hippocampus","Superior Temporal","Thalamus and Basal Ganglia","Amyloid Beta","Congo Red","GFAP","H&E","Holzers","LFB","LFB-CV","LFB-PAS","Modified Beilschowski",
//  "Perls Fe","SV40-IHC","Synuclein","Tau","TDP-43","TG3","Thioflavin","Ubiquitin","Other"]


const SlideFormsandInputs = () =>{

    const [sexCheckedState, setSexCheckedState] = useState(new Array(Sex.length).fill(false))
    const [raceCheckedState, setRaceCheckedState] = useState(new Array(Race.length).fill(false))
    
    const [leftRegionCheckedState, setLeftRegionCheckedState] = useState(new Array(leftSideRegion.length).fill(false))
    const [rightRegionCheckedState, setRightRegionCheckedState] = useState(new Array(rightSideRegion.length).fill(false))
    
    const [leftStainCheckedState, setLeftStainCheckedState] = useState(new Array(leftSideStain.length).fill(false))
    const [rightStainCheckedState, setRightStainCheckedState] = useState(new Array(rightSideStain.length).fill(false))
    
    // function handleSubmit (e){
    //     e.preventDefault()
    // }
    
    function handleSexChange(position){
        const updatedCheckedState = sexCheckedState.map((sex,index) =>
             index === position ? !sex : sex 
        )
        
        setSexCheckedState(updatedCheckedState)
        console.log(sexCheckedState)
    }
    
    
    function handleRaceChange(position){
            const updatedCheckedState = raceCheckedState.map((race,index) =>
             index === position ? !race : race
        )
        setRaceCheckedState(updatedCheckedState)

        console.log(raceCheckedState)
    }
    
    function handleLeftRegionChange(position){
             const updatedCheckedState = leftRegionCheckedState.map((leftRegion,index) =>
             index === position ? !region : region
        )
        setLeftRegionCheckedState(updatedCheckedState)
    }
    
       
    function handleRightRegionChange(position){
             const updatedCheckedState = rightRegionCheckedState.map((rightRegion,index) =>
             index === position ? !region : region
        )
        setRightRegionCheckedState(updatedCheckedState)
    }
    
    
    function handleLeftStainChange(position){
             const updatedCheckedState = leftStainCheckedState.map((race,index) =>
             index === position ? !race : race
        )
        setLeftStainCheckedState(updatedCheckedState)
    }
    
    
       
    function handleRightStainChange(position){
             const updatedCheckedState = rightStainCheckedState.map((race,index) =>
             index === position ? !race : race
        )
        setRightStainCheckedState(updatedCheckedState)
    }
    
    
    
    let subnum, minAge,maxAge;
    let sex = []
    let race=[]
    let region = []
    let stain = []
   
    
    return (
        <div>
            <form className="slideform">
                <div  className="row">
                    <div className="col">
                        <h4> Age </h4>
                        <input type="number" placeholder="Min Age" /><input type="number" placeholder="Max Age" />
                    </div>
                </div>
                
                <div className="row">
                
                    <div className="col">
                        <h5> Sex </h5>
                         <ul className="sex">
                            {Sex.map((sex,index) => {
                                return (
                                <li key={index}>
                                   <label htmlFor={`custom-checkbox-${index}`}>{sex}</label>
                                   <input type="checkbox" id={`custom-checkbox-${index}`} name="Sex" value={sex} checked={sexCheckedState[index]} onChange={()=>handleSexChange(index)} />
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                    
                    <div className="col">
                        <div>
                            <h5>Race</h5>
                            <ul className="race">
                            {Race.map((race,index) =>{
                                return(
                                <li key={index}>
                                <label htmlFor={`custom-checkbox-${index}`}>{race}</label>
                                <input type="checkbox" id={`custom-checkbox-${index}`} name={race} value={race} checked = {raceCheckedState[index]} onChange = {()=>handleRaceChange(index)} />
                                </li>
                                )
                            })}
                            </ul>
                        </div>
                    </div>
                </div>  
                 <div className="row">
                    <h5> Brain Region</h5>
                    <div className="col">
                         <ul className="region">
                            {leftSideRegion.map((region,index) => {
                                return (
                                <li key={index}>
                                   <label htmlFor={`custom-checkbox-${index}`}>{region}</label>
                                   <input type="checkbox" id={`custom-checkbox-${index}`} name={region} value={region} checked = {leftRegionCheckedState[index]} onChange = {() => handleLeftRegionChange((index))}/>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                    
                    <div className="col">
                        <div>
                            <ul className="region">
                            {rightSideRegion.map((region,index) =>{
                                return(
                                <li key={index}>
                                <label htmlFor={`custom-checkbox-${index}`}>{region}</label>
                                <input type="checkbox" id={`custom-checkbox-${index}`} name={region} value={region} checked = {rightRegionCheckedState[index]} onChange = {()=>handleRightRegionChange(index)}/>
                                </li>
                                )
                            })}
                            </ul>
                        </div>
                    </div>
                </div> 
                
               <div className="row">
                    <h5> Slide Stain </h5>
                    <div className="col">
                         <ul className="stain">
                            {leftSideStain.map((stain,index) => {
                                return (
                                <li key={index}>
                                   <label htmlFor={`custom-checkbox-${index}`}>{stain}</label>
                                   <input type="checkbox" id={`custom-checkbox-${index}`} name={stain} value={stain}/>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                    
                    <div className="col">
                        <div>
                            <ul className="stain">
                            {rightSideStain.map((stain,index) =>{
                                return(
                                <li key={index}>
                                <label htmlFor={`custom-checkbox-${index}`}>{stain}</label><input type="checkbox" id={`custom-checkbox-${index}`} name={stain} value={stain} />
                                </li>
                                )
                            })}
                            </ul>
                        </div>
                    </div>
                </div> 
                <input type="Submit" class="btn btn-primary submitbtn" id="submitQueryinput"/>

            </form>
    </div>
        )
}

export default SlideFormsandInputs;