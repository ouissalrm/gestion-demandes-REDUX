export const intisialState = {
    demandes: [
        {
            id: 1,
            nomCandidat: "wissal khrams",
            formation: "Développement Web",
            secteur: "Digital & Intelligence Artificielle",
            Durée: 12,
            Statut: ["En attente", "Acceptée", "Réfusée"]
        },
        {
            id: 2,
            nomCandidat: "amine salah",
            formation: "Data Science",
            secteur: "Data & AI",
            Durée: 6,
            Statut: ["En attente", "Acceptée", "Réfusée"]
        },
        {
            id: 3,
            nomCandidat: "sara benali",
            formation: "Marketing Digital",
            secteur: "Communication & Marketing",
            Durée: 8,
            Statut: ["En attente", "Acceptée", "Réfusée"]
        },
        {
            id: 4,
            nomCandidat: "youssef alami",
            formation: "Cyber Sécurité",
            secteur: "IT & Sécurité",
            Durée: 10,
            Statut: ["En attente", "Acceptée", "Réfusée"]
        }
    ]
};


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