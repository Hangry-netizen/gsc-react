import React, { useState, useEffect } from 'react';
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
  const [error, setError] = useState()
  const [otherDescWords, setOtherDescWords] = useState("");
  const [otherSpiritualGifts, setOtherSpiritualGifts] = useState("");
  const [descCounter, setDescCounter] = useState(0);
  const [giftCounter, setGiftCounter] = useState(0);
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

  const prevStep = () => {
    setForm({...form, step: form.step - 1});
    window.scrollTo(0,0);
  };
  
  const step3NextStep = e => {
    e.preventDefault()
    setError("")
    if (descCounter === 0) {
      return setError("Please pick 5-7 words that best describe your GSCF")
    }
    if (giftCounter === 0) {
      return setError("Please select 4-8 spiritual gifts/characteristics that are demonstrated in his/her life")
    }
    else {
      setForm({...form, step: form.step + 1});
      window.scrollTo(0,0);
    }
  }

  const nextStep = () => {
    setForm({...form, step: form.step + 1});
    window.scrollTo(0,0);
  };
  
  const handleChange = input => e => {
    setForm({...form, [input]: e.target.value});
  };

  const handleListChange = input => e => {
    if (form[input].includes(e.target.value)) {
      if(form[input].includes(", " + e.target.value)) {
        let removeWord = form[input].replace(", " + e.target.value, "").trim();
        setForm({...form, [input]: removeWord});
        if (input === 'descriptive_words') {
          setDescCounter(descCounter - 1)
        } else if (input === 'spiritual_gifts') {
          setGiftCounter(giftCounter - 1)
        }
      }
      else if (form[input].includes(e.target.value + ",")) {
        let removeWord = form[input].replace(e.target.value + ", ", "").trim();
        setForm({...form, [input]: removeWord});
        if (input === 'descriptive_words') {
          setDescCounter(descCounter - 1)
        } else if (input === 'spiritual_gifts') {
          setGiftCounter(giftCounter - 1)
        }
      }
      else {
        let removeWord = form[input].replace(e.target.value, "").trim();
        setForm({...form, [input]: removeWord});
        if (input === 'descriptive_words') {
          setDescCounter(descCounter - 1)
        } else if (input === 'spiritual_gifts') {
          setGiftCounter(giftCounter - 1)
        }
      }
    }
    else {
      if (form[input] === "") {
        let addWord = `${e.target.value}`;
        setForm({...form, [input]: addWord})
        if (input === 'descriptive_words') {
          setDescCounter(descCounter + 1)
        } else if (input === 'spiritual_gifts') {
          setGiftCounter(giftCounter + 1)
        }
      }
      else {
        let addWord = `${form[input]}, ${e.target.value}`;
        setForm({...form, [input]: addWord})
        if (input === 'descriptive_words') {
          setDescCounter(descCounter + 1)
        } else if (input === 'spiritual_gifts') {
          setGiftCounter(giftCounter + 1)
        }
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
        ff_name: currentUser.displayName,
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
        descriptive_words: otherDescWords !== "" ? `${form.descriptive_words}, ${otherDescWords}` : form.descriptive_words,
        mbti: form.mbti,
        enneagram: form.enneagram,
        disc: form.disc,
        strengths_finder: form.strengths_finder,
        favorite_topics: form.favorite_topics,
        chill_activities: form.chill_activities,
        do: form.do,
        skills_and_talents: form.skills_and_talents,
        growth_and_development: form.growth_and_development,
        spiritual_gifts: otherSpiritualGifts !== "" ? `${form.spiritual_gifts}, ${otherSpiritualGifts}` : form.spiritual_gifts,
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
        alert("Form has been submitted successfully")
        history.push("/my-good-single-christian-friends")
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
                form={form}
                nextStep={nextStep}
                handleChange={handleChange}
                error={error}
              />
            )
          case 2:
            return (
              <FormPage2
                form={form}
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
              />
            )
          case 3:
            return (
              <FormPage3
                form={form}
                prevStep={prevStep}
                step3NextStep={step3NextStep}
                handleChange={handleChange}
                handleListChange={handleListChange}
                otherDescWords={otherDescWords}
                setOtherDescWords={setOtherDescWords}
                otherSpiritualGifts={otherSpiritualGifts}
                setOtherSpiritualGifts={setOtherSpiritualGifts}
                error={error}
              />
            )
          case 4:
            return (
              <FormPage4
                form={form}
                prevStep={prevStep}
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