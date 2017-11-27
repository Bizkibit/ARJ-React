import React, {Component} from 'react';
import {Organization} from '../../utilities/requests';
import OrganizationDetails from '../OrganizationDetails';

class OrganizationShowPage extends Component {
  constructor(props)  {
    super(props);

    this.state =  {
      organizations: {}
    };
  }

  componentDidMount () {
  const {id} = this.props.match.params;

    Organization
      .get(id)
      .then(question => this.setState({question}));
  }
  render()  {
    return (
      <div className='OrganizationShowPage'>
        <OrganizationDetails {...this.state.question} />
      </div>
    );
  }
}

export default OrganizationShowPage;
