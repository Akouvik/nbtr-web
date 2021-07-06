import {React, useState} from 'react';
import useForm from 'react-hook-form';

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
                         <ul>
                            <li>Male <input type="checkbox" />  </li>
                            <li>Female <input type="checkbox" />  </li>
                            <li>Both <input type="checkbox" />  </li>
                        </ul>
                    </div>
                    
                    <div className="col">
                        <h4>Race</h4>
                        <ul>
                            <li>Asian <input type="checkbox" /></li>
                            <li> Black <input type="checkbox" /></li>
                            <li> Hispanic <input type="checkbox" /></li>
                            <li>White <input type="checkbox" /></li>
                            <li> Other <input type="checkbox" /></li>
                            <li> Unknown <input type="checkbox" /></li>
                        </ul>
                    </div>
                </div>
                
                <div className="row"> 
                
                    <h4>Brain Region</h4>
                    <div className="col">
                        <ul>
                            <li> Amygdala <input type="checkbox" /> </li>
                            <li> Basal Ganglia <input type="checkbox" /> </li>
                            <li>  Basal Nucleus of Myenert <input type="checkbox" /></li>
                            <li>  Calcarine Cortex <input type="checkbox" /></li>
                            <li>  Caudal Hippocampus <input type="checkbox" /></li>
                            <li>  Cerebellum <input type="checkbox" /></li>
                            <li>  Cingulate Gyrus <input type="checkbox" /></li>
                            <li>  Inferior Parietal Lobule <input type="checkbox" /></li>
                        </ul>
                    </div>
                    
                    <div className="col">
                        <ul>
                            <li> Medulla <input type="checkbox" /></li>
                            <li> Midbrain <input type="checkbox" /></li>
                            <li> Middle Frontal Gyrus <input type="checkbox" /></li>
                            <li> Orbital Frontal Cortex <input type="checkbox" /></li>
                            <li>  Pons <input type="checkbox" /></li>
                            <li>  Rostral Hippocampus <input type="checkbox" /></li>
                            <li> Superior Temporal <input type="checkbox" /></li>
                            <li> Thalamus and Basal Ganglia <input type="checkbox" /></li>
                        </ul>
                    </div>
                    
                </div>
                
                
                <div className="row">
                    <h4>Stain</h4>
                    <div className="col">
                        <ul>
                            <li> Amyloid Beta <input type="checkbox" /></li>
                            <li> Congo Red <input type="checkbox" /></li>
                            <li> GFAP <input type="checkbox" /></li>
                            <li> H&E <input type="checkbox" /></li>
                            <li> Holzers <input type="checkbox" /></li>
                            <li> LFB <input type="checkbox" /></li>
                            <li> LFB-CV <input type="checkbox" /></li>
                            <li> LFB-PAS <input type="checkbox" /></li>
                             <li>Modified Beilschowski <input type="checkbox" /></li>
                         </ul>
                    </div>
                    
                    <div className="col">
                        <ul>
                            <li>Perls Fe <input type="checkbox" /></li>
                            <li>  SV40-IHC <input type="checkbox" /></li>
                            <li> Synuclein <input type="checkbox" /></li>
                            <li> Tau <input type="checkbox" /></li>
                            <li> TDP-43<input type="checkbox" /></li>
                            <li>TG3<input type="checkbox" /></li>
                            <li>Thioflavin S <input type="checkbox" /></li>
                            <li> Ubiquitin <input type="checkbox" /></li>
                            <li> Other <input type="checkbox" /></li>
                        </ul>
                    </div>
                </div>
                
                <input type="Submit" class="btn btn-primary submitbtn" id="submitQueryinput"/>
            </form>
    </div>
        )
}

export default SlideFormsandInputs;