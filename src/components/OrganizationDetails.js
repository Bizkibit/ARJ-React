import React from 'react';
import {Redirect} from 'react-router-dom';

function OrganizationDetails (props) {
  const {id, name, website, applications = [], applicants = [], events = [], reviews = []} = props;

  return (
    <div className='OrganizationDetails'>
      <h2>{name}</h2>
      <h3>Applications</h3>
      <ul className='ApplicationList'>
        {
          applications.map(
            application => (
              <li key={application.id}>
                {application.detail}
              </li>
            )
          )
        }
      </ul>
      <br/>
      <h3>Applicants</h3>
      <ul className="ApplicantList">
        {
          applicants.map(
            applicant => (
              <li key={applicant.id}>
                {applicant.first_name} {applicant.last_name}
              </li>
            )
          )
        }
      </ul>
    </div>
  )
}

export default OrganizationDetails;
