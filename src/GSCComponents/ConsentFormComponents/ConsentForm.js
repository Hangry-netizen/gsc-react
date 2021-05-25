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
  const [ref1, setRef1] = useState("");
  const [ref2, setRef2] = useState("");
  const [form, setForm] = useState(
    {
      consent: true,
      social_media_profile_link: "",
      preferred_contact_method: "",
      contact_info: "",
      notification_frequency: "",
      what_is_important_to_me: "",
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
    manageReferences();
  }

  const updateGSC = () => {
    setIsLoading(true)

    axios({
      method: 'POST',
      url: `${url}/gscs/${uuid}`,
      data: {
        name: gsc.name,
        gender: gsc.gender,
        year_of_birth: gsc.year_of_birth,
        height: gsc.height,
        languages: gsc.languages,
        nationality: gsc.nationality,
        city: gsc.city,
        country: gsc.country,
        descriptive_words: gsc.descriptive_words,
        mbti: gsc.mbti,
        enneagram: gsc.enneagram,
        disc: gsc.disc,
        strengths_finder: gsc.strengths_finder,
        favorite_topics: gsc.favorite_topics,
        chill_activities: gsc.chill_activities,
        do: gsc.do,
        skills_and_talents: gsc.skills_and_talents,
        growth_and_development: gsc.growth_and_development,
        spiritual_gifts: gsc.spiritual_gifts,
        spiritual_maturity: gsc.spiritual_maturity,
        church_background: gsc.church_background,
        reasons_gscf_makes_a_good_partner: gsc.reasons_gscf_makes_a_good_partner,
        good_match_for_gscf: gsc.good_match_for_gscf,
        moving_to_a_different_town: gsc.moving_to_a_different_town,
        moving_to_a_different_country: gsc.moving_to_a_different_country,
        has_been_married_or_has_kids: gsc.has_been_married_or_has_kids,
        want_to_have_kids: gsc.want_to_have_kids,
        important_info_to_know: gsc.important_info_to_know,
        alias: gsc.alias,
        ff_name: gsc.ff_name,
        ff_email: gsc.ff_email,
        consent: form.consent,
        social_media_profile_link: form.social_media_profile_link, 
        preferred_contact_method: form.preferred_contact_method,
        contact_info: form.contact_info, 
        notification_frequency: form.notification_frequency,
        what_is_important_to_me: form.what_is_important_to_me,
        is_approved: gsc.is_approved, 
        is_active: gsc.is_active,
        last_signed_in: form.last_signed_in
      }
    })
    .then(
      history.push(`/good-single-christian-friend/${gsc.uuid}`)
    )
    .catch(error => {
      console.log(error)
    })
    setIsLoading(false)
  };

  const manageReferences = () => {
    setIsLoading(true)
    if (form.first_referral_name !== "" && form.first_referral_email !== "") {
      axios({
        method: 'POST',
        url: `${url}/references/`,
        data: {
          gsc: gsc.id,
          ref_name: form.first_referral_name,
          ref_email: form.first_referral_email
        }
      })
      .then(response => {
        setRef1(response.data.reference)
      })
      .catch(error => {
        console.log(error)
      })
    }
    if (form.second_referral_name !== "" && form.second_referral_email !== "") {
      axios({
        method: 'POST',
        url: `${url}/references/`,
        data: {
          gsc: gsc.id,
          ref_name: form.second_referral_name,
          ref_email: form.second_referral_name
        }
      })
      .then(response => {
        setRef2(response.data.reference)
      })
      .catch(error => {
        console.log(error)
      })
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (ref1 !== "") {
      const sgMail = require('@sendgrid/mail')
      sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY)
      const reference = {
        to: form.first_referral_email,
        from: 'noreply@matchesup.com',
        template_id: "d-6af1d902e5544dc68eeab4fe99809219",
        dynamic_template_data: {
          gscf_name: gsc.name,
          ref_name: form.first_referral_name,
          ref_url: `www.matchesup.com/good-single-christian-friend/${gsc.uuid}/${ref1.ref_id}/reference/${ref1.ref_name}`
        }
      }
      sgMail
      .send(reference)
      .then(() => {
        console.log('Email sent to ref 1')
      })
      .catch((error) => {
        console.log(error)
      })
    }
  })

  useEffect(() => {
    if (ref2 !== "") {
      const sgMail = require('@sendgrid/mail')
      sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY)
      const reference = {
        to: form.second_referral_email,
        from: 'noreply@matchesup.com',
        template_id: "d-6af1d902e5544dc68eeab4fe99809219",
        dynamic_template_data: {
          gscf_name: gsc.name,
          ref_name: form.second_referral_name,
          ref_url: `www.matchesup.com/good-single-christian-friend/${gsc.uuid}/${ref2.ref_id}/reference${ref2.ref_name}`
        }
      }
      sgMail
      .send(reference)
      .then(() => {
        console.log('Email sent to ref 2')
      })
      .catch((error) => {
        console.log(error)
      })
    }
  })
  
  return (
    <div>
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
        handleChange={handleChange}
        submitForm={submitForm}
        isLoading={isLoading}
      />
    </div>
  )
}
