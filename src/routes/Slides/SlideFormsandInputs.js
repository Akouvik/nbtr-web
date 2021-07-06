import React from 'react';
import useForm from 'react-hook-form';

const SlideFormsandInputs = () =>{
    return (
        <form className="px-5 py-3 slideform" >
            <div className="col-md-7 mx-auto">
             <div><label> Subnum: </label> <input type="text" placeholder="Subnum" name="subnum" /></div>
            <div><label> Age:</label> <input type="number" placeholder="Age" /></div>
            <div>
                <label> Sex: </label>
                <select>
                    <option> Male </option>
                    <option> Female </option>
                </select>
            </div>
            
            <div>
                <label>Race:</label>
                <select>
                    <option>Asian</option>
                    <option>Black</option>
                    <option>Hispanic</option>
                    <option>White</option>
                    <option>Other</option>
                    <option>Unknown</option>
                </select>
            </div>
            <div>        
                <label>Brain Region:</label>
                <select>
                    <option>Amygdala</option>
                    <option>Basal Ganglia</option>
                    <option>Basal Nucleus of Myenert</option>
                    <option>Calcarine Cortex</option>
                    <option>Caudal Hippocampus</option>
                    <option>Cerebellum</option>
                    <option>Cingulate Gyrus</option>
                    <option>Inferior Parietal Lobule</option>
                    <option>Medulla</option>
                    <option>Midbrain</option>
                    <option>Middle Frontal Gyrus</option>
                    <option>Orbital Frontal Cortex</option>
                    <option>Pons</option>
                    <option>Rostral Hippocampus</option>
                    <option>Superior Temporal</option>
                    <option>Thalamus and Basal Ganglia</option>
                </select>
            </div>
            <div>
                <label>Stain:</label>
                <select>
                    <option>Amyloid Beta</option>
                    <option>Congo Red</option>
                    <option>GFAP</option>
                    <option>H&E</option>
                    <option>Holzer's</option>
                    <option>LFB</option>
                    <option>LFB-CV</option>
                    <option>LFB-PAS</option>
                    <option>Modified Beilschowski</option>
                    <option>Other</option>
                    <option>Perl's Fe</option>
                    <option>SV40-IHC</option>
                    <option>Synuclein</option>
                    <option>Tau</option>
                    <option>TDP-43</option>
                    <option>TG3</option>
                    <option>Thioflavin S</option>
                    <option>Ubiquitin</option>
                </select>
            </div>
            <button class="btn btn-primary submitbtn" id="submitQueryButton" type="submit">Submit</button>
            </div>
            
           
        </form>
        )
}

export default SlideFormsandInputs;