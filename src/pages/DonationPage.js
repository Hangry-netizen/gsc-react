import React from 'react';
import Malaysia from "../DonationComponents/Malaysia";
import Singapore from "../DonationComponents/Singapore";
import Philippines from '../DonationComponents/Philippines';
import Others from "../DonationComponents/Others";
import "../DonationComponents/DonationPage.css";

export default function DonationPage() {
  return (
    <span id="donation-page-container" className="bg-beach">
      <div id="donation-info" className="color-red padding-left">DONATION INFO</div>
      <p id="donation-p" className="color-blue">
        To cover our cost of running this service, we ask for a small donation of a minimum of RM5 / SGD3 / PHP50 / THB40 for each GSC profile created. Click for transfer details for your country.
      </p>
      <p id="donation-p" className="color-blue">
        If we do have surplus, donations will be channeled to fund similar ventures.
        <br />Thank you for helping us maintain this service for the body of Christ!
      </p>
      <p id="donation-p" className="color-blue">If you want to send us a donation but are unable to do so using any of the means listed here, email us at matchesup@gmail.com.</p>
      <div id="countries">
        <Malaysia/>
        <Singapore />
        <Philippines />
        <Others />
      </div>
    </span>
  )
}
