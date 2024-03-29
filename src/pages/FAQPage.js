import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "../components/FAQPage.css"

export default function FAQPage() {
  const scrollToTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <div>
      <h1 className="text-align-center color-red" style={{margin:"60px"}}>Frequently Asked Questions (FAQs)</h1>
      <div id="faq-links-container" style={{display:"flex", justifyContent:"space-between", width:"800px", margin:"0 auto 30px", alignItems:"center"}}>
        <div>
          <Link to="#faq-gscs-container" className="color-blue underline">
            <button className="red-button faq-page-buttons">For GSCs</button>
          </Link>
        </div>
        <div>
          <Link to="#faq-ffs-container" className="color-blue underline">
            <button className="red-button faq-page-buttons">For FFs</button>
          </Link>
        </div>
      </div>
      <div id="faq-gscs-container" className="bg-blue" style={{width:"100%", padding:"30px"}}>
        <div id="faq-content-container" className="color-red" style={{width: "800px", margin: "auto"}}>
          <h3 className="color-beach" style={{margin:"50px 0"}}>QUESTIONS FOR THE GOOD SINGLE CHRISTIANS (GSCs):</h3>
          <h4 className="text-align-left">Q: What if I don’t like what my ‘Faithful Friend’ (FF) wrote about me in my profile?</h4>
          <p className="color-beach text-align-justify">A: Don’t worry! As the GSC you have complete authority over what is published about you! When the FF submits their answers about you, it first goes to you, to edit or approve their answers before anything goes live on the site. This is also true of the two other friend commendations submitted to your profile. It’s important the profile represents you accurately, so seriously consider your friend’s answers before adjusting them.</p>
          <h4 className="text-align-left">Q: Is my information anonymous? Who will see my real name and personal contact information?</h4>
          <p className="color-beach text-align-justify">A: Yes, MatchesUp is specifically and uniquely designed to be anonymous. To protect your privacy, you will be able to choose an alias to be known by. Your real name will only be made known when there’s interest in making a match. There are two ways your real name can be known: If you ‘say hi’ someone’s profile, the name and contact info you provided in your account, will be added to their “people who said hi to me” list, as a gesture of interest, so that they can reach out to you :) Hopefully you’ll get a match!  Also, if someone ‘says hi’ to you, your real name (but no contact info) will be added to their “People I said hi to” list, and their name & contact info to your “people that said hi to me” list. If you decide to make contact, click ‘contacted’ to keep track of who you have taken initiative with. You can also click “remove” which will remove your name and profile from their list.</p>
          <h4 className="text-align-left">Q: Why aren’t profile pictures a part of the profiles page?</h4>
          <p className="color-beach text-align-justify">A: While physical attraction is important, we wanted to provide the opportunity to look deeper into the core of the person before you are caught up by their physical appearance. Afterall, we will all gain wrinkles and flabby skin as we age, but the core of a person often remains the same. They say the best marriage partners are your best friends (usually not chosen for appearance!) So choose a profile that matches you well in personality and interests first, and then you can share your pics after you start to get to know one another. That said, any user that wishes to offer access to their photos, can do so by including a link in their profile to a social media account or perhaps a google doc with their pic on it.</p>
          <h4 className="text-align-left">Q: What if I want to know more about the person before I click ‘say hi’?</h4>
          <p className="color-beach text-align-justify">A: Clicking ‘say hi’ is somewhat of a risk - we get it. You’re putting your heart out there. But remember, it’s simply saying, “Hey I 'said hi' to you, let’s talk more” - you’re not committing to dating or anything! The ‘say hi’ is just the first step. That said, there is a way to find out a bit more if you’re clever. Once you click ‘say hi’ on the profile, the person’s real name will appear in your “People I said hi to” list. This is your time to search them up on social media! That said… there may be 20 Jaime Tan’s and 15 Marcus Garcia’s out there, so good luck. Trust your gut - if the profile suits you, it’s probably worth a ‘say hi’. (P.S. And don’t think you can just 'say hi' to everyone to find out their real name… you’re only allowed limited 'say hi' per month, so don’t waste them ;)</p>
          <h4 className="text-align-left">Q: What if I am not interested in someone who said hi to me?</h4>
          <p className="color-beach text-align-justify">A: Good news! You can simply click ‘remove’ beside their name, on your “People who said hi to me” list, and your profile will automatically be removed from their “People I said hi to" list, so they’ll get the message without confrontation. However, be sure to read our article titled, “What if I receive a ‘say hi’ from someone I know, and I am not interested in?” in our <Link to="/resources" onClick={scrollToTop} className="faq-links color-red" style={{textDecoration:"underline"}}>Resources</Link> section (it has some great tips on how to be honoring in all your actions - even when rejecting a 'say hi').</p>
          <h4 className="text-align-left">Q: What if I said hi, and the person contacts me, but they don’t seem ‘above board’ in their character or intentions?</h4>
          <p className="color-beach text-align-justify">A: We do our best to filter profile submissions to ensure they are sincerely Jesus-loving Christians, but if a bad one slips through, please go immediately to the “HELLO” page and click the ‘report’ button beside their name. Our screening team will contact you for more information, and send a written concern to the other person’s Faithful Friend to hold them accountable to their behavior. If deemed necessary, we will remove their access to the MatchesUp site. It’s important that you have good boundaries to protect yourself (i.e don’t give out your home address, and share additional personal information only as trust is earned over time).</p>
        </div>
      </div>
      <div id="faq-ffs-container" style={{width:"100%", padding:"30px"}}>
        <div id="faq-content-container" className="color-red" style={{width: "800px", margin: "auto"}}>
          <h3 className="color-blue" style={{margin:"50px 0"}}>QUESTIONS FOR THE FAITHFUL FRIENDS (FFs):</h3>
          <h4 className="text-align-left">Q: What if I make a profile for my Good Single Christian Friend (GSCF), and they decide they don’t want to be a part of the site?</h4>
          <p className="color-blue text-align-justify">A: We all want to see our Good Single Christian Friends matched up, but not everyone is ready to take the leap. Rest assured, nothing you create for them will be published without their consent. Their profile can remain ‘pending’ until a later date when they are interested in giving it a try, or you can cancel your Faithful Friend account at any time. We recommend that before creating the profile for your GSCF, you send them the website link, so they can read through the FAQs and feel more comfortable about the process. It’s also important that the email address you use to sign up for them, is their preferred email address to receive notifications about ‘say hi’ etc (i.e. not an office email ;) as this cannot be changed later on.</p>
          <h4 className="text-align-left">Q: As a Faithful Friend, will my name or personal information be published anywhere?</h4>
          <p className="color-blue text-align-justify">A: Nope. It’s private between you and your GSCF. People of the opposite gender will just see the profile information, nothing about you, or about the two other friends that have the option of sending in a commendation.</p>
          <h4 className="text-align-left">Q: Is there any cost to use this site, or any hidden fees?</h4>
          <p className="color-blue text-align-justify">A: Nope. It’s completely free! But we do recommend a small love-offering to help cover our web-hosting fees. This site was created by the MatchesUp team as a gift of love to the body of Christ to encourage Jesus-loving people to find good partners, get married, and raise the next generation of believers. If it’s been a blessing to you, or to the people you care for, we appreciate your support. You can donate <Link to="/donation-info" onClick={scrollToTop} className="faq-links color-red" style={{textDecoration:"underline"}}>here</Link>.</p>
          <h4 className="text-align-left">Q: Is there an age limit for my GSCF?</h4>
          <p className="color-blue text-align-justify">A: We accept GSCFs from 21-80 years old.</p>
          <h4 className="text-align-left">Q: Can I be a FF if I myself am single? </h4>
          <p className="color-blue text-align-justify">A: Yes you can! That’s actually a very fun way to journey together - writing up profiles for one another. We do recommend only being FF to GSCFs of the same gender though, because then you can both view the database of the opposite gender together… if you are an FF to a GSCF of the opposite gender you will be able to view all the other singles of your own gender, which provides challenges of comparison and ‘insider info’ which could compromise the desired anonymity of users. If you are single, protect your heart and your GSCF’s heart, by only offering to be a FF to singles of your own gender.</p>
          <h4 className="text-align-left">Q: What if a bunch of friends want to create a profile for our GSCF together, not just one single Faithful Friend?</h4>
          <p className="color-blue text-align-justify">A: It’s way more fun together, right?! Go for it, but do choose one person to ‘be responsible’ for the submission… if someone complains about your GSCF, the MatchesUp team will contact the assigned Faithful Friend to follow up with the GSCF and handle any issues related to the investigation.</p>
          <h4 className="text-align-left">Q: Is there a limit as to how many friends I can sign up?</h4>
          <p className="color-blue text-align-justify">A: Nope! Sign up as many as you want! The more the merrier! When you login to your Faithful Friend account, you will see the list of all the names of your GSCF’s that you have created profiles for. Just remember that for each friend you sign up, you are choosing to vouch for them and assist them if any matches go sour that require investigation.</p>
        </div>
      </div>
    </div>
  )
}
