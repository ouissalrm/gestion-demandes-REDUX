export const AddDemandeAction=(newdemande)=>{
   return {type:"addemnde" ,payload:newdemande};
}
export const UpdatedemandeAction=(uppdemande)=>{
    return {type:"Updemande",payload:uppdemande}
}
export const deldemande=(id)=>{
    return {type:"dropdemande",payload:id}
}