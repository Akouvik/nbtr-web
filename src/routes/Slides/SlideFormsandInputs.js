import { React, useState } from 'react';
import useForm from 'react-hook-form';
// import  Sex  from "../../utils/Sex"


const  Sex = ["Male","Female","Both"];
const  Race = ["Asian","Black","Hispanic","White", "Other","Unknown"];
const  Region = ["Amygdala"," Basal Ganglia","Basal Nucleus of Myenert","Calcarine Cortex","Caudal Hippocampus","Cerebellum","Cingulate Gyrus","Inferior Parietal Lobule","Medulla","Midbrain","Middle Frontal Gyrus","Orbital Frontal Cortex","Pons","Rostral Hippocampus","Superior Temporal","Thalamus and Basal Ganglia"]
const  Stain = ["Amyloid Beta","Congo Red","GFAP","H&E","Holzers","LFB","LFB-CV","LFB-PAS","Modified Beilschowski","Perls Fe","SV40-IHC","Synuclein","Tau","TDP-43","TG3","Thioflavin","Ubiquitin","Other"]

let halfLengthRegion = Math.ceil(Region.length / 2);    
let leftSideRegion = halfLengthRegion.splice(0,halfLengthRegion);
let rightSideRegion = halfLengthRegion.splice(halfLengthRegion, Region.length)


let halfLengthStain = Math.ceil(Stain.length / 2);    
let leftSideStain = halfLengthStain.splice(0,halfLengthStain);
let rightSideStain = leftSideStain.splice(leftSideStain, Stain.length)
const SlideFormsandInputs = () =>{
    
    const [checkboxState, setCheckboxState] = useState([])
    
    // function handleSubmit (e){
    //     e.preventDefault()
    // }
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
                        <h4> Subnum: </h4>
                        <input type="text" placeholder="Subnum" name="subnum" />
                     </div>
                     
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
                                   <label htmlFor={`custom-checkbox-${index}`}>{sex}</label><input type="checkbox" id={`custom-checkbox-${index}`} name={sex} value={sex}/>
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
                                <label htmlFor={`custom-checkbox-${index}`}>{race}</label><input type="checkbox" id={`custom-checkbox-${index}`} name={race} value={race} />
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
                            {halfLengthRegion.map((region,index) => {
                                return (
                                <li key={index}>
                                   <label htmlFor={`custom-checkbox-${index}`}>{region}</label><input type="checkbox" id={`custom-checkbox-${index}`} name={region} value={region}/>
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
                                <label htmlFor={`custom-checkbox-${index}`}>{region}</label><input type="checkbox" id={`custom-checkbox-${index}`} name={region} value={region} />
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
                                   <label htmlFor={`custom-checkbox-${index}`}>{stain}</label><input type="checkbox" id={`custom-checkbox-${index}`} name={stain} value={stain}/>
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
            </form>
    </div>
        )
}

export default SlideFormsandInputs;