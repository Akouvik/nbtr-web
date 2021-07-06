import React from 'react';
import useForm from 'react-hook-form';

const SlideFormsandInputs = () =>{
    return (
        <form className="px-5 py-3 slideform" >
            <div className="col-md-7 mx-auto">
             <div>
                <label> Subnum: </label> 
                <input type="text" placeholder="Subnum" name="subnum" />
             </div>
            <div>
                <label> Min Age:</label> 
                <input type="number" placeholder="Age" />
            </div>
            <div>
            <label> Max Age:</label> 
                <input type="number" placeholder="Max Age" />
            </div>

            <div>
                <label> Sex: </label>
                    <input type="checkbox" /> Male 
                    <input type="checkbox" /> Female 
                    <input type="checkbox" /> Both 
            </div>
            
            <div>
                <label>Race:</label>
                    <input type="checkbox" />Asian
                    <input type="checkbox" />Black
                    <input type="checkbox" />Hispanic
                    <input type="checkbox" />White
                    <input type="checkbox" />Other
                    <input type="checkbox" />Unknown
            </div>
            <div>        
                <label>Brain Region:</label>
                    <input type="checkbox" />Amygdala
                    <input type="checkbox" />Basal Ganglia
                    <input type="checkbox" />Basal Nucleus of Myenert
                    <input type="checkbox" />Calcarine Cortex
                    <input type="checkbox" />Caudal Hippocampus
                    <input type="checkbox" />Cerebellum
                    <input type="checkbox" />Cingulate Gyrus
                    <input type="checkbox" />Inferior Parietal Lobule
                    <input type="checkbox" />Medulla
                    <input type="checkbox" />Midbrain
                    <input type="checkbox" />Middle Frontal Gyrus
                    <input type="checkbox" />Orbital Frontal Cortex
                    <input type="checkbox" />Pons
                    <input type="checkbox" />Rostral Hippocampus
                    <input type="checkbox" />Superior Temporal
                    <input type="checkbox" />Thalamus and Basal Ganglia
            </div>
            <div>
                <label>Stain:</label>
                    <input type="checkbox" />Amyloid Beta
                    <input type="checkbox" />Congo Red
                    <input type="checkbox" />GFAP
                    <input type="checkbox" />H&E
                    <input type="checkbox" />Holzer's
                    <input type="checkbox" />LFB
                    <input type="checkbox" />LFB-CV
                    <input type="checkbox" />LFB-PAS
                    <input type="checkbox" />Modified Beilschowski
                    <input type="checkbox" />Other
                    <input type="checkbox" />Perl's Fe
                    <input type="checkbox" />SV40-IHC
                    <input type="checkbox" />Synuclein
                    <input type="checkbox" />Tau
                    <input type="checkbox" />TDP-43
                    <input type="checkbox" />TG3
                    <input type="checkbox" />Thioflavin S
                    <input type="checkbox" />Ubiquitin
            </div>
            
            <input type="Submit" class="btn btn-primary submitbtn" id="submitQueryinput"/>Submit
            </div>
            
           
        </form>
        )
}

export default SlideFormsandInputs;