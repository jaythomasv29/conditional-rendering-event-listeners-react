import React, { useState } from 'react'
import "./App.css";

function App() {

  const [subscribed, setSubscribed] = useState(false)
  const [alerts, setAlerts] = useState(false)
  console.log('Sub status: ', subscribed)
  console.log('Notifications: ', alerts)
  // const handleSubscribe = (e) => {
  //   console.log(subscribed)
  // console.log(e.target)
  // }
  return (
    <div>
      <h1>Hello</h1>
        <h2>Click to subscribe to my updates</h2>
        <button onClick={ () => setSubscribed(prevStatus => !prevStatus) }>
          { subscribed ? 'Unfollow' : 'Follow' }
        </button>

        <button onClick={ () => setAlerts(prevAlert => !prevAlert) }>
          { alerts? 'Turn off Notifications' : "Set Notifications" }
        </button>

        {subscribed && 
          <h3>Thanks for subscribing, you made it!</h3>
        }

        <h4>You have notifications: { alerts ? 'on' : 'off' }</h4>
    </div>
  );
}

export default App;
