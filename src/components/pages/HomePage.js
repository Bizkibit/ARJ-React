import React from 'react';
import  {
  Row,
  Col
} from 'react-materialize'

export let HomePage = function(props) {
  let style = {
    backgroundImage: 'url(http://recreationfitness.com/rfwp/wp-content/uploads/2015/04/senior-holding-hands.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '90vh'
  }
  return (
    <Row style={style}>
      <br />
      <Col s={12}>
        <Col s={4} className='s4 push-s4' style={{marginTop: '20vmin'}}>
          <h2 className='center-align'>
            Welcome to the Arj Project
          </h2>
          <p className='center-align'>A Platform to Connect English learners with Senior care homes
          </p>
        </Col>
      </Col>
    </Row>
  )
}
