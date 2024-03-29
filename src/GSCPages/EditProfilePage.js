import React, { useState, useEffect } from 'react';
import { url } from '../App';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import EditProfile from '../GSCComponents/EditProfileComponents/EditProfile';
import EditRef from '../GSCComponents/EditProfileComponents/EditRef';
import '../GSCComponents/EditProfileComponents/EditProfilePage.css';

export default function EditProfilePage() {
  const { uuid } = useParams();
  let history = useHistory();
  const [form, setForm] = useState({});
  const [currentAlias, setCurrentAlias] = useState("");
  const [references, setReferences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gscs, setGscs] = useState([]);
  const [existingAlias] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get (`${url}/gscs/${uuid}`)
      .then((response) => {
        setForm(response.data);
        setCurrentAlias(response.data.alias);
      })
      .catch((error) => {
        console.log(error)
      })
    axios.get (`${url}/gscs/`)
      .then((response) => {
        setGscs(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    axios.get(`${url}/references/gsc/${uuid}`)
      .then((response) => {
        setReferences(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [uuid])

  useEffect(() => {
    gscs.map((gsc) => {
      return existingAlias.push(gsc.alias);
    })
  })

  const handleAliasChange = input => e => {
    setError("")
    if (existingAlias.includes(e.target.value.trim()) && currentAlias !== e.target.value.trim()) {
      setError("Sorry, this alias is already taken. Please choose another alias.")
    }
    setForm({...form, [input]: e.target.value});
  }

  const submitEdit = e => {
    e.preventDefault()
    setIsLoading(true)

    axios({
      method: 'POST',
      url: `${url}/gscs/${form.uuid}`,
      data: {
        name: form.name.trim(), 
        year_of_birth: form.year_of_birth,
        height: form.height.trim(),
        languages: form.languages.trim(),
        nationality: form.nationality.trim(),
        city: form.city.trim(),
        country: form.country.trim(),
        descriptive_words: form.descriptive_words.trim(),
        mbti: form.mbti.trim(),
        enneagram: form.enneagram.trim(),
        disc: form.disc.trim(),
        strengths_finder: form.strengths_finder.trim(),
        favorite_topics: form.favorite_topics.trim(),
        chill_activities: form.chill_activities.trim(),
        do: form.do.trim(),
        skills_and_talents: form.skills_and_talents.trim(),
        growth_and_development: form.growth_and_development.trim(),
        spiritual_gifts: form.spiritual_gifts.trim(),
        spiritual_maturity: form.spiritual_maturity.trim(),
        church_background: form.church_background.trim(),
        reasons_gscf_makes_a_good_partner: form.reasons_gscf_makes_a_good_partner.trim(),
        good_match_for_gscf: form.good_match_for_gscf.trim(),
        moving_to_a_different_town: form.moving_to_a_different_town,
        moving_to_a_different_country: form.moving_to_a_different_country,
        has_been_married_or_has_kids: form.has_been_married_or_has_kids.trim(),
        want_to_have_kids: form.want_to_have_kids.trim(),
        important_info_to_know: form.important_info_to_know.trim(),
        alias: form.alias.trim(),
        consent: form.consent,
        social_media_profile_link: form.social_media_profile_link.trim(), 
        preferred_contact_method: form.preferred_contact_method.trim(), 
        contact_info: form.contact_info.trim(), 
        notification_frequency: form.notification_frequency,
        what_is_important_to_me: form.what_is_important_to_me.trim(),
        ff_name: form.ff_name,
        ff_email: form.ff_email,
        is_approved: form.is_approved,
        is_active: form.is_active,
        monthly_hellos: form.monthly_hellos
      }
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert("You've successfully updated your profile");
        backToTop();
      } else {
        alert("Failed to update your profile");
      }
    })
    .catch(error => {
      console.log(error);
    })
    setIsLoading(false)
  };

  const handleChange = input => e => {
    setForm({...form, [input]: e.target.value});
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behaviour: "smooth"
    })
  };

  const backToProfile = () => {
    history.push(`/good-single-christian-friend/${form.uuid}`)
    window.scrollTo(0,0)
  }

  return (
    <div id="edit-profile-container">
      <div className="text-align-left">
        <button className="red-button" onClick={backToProfile} style={{padding:"5px 15px", borderRadius:"5px"}}>back</button>
      </div>
      {
        form && references 
        ?
        <>
          <EditProfile
            form={form}
            submitEdit={submitEdit}
            handleChange={handleChange}
            handleAliasChange={handleAliasChange}
            isLoading={isLoading}
            error={error}
          />
          {
            references.map((reference, i) => {
              return (
                <EditRef key={i} reference={reference} />
              )
            })
          }
          <br />
          <div className="text-align-right" onClick={backToTop}>
            <button className="color-red underline" style={{border:"none", background:"none"}}>back to top</button>
          </div>
        </>
        :
        <div>Loading...</div>
      }
    </div>
  )
}
