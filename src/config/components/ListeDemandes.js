import React from 'react'
import './List.css'
import { useDispatch, useSelector } from 'react-redux'
import { data } from 'react-router-dom'
import { accdemandeAction, deletedemandeAction, refdemandeAction } from '../action';

export default function ListeDemandes() {
  
    const damandes=useSelector(data=>data.demandes)
    const dispatch=useDispatch();

    const delatede=(id)=>{
      dispatch(deletedemandeAction(id))
    }
  return (
   <div className="demandes-container">
  <h5 className='title-demandes'>Les demandes</h5>

  <table className="demandes-table">
    <thead>
      <tr>
        <th>Candidat</th>
        <th>Formation</th>
        <th>Secteur</th>
        <th>Durée</th>
        <th>Statut</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {damandes.map((d) => (
        <tr key={d.id}>
          <td>{d.nomCandidat}</td>
          <td>{d.formation}</td>
          <td>{d.secteur}</td>
          <td>{d.Durée}</td>
          <td>{d.Statut}</td>
          <td>
            {d.Statut === "En attente" && (
              <button className="btn btn-delete" onClick={()=>delatede(d.id)}>Supprimer</button>
            )}

            <button
              className="btn btn-accept"
              onClick={() => dispatch(accdemandeAction(d.id))}
            >
              Acceptée
            </button>

            <button
              className="btn btn-refuse"
              onClick={() => dispatch(refdemandeAction(d.id))}
            >
              Réfusée
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}
