import React, {Component} from 'react';
import {Organization} from '../../utilities/requests';
import OrganizationForm from '../OrganizationForm';

class OrganizationNewPage extends Component {
  constructor (props) {
    super(props);

    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion (organization) {
    Organization
      .post(organization)
      .then(({id}) => this.props.history.push(`/organizations/${id}`));
  }

  render () {
    return (
      <div className='OrganizationNewPage'>
        <h2>New Organization</h2>
        <OrganizationForm onSubmit={this.createOrganizatin} />
      </div>
    );
  }
}

export default OrganizationNewPage;
