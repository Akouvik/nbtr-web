import {React, useState} from 'react';
import useForm from 'react-hook-form';
import Selections from "../../utils/Selections"

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
            <form className="slideform" onSubmit={handleSubmit} >
                <div  className="row">
                     <div className="col">
                        <h4> Subnum: </h4>
                        <input type="text" placeholder="Subnum" name="subnum" />
                     </div>
                     
                    <div className="col">
                        <h4> Age </h4>
                        <input type="number" placeholder="Min Age" /> <input type="number" placeholder="Max Age" />
                    </div>
                </div>
                
                <div className="row">
                
                    <div className="col">
                        <h4> Sex </h4>
                         <ul className="sex">
                            {Selections.Sex.map((sex,index) => {
                                return (
                                <li key={index}>
                                    <label htmlFor={`custom-checkbox-${index}`}>{sex}</label>
                                    <div>
                                    <input type="checkbox" id={`custom-checkbox-${index}`} name={sex} value={sex}/>
                                    </div>
                                
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>   
            </form>
    </div>
        )
}

export default SlideFormsandInputs;