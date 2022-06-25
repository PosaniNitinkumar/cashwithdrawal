import {Component} from 'react'

import './index.css'

class CashWithdrawal extends Component {
  render() {
    const name = 'Sarah Williams'
    return (
      <div className="background_container">
        <div className="card_container">
          <div className="logo_container">
            <p className="logo">S</p>
            <p className="heading">{name}</p>
          </div>
          <div className="yourbalance_container">
            <p className="yourbalance">Your Balance</p>
            <div>
              <p className="balance">2000</p>
              <p className="inrupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="yourbalance">CHOOSE SUM (IN RUPEES)</p>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
