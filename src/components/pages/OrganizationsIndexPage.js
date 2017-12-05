import React from 'react';
import {Organization} from '../../utilities/requests';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Link} from 'react-router-dom';
import  {
  Row,
  Col,
  Table
} from 'react-materialize';
import OrganizationList from '../OrganizationList';
import '../../Oip.css';

class OrganizationsIndexPage extends React.Component {
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
      <Row>
        <Col s={3} className="push-s1">
          <Table className="OrganizationsIndexPage">
            <thead>
              <tr>
                <th data-field="name"><h3>Organizations</h3></th>
              </tr>
            </thead>
            <tbody>
              <OrganizationList organizations={organizations}/>
          </tbody>
          </Table>
        </Col>
        <Col s={7} className="push-s1">
          
        </Col>
      </Row>
    )
  }
}



export default OrganizationsIndexPage
