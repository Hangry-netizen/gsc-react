import React from 'react';
import { useAuth } from "../contexts/AuthContext";
import { Link } from 'react-router-dom';

export default function ExistingGSCs({ existingGSCs }) {
  const { currentUser } = useAuth()

  return (
    <div>
      {
        existingGSCs.map((existingGSC, i) => {
          if (existingGSC.ff_email === currentUser.email) {
            if (existingGSC.is_approved === false) {
              return (
                <div key={i}>
                  <button className="gsc-profile-button color-red Essays1743">{existingGSC.name}</button>
                  <div id="awaiting-txt" className="color-red font-size-small">Awaiting consent and screening</div>
                </div>
              )
            } 
            else {
              return (
                <div key={i}>
                  <Link to={`/my-good-single-christian-friend/${existingGSC.uuid}`}>
                    <button id="existing-gsc-btn" className="gsc-profile-button color-red Essays1743" key={existingGSC.id}>{existingGSC.name}</button>
                  </Link>
                </div>
              )
            }
          } 
          else {
            return null
          }
        })
      }
    </div>
  )
}
