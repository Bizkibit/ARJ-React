import React from 'react';
import OrganizationSummary from './OrganizationSummary';

function OrganizationList (props) {
  const {organizations = []} = props;

  return (
    <div className='QuestionList'>
      {
        organizations.map(
          organization => <OrganizationSummary key={organization.id} {...organization} />
        )
      }
    </div>
  );
}

export default OrganizationList;
