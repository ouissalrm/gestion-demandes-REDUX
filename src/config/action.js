export const AddDemandeAction=(newdemande)=>{
   return {type:"addemnde" ,payload:newdemande};
}
export const accdemandeAction=(id)=>{
    return {type:"acceptée",payload:id}
}
export const refdemandeAction=(id)=>{
    return {type:"Refusée",payload:id}
}
export const deletedemandeAction=(id)=>{
    return {type:"deletede",payload:id}
}
