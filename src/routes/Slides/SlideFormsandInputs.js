import { React, useState } from 'react';
import useForm from 'react-hook-form';
// import  Sex  from "../../utils/Sex"


const  Sex = ["Male","Female","Both"];
const  Race = ["Asian","Black","Hispanic","White", "Other","Unknown"];


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
            </form>
    </div>
        )
}

export default SlideFormsandInputs;