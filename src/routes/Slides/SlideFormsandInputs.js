import React from 'react';
import useForm from 'react-hook-form';

const SlideFormsandInputs = () =>{
    function handleSubmit (e){
        e.preventDefault()
    }
    return (
        <form className="slideform" onSubmit={handleSubmit} >
            <div className="mx-auto">
             <div>
                <h4> Subnum: </h4>
                <input type="text" placeholder="Subnum" name="subnum" />
             </div>
             
            <div>
                <h4> Age </h4>
                <input type="number" placeholder="Min Age" /> <input type="number" placeholder="Max Age" />
            </div>

            <div>
                <h4> Sex </h4>
                <ul>
                    <li> <input type="checkbox" /> Male </li>
                    <li> <input type="checkbox" /> Female </li>
                    <li> <input type="checkbox" /> Both </li>
                </ul>
            </div>
            
            <div>
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
            
            <div>        
                <h4>Brain Region</h4>
                <div className="col-lg-6 ">
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
                
                <div className="col-lg-6">
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
            
            
            <div>
                <h4>Stain</h4>
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
                    <li> Other <input type="checkbox" /></li>
                     <li>Perls Fe <input type="checkbox" /></li>
                   <li>  SV40-IHC <input type="checkbox" /></li>
                    <li> Synuclein <input type="checkbox" /></li>
                    <li> Tau <input type="checkbox" /></li>
                    <li> TDP-43<input type="checkbox" /></li>
                     <li>TG3<input type="checkbox" /></li>
                     <li>Thioflavin S <input type="checkbox" /></li>
                    <li> Ubiquitin <input type="checkbox" /></li>
                    </ul>
            </div>
            
            <input type="Submit" class="btn btn-primary submitbtn" id="submitQueryinput"/>
            </div>
            
           
        </form>
        )
}

export default SlideFormsandInputs;