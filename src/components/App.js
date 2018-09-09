import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Gift from './Gift';
import { max_number } from '../helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifts: []
    }
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = gifts.map(gift => gift.id);

    this.setState({
      gifts: [
        ...gifts,
        { id: max_number(ids) + 1 }
      ]
    });
  }

  removeGift = (id) => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({
      gifts: gifts
    })
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <Button
          className="btn-add"
          onClick={this.addGift}
        >Add Gift</Button>
        <div className="gift-list">
          {
            this.state.gifts.map(gift => (
              <Gift
                key={gift.id}
                gift={gift}
                removeGift={this.removeGift}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default App;