// export default const Selections = {
//     Sex:["Male","Female","Both"],
//     Race:["Asian","Black","Hispanic","White", "Other","Unknown"],
//     Region:["Amygdala"," Basal Ganglia","Basal Nucleus of Myenert","Calcarine Cortex","Caudal Hippocampus","Cerebellum","Cingulate Gyrus","Inferior Parietal Lobule","Medulla","Midbrain","Middle Frontal Gyrus","Orbital Frontal Cortex","Pons","Rostral Hippocampus","Superior Temporal","Thalamus and Basal Ganglia"],
//     Stain:["Amyloid Beta","Congo Red","GFAP","H&E","Holzers","LFB","LFB-CV","LFB-PAS","Modified Beilschowski","Perls Fe","SV40-IHC","Synuclein","Tau","TDP-43","TG3","Thioflavin","Ubiquitin","Other"]
// }

//  export Sex = ["Male","Female","Both"]

               
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