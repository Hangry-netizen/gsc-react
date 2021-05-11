import React, {useState} from 'react';
import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import FormPage3 from './FormPage3';
import FormPage4 from './FormPage4';
import MatchesUpLogo from "./../../utils/MatchesUpLogo.png"

export default function CreateGSCForm() {
  const [form, setForm] = useState(
    {
      step: 1,
      name: '',
      email: '',
      gender: '',
      year_of_birth: '',
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
    window.scrollTo(0,0)
  }

  const prevStep = () => {
    setForm({...form, step: form.step - 1});
    window.scrollTo(0,0)
  }
  
  const handleChange = input => e => {
    setForm({...form, [input]: e.target.value});
    console.log(form)
  }

  const handleListChange = input => e => {
    setForm({...form, [input]: `${form.[input]} ${e.target.value}`});
    console.log(form)
  }

  return (
    <div>
      <div id="create-gsc-form-header">
        <div className="display-flex" style={{alignItems:"center", height: "150px"}}>
          <div className="color-red Essays1743">
            <h3>Tell us about your</h3>
            <h1>Good Single Christian Friend...</h1>
          </div>
          <div>
            <img src={MatchesUpLogo} style={{width: "150px"}} alt="MatchesUpLogo"/>
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
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
              />
            )
          case 3:
            return (
              <FormPage3
                step={form.step}
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
                handleListChange={handleListChange}
              />
            )
          case 4:
            return (
              <FormPage4
                step={form.step}
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
              />
            )
          default:
            
        }
      })()}
    </div>
  )
}