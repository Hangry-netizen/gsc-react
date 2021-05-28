import React, { useState, useEffect } from 'react';
import MatchesUpLogo from "../../utils/MatchesUpLogo.png";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { url } from '../../App';
import FormBody from './FormBody';
import './ReferenceForm.css';

export default function ReferenceForm() {
  let { uuid, ref_id } = useParams();
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [gsc, setGsc] = useState({});
  const [ref, setRef] = useState("")
  const [form, setForm] = useState(
    {
      reasons_gscf_makes_a_good_partner: "",
      good_match_for_gscf: ""
    });
  
  useEffect(() => {
    axios.get (`${url}/gscs/${uuid}`)
      .then((response) => {
        setGsc(response.data)
      })
      .catch((error) => {
         console.log(error)
      })

    axios.get(`${url}/references/${ref_id}`)
      .then((response) => {
        setRef(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [uuid, ref_id])

  const handleChange = input => e => {
    setForm({...form, [input]: e.target.value});
  };

  const submitForm = e => {
    e.preventDefault()

    setIsLoading(true)

    axios({
      method: 'POST',
      url: `${url}/references/${ref_id}`,
      data: {
        reasons_gscf_makes_a_good_partner: form.reasons_gscf_makes_a_good_partner,
        good_match_for_gscf: form.good_match_for_gscf
      }
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert("Form has been submitted successfully")
        history.push("/")
      }
    })
    .catch(error => {
      console.log(error)
    })
    setIsLoading(false)
  }
  
  return (
    <div>
      <div id="reference-form-header">
        <div id="reference-form-header-logo-title" className="display-flex" style={{alignItems:"center", height: "150px"}}>
          <div className="Essays1743">
            <h1 className="color-red">Welcome to MatchesUp,</h1>
            <h1 className="color-blue">{ref.ref_name}! ;)</h1>
          </div>
          <div>
            <img id="reference-form-header-logo" src={MatchesUpLogo} style={{width: "150px"}} alt="MatchesUpLogo"/>
          </div>
        </div>
      </div>
     <FormBody
      gsc={gsc}
      isLoading={isLoading}
      handleChange={handleChange}
      submitForm={submitForm}
     />
    </div>
  )
}
