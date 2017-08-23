import React from 'react'
import {Organization} from '../utilities/requests'

export class App extends React.Component {
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
    // let orgs = organizations.map((organization) => {
    //   return (<li key={organization.id}>{organization.name}</li>)
    // })

    return  (
      <div className='organization list'>
        <h1>Organizations</h1>
        <ul>
          {organizations.map((organization) => {
            return (<li key={organization.id}>{organization.name}</li>)
          })}
        </ul>
      </div>
    )
  }
}
