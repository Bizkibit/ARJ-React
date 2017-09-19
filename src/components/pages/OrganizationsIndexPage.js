import React from 'react'
import {Organization} from '../../utilities/requests'
import {Link} from 'react-router-dom'
import  {
  Row,
  Col,
  Table
} from 'react-materialize'

export class OrganizationsIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organizations: []
    }
  }

  componentWillMount () {
    Organization
    .getAll()
    .then((organizations) => {
      this.setState({organizations})
    })
  }

  render()  {
    let {organizations} = this.state;

    return  (
      <Row className='organization list'>
        <Col s={3} className='push-s1'>
          <Table>
            <thead>
              <th data-field="id"><span>Organizations</span></th>
            </thead>
            <tbody>
              {organizations.map((organization) => {
                return (
                  <tr  key={organization.id}>
                    <td>
                      {organization.name}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    )
  }
}
