export const intisialState = {
    demandes: [
        {
            id: 1,
            nomCandidat: "wissal khrams",
            formation: "Développement Web",
            secteur: "Digital & Intelligence Artificielle",
            Durée: 12,
            Statut: "En attente",
        },
        {
            id: 2,
            nomCandidat: "amine salah",
            formation: "Data Science",
            secteur: "Data & AI",
            Durée: 6,
            Statut: "Acceptée",
        },
        {
            id: 3,
            nomCandidat: "sara benali",
            formation: "Marketing Digital",
            secteur: "Communication & Marketing",
            Durée: 8,
            Statut:  "Acceptée",
        },
        {
            id: 4,
            nomCandidat: "youssef alami",
            formation: "Cyber Sécurité",
            secteur: "IT & Sécurité",
            Durée: 10,
            Statut:   "En attente",
        }
    ]
};


export const reducer=(state=intisialState,action)=>{
    switch(action.type){
        case 'addemnde':
            return {...state,demandes:[...state.demandes,action.payload]}
        case 'acceptée':
           return {...state,demandes: state.demandes.map((d) =>
            d.id === action.payload ? { ...d, Statut: "Acceptée" } : d)
        }

        case 'Refusée':
         return {...state,demandes: state.demandes.map((d) =>
          d.id === action.payload ? { ...d, Statut: "Refusée" } : d)
           }
        case 'deletede':
            return {...state,demandes:state.demandes.filter((d)=>d.id!==parseInt(action.payload))}


        default:
            return state;
        
    }


}