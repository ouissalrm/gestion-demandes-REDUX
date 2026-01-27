import React from 'react'
import { useSelector } from 'react-redux'
import { data } from 'react-router-dom'

export default function ListeDemandes() {
    const damandes=useSelector(data=>data.demandes)
  return (
    <div>
      <h5>les demandes</h5>
     <table style={{width:"50%",margin:"auto"}}>
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
        {damandes.map((d)=>(
            <tr>
            <td>{d.id} </td>
            <td>{d.formation} </td>
            <td>{d.secteur} </td>
            <td>{d.Durée} </td>
            <td>{d.Statut[0]} </td>
            <td>{d.Statut[1]} {d.Statut[2]} </td>
        </tr>
        ))}
        
       </tbody>
     </table>
    </div>
  )
}
