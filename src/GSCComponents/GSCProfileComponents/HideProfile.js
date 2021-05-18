import React from 'react';

export default function HideProfile({ gsc }) {
  return (
    <div>
      {
        gsc.is_active 
        ?
        <div>
          <button className="gsc-profile-page-btn color-red">HIDE MY PROFILE</button>
        </div>
        :
        <div>
          <button className="gsc-profile-page-btn color-red">HIDE MY PROFILE</button>
        </div>
      }
    </div>
  )
}
