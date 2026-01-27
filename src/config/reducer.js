export const intisialState={
    demandes:[{
        id:1,
        nomCandidat:"wissal khrams",
        formation:"Développement Web",
        secteur:"Diital & Intelligence Artificielle",
        Durée:12,
        Statut:["En attente","Aceeptetée","Réfusée"]
    }
    ]
}

export const reducer=(state=intisialState,action)=>{
    switch(action.type){
        case 'addemnde':
            return {...state,demandes:[...state.demandes,action.payload]}
        case 'Updemande':
            const demande=state.demandes.find((d)=>d.id===parseInt(action.payload.id))
            if(demande){
                demande.nomCandidat=action.payload.nomCandidat
                demande.formation=action.payload.formation
                demande.secteur=action.payload.secteur
                demande.Durée=action.payload.Durée
                demande.Statut=action.payload.Statut
            }
            return state;
        case 'dropdemande':
            return {...state,demandes:[{...state.demandes.filter((d)=>d.id!==parseInt(action.payload.id))}]}
        default:
            return state;
        
    }


}