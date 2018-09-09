import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Gift extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: '',
      present: '',
    };
  }
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              className="input-person"
              onChange={e => this.setState({ person: e.target.value })}
            />
            <FormGroup>
              <ControlLabel>Present</ControlLabel>
              <FormControl
                className="input-present"
                onChange={e => this.setState({ present: e.target.value })}
              />
            </FormGroup>
          </FormGroup>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove
        </Button>
      </div>
    )
  }
}

export default Gift;