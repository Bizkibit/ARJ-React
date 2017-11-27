import React, {Component} from 'react';
import {Organization} from '../../utilities/requests';
import OrganizationDetails from '../OrganizationDetails';

class OrganizationShowPage extends Component {
  constructor(props)  {
    super(props);

    this.state =  {
      organization: {}
    };
  }

  componentDidMount () {
  const {id} = this.props.match.params;

    Organization
      .get(id)
      .then(organization => this.setState({organization}));
  }
  render()  {
    return (
      <div className='OrganizationShowPage'>
        <OrganizationDetails {...this.state.organization} />
      </div>
    );
  }
}

export default OrganizationShowPage;
