export const AddDemandeAction=(newdemande)=>{
   return {type:"addemnde" ,payload:newdemande};
}
export const accdemandeAction=(id)=>{
    return {type:"acceptée",payload:id}
}
export const refdemandeAction=(id)=>{
    return {type:"Refusée",payload:id}
}
