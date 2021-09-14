import './App.sass';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

import checkmark from './assets/icon-check.svg';
import sliderArrow from './assets/icon-slider.svg';

function App() {
  return (
    <div className="app">

      <div className="titleContainer">
        <h1 className="title">Simple, traffic-based pricing</h1>
        <p className="subTitle">Sign-up for our 30-day trial. No credit card required.</p>
      </div>

      <div className="cardContainer">

        <div className="topContainer">
          <h1 className="pageViews">100K PAGEVIEWS</h1>
          <Slider
            min={1}
            max={5}
            defaultValue={3}
            trackStyle={[{ backgroundColor: '#a5f3eb', height: '8px' }]}
            handleStyle={[{ backgroundColor: '#10d5c2', height: '40px', width: '40px', marginTop: '-15px', border: 'none', backgroundImage: `url(${sliderArrow})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', cursor: 'pointer', boxShadow: '0px 15px 25px 8px #a5f3eb' }]}
            railStyle={{ height: '8px' }}
          />
          <div className="priceContainer">
            <h1 className="price">$16.00</h1>
            <p className="month">/ month</p>
          </div>
          <div className="toggleContainer">
            <span>Monthly Billing</span>
            <Toggle
              className="toggle"
              icons={false}
            />
            <span>Yearly Billing</span>
          </div>
          <div className="borderLine"></div>
        </div>

        <div className="bottomContainer">
          <div className="checkmark">
            <p><img src={checkmark} alt="checkmark" />Unlimited websites</p>
            <p><img src={checkmark} alt="checkmark" />100% data ownership</p>
            <p><img src={checkmark} alt="checkmark" />Email reports</p>
          </div>
          <button className="startTrial">Start my trial</button>
        </div>

      </div>

    </div>
  );
}

export default App;
