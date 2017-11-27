import React from 'react';
import { Link } from 'react-router-dom';

function OrganizationSummary (props) {
  const {id, name} = props;
  return (
    <div className='OrganizationSummary'>
      <Link to={`/organizations/${id}`}>{name}</Link>
    </div>
  );
};

export default OrganizationSummary;
