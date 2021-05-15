import React, {useState} from 'react';
import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import FormPage3 from './FormPage3';
import FormPage4 from './FormPage4';
import MatchesUpLogo from "./../../utils/MatchesUpLogo.png";
import { useAuth } from "../../contexts/AuthContext";
import axios from 'axios';
import { url } from "../../App";
import { useHistory } from 'react-router-dom';

export default function CreateGSCForm() {
  let history = useHistory();
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [gsc, setGsc] = useState()
  const [error, setError] = useState()
  const [form, setForm] = useState(
    {
      step: 1,
      name: '',
      email: '',
      gender: '',
      year_of_birth: 0,
      height: '',
      languages: '',
      nationality: '',
      city: '',
      country: '',
      descriptive_words: '',
      mbti: '',
      enneagram: '',
      disc: '',
      strengths_finder: '',
      favorite_topics: '',
      chill_activities: '',
      do: '',
      skills_and_talents: '',
      growth_and_development: '',
      spiritual_gifts: '',
      spiritual_maturity: '',
      church_background: '',
      reasons_gscf_makes_a_good_partner: '',
      good_match_for_gscf: '',
      moving_to_a_different_town: '',
      moving_to_a_different_country: '',
      has_been_married_or_has_kids: '',
      want_to_have_kids: '',
      important_info_to_know: '',
      alias: ''
    }
  );


  const nextStep = () => {
    setForm({...form, step: form.step + 1});
    window.scrollTo(0,0);
  };
  
  const handleChange = input => e => {
    setForm({...form, [input]: e.target.value});
  };

  const handleListChange = input => e => {
    if (form[input].includes(e.target.value)) {
      let removeWord = form[input].replace(", " + e.target.value, "").trim();
      setForm({...form, [input]: removeWord});
    }
    else {
      if (form[input] === "") {
        let addWord = `${e.target.value}`;
        setForm({...form, [input]: addWord})
      }
      else {
        let addWord = `${form[input]}, ${e.target.value}`;
        setForm({...form, [input]: addWord})
      }
    }
  }

  const submitForm = e => {
    e.preventDefault()
    
    setIsLoading(true)
    setError("")
    axios({
      method: 'POST',
      url: `${url}/gscs/`,
      data: {
        ff_email: currentUser.email,
        name: form.name,
        email: form.email,
        gender: form.gender,
        year_of_birth: form.year_of_birth,
        height: form.height,
        languages: form.languages,
        nationality: form.nationality,
        city: form.city,
        country: form.country,
        descriptive_words: form.descriptive_words,
        mbti: form.mbti,
        enneagram: form.enneagram,
        disc: form.disc,
        strengths_finder: form.strengths_finder,
        favorite_topics: form.favorite_topics,
        chill_activities: form.chill_activities,
        do: form.do,
        skills_and_talents: form.skills_and_talents,
        growth_and_development: form.growth_and_development,
        spiritual_gifts: form.spiritual_gifts,
        spiritual_maturity: form.spiritual_maturity,
        church_background: form.church_background,
        reasons_gscf_makes_a_good_partner: form.reasons_gscf_makes_a_good_partner,
        good_match_for_gscf: form.good_match_for_gscf,
        moving_to_a_different_town: form.moving_to_a_different_town,
        moving_to_a_different_country: form.moving_to_a_different_country,
        has_been_married_or_has_kids: form.has_been_married_or_has_kids,
        want_to_have_kids: form.want_to_have_kids,
        important_info_to_know: form.important_info_to_know,
        alias: form.alias
      }
    })
    .then(response => {
      if (response.data.status === "success") {
        setGsc(response.data.gsc)
        sendConsentForm()
        history.push("/my-good-single-christians-friends")
      }
      else {
        setError(response.data.message)
      }
    })
    .catch(error => {
      console.log(error)
    })
    setIsLoading(false)
  }

  const sendConsentForm = () => {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API)
    const msg = {
      to: form.email,
      from: 'noreply@matchesup.com',
      subject: 'MatchesUp: Consent?',
      text: 'my first Sendgrid email',
      html: '<h1>Welcome to Sendgrid</h1>'
    }
    sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  console.log(form)
  return (
    <div>
      <div id="create-gsc-form-header">
        <div id="create-gsc-form-header-logo-title" className="display-flex" style={{alignItems:"center", height: "150px"}}>
          <div className="color-red Essays1743">
            <h3>Tell us about your</h3>
            <h1>Good Single Christian Friend...</h1>
          </div>
          <div>
            <img id="create-gsc-form-header-logo" src={MatchesUpLogo} style={{width: "150px"}} alt="MatchesUpLogo"/>
          </div>
        </div>
      </div>
      {(() => {
        switch (form.step) {
          case 1:
            return (
              <FormPage1
                step={form.step}
                nextStep={nextStep}
                handleChange={handleChange}
              />
            )
          case 2:
            return (
              <FormPage2
                step={form.step}
                nextStep={nextStep}
                handleChange={handleChange}
              />
            )
          case 3:
            return (
              <FormPage3
                step={form.step}
                nextStep={nextStep}
                handleChange={handleChange}
                handleListChange={handleListChange}
              />
            )
          case 4:
            return (
              <FormPage4
                step={form.step}
                handleChange={handleChange}
                submitForm={submitForm}
                isLoading={isLoading}
                error={error}
              />
            )
          default:
        }
      })()}
    </div>
  )
}