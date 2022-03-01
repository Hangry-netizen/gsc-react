import React, { useState, useEffect } from 'react';
import MatchesUpLogo from "../../utils/MatchesUpLogo.png";
import { useParams, useHistory } from 'react-router-dom';
import FormBody from "./FormBody";
import axios from 'axios';
import { url } from '../../App';

import './ConsentForm.css'

export default function ConsentForm() {
  let { uuid } = useParams();
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [gsc, setGsc] = useState({});
  const [error, setError] = useState("")
  const [form, setForm] = useState(
    {
      year_of_birth: 0,
      height: "",
      languages: "",
      church_background: "",
      nationality: "",
      city: "",
      country: "",
      moving_to_a_different_town: 50,
      moving_to_a_different_country: 50,
      social_media_profile_link: "",
      preferred_contact_method: "",
      contact_info: "",
      notification_frequency: "",
      what_is_important_to_me: "",
      mbti: "",
      enneagram: "",
      disc: "",
      strengths_finder: "",
      first_referral_name: "",
      first_referral_email: "",
      second_referral_name: "",
      second_referral_email: ""
    });
  
  useEffect(() => {
    axios.get (`${url}/gscs/${uuid}`)
      .then((response) => {
        setGsc(response.data)
      })
      .catch((error) => {
         console.log(error)
      })
  }, [uuid])

  const handleChange = input => e => {
    setForm({...form, [input]: e.target.value});
  };

  const submitForm = e => {
    e.preventDefault()
    updateGSC();
  }

  const updateGSC = () => {
    setIsLoading(true)

    axios({
      method: 'POST',
      url: `${url}/gscs/consent/${uuid}`,
      data: {
        consent: true,
        year_of_birth: form.year_of_birth,
        height: form.height.trim(),
        languages: form.languages.trim(),
        church_background: form.church_background.trim(),
        nationality: form.nationality.trim(),
        city: form.city.trim(),
        country: form.country.trim(),
        moving_to_a_different_town: form.moving_to_a_different_town,
        moving_to_a_different_country: form.moving_to_a_different_country,
        social_media_profile_link: form.social_media_profile_link.trim(), 
        preferred_contact_method: form.preferred_contact_method.trim(),
        contact_info: form.contact_info.trim(), 
        notification_frequency: form.notification_frequency,
        what_is_important_to_me: form.what_is_important_to_me.trim(),
        mbti: form.mbti.trim(),
        enneagram: form.enneagram.trim(),
        disc: form.disc.trim(),
        strengths_finder: form.strengths_finder.trim()
      }
    })
    .then((response) => {
      if (response.data.status === "success") {
        manageReferences()
      }
    })
    .catch(error => {
      setError(error)
    })
    setIsLoading(false)
  };

  const manageReferences = () => {
    setIsLoading(true)
    setError("")
    if (form.first_referral_name !== "" && form.first_referral_email !== "") {
      axios({
        method: 'POST',
        url: `${url}/references/`,
        data: {
          gsc_id: gsc.id,
          ref_name: form.first_referral_name.trim(),
          ref_email: form.first_referral_email.trim()
        }
      })
      .catch(error => {
        setError(error)
      })
    }
    if (form.second_referral_name !== "" && form.second_referral_email !== "") {
      axios({
        method: 'POST',
        url: `${url}/references/`,
        data: {
          gsc_id: gsc.id,
          ref_name: form.second_referral_name.trim(),
          ref_email: form.second_referral_email.trim()
        }
      })
      .catch(error => {
        setError(error)
      })
    }
    setIsLoading(false)
    alert("Form has been submitted successfully")
    history.push(`/good-single-christian-friend/${gsc.uuid}`)
  }
  
  return (
    <div>
      {
        gsc.id
        ?
        <>
          <div id="consent-form-header">
            <div id="consent-form-header-logo-title" className="display-flex" style={{alignItems:"center", height: "150px"}}>
              <div className="Essays1743">
                <h1 className="color-red">Welcome to MatchesUp,</h1>
                <h1 className="color-blue">{gsc.name}! ;)</h1>
              </div>
              <div>
                <img id="consent-form-header-logo" src={MatchesUpLogo} style={{width: "150px"}} alt="MatchesUpLogo"/>
              </div>
            </div>
          </div>
          <FormBody
            form={form}
            handleChange={handleChange}
            submitForm={submitForm}
            isLoading={isLoading}
            error={error}
          />
        </>
        :
        null
      }
      
    </div>
  )
}
