import React from 'react';
import OrganizationSummary from './OrganizationSummary';

function OrganizationList (props) {
  const {organizations = []} = props;

  return (
    <div className='QuestionList'>
      {
        organizations.map(
          organization => <tr><OrganizationSummary key={organization.id} {...organization} /></tr>
        )
      }
    </div>
  );
}

export default OrganizationList;
