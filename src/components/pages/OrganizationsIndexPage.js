import React from 'react'
import {Organization} from '../../utilities/requests'

export class OrganizationsIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organizations: []
    }
  }

  componentDidMount () {
    Organization
    .getAll()
    .then((organizations) => {
      this.setState({organizations})
    })
  }

  render()  {
    let {organizations} = this.state;

    return  (
      <div className='organization list'>
        <h1>Organizations</h1>
        <ul>
          {organizations.map((organization) => {
            return (
              <li key={organization.id}>
                {organization.name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
