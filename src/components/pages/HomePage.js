import React from 'react';
import  {
  Row,
  Col
} from 'react-materialize'

export let HomePage = function(props) {
  let style = {
    backgroundImage: 'url(http://recreationfitness.com/rfwp/wp-content/uploads/2015/04/senior-holding-hands.jpg)',
    backgroundRepeat: 'no-repeat',
    height: '80vmin',
    backgroundSize: 'cover'
  }
  return (
    <Row>
      <br />
      <Col s={12} style={style}>
        <Col s={4} className='s4 push-s4' style={{marginTop: '200px'}}>
          <h2 className='center-align'>
            Welcome to Arj Project
          </h2>
          <p className='center-align'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Col>
      </Col>
    </Row>
  )
}
