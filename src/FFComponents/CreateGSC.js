import React from 'react'
import { useHistory } from 'react-router-dom';

export default function CreateGSC() {
  /*

  const [isLoading, setIsLoading] = useState(false)
  const { currentUser } = useAuth()
  
  const handleSubmit = e => {
    setIsLoading(true)
    axios({
      method: 'POST',
      url: `${url}/gsc/`,
      data: {
        name: name,
        ff_email: currentUser.email
      }
    })
    .then(response => {
      setTimeout(refreshPage, 30000)
    })
    .catch(error => {
      console.log(error)
    })
    setIsLoading(false)
  }

  const refreshPage = () => {
      window.location.reload()
  }

  */

  let history = useHistory();
  const goToCreateForm = () => {
    history.push('/create-new-good-single-christian-friend-profile-form')
    window.scrollTo(0,0)
  }

  return (
    <div>
      <div>
        <button id="create-gsc-btn" className="red-button" onClick={goToCreateForm}>
          CREATE A NEW <span className="gscf light italic">GOOD SINGLE CHRISTIAN FRIEND</span> PROFILE
        </button>
      </div>
      <div>
        <button id="create-gscf-btn" className="red-button" onClick={goToCreateForm}>
          Create A New GSCF Profile
        </button>
      </div>
    </div>
  )
}


