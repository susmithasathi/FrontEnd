/*import { useState } from "react";

function App() {
  const [plan, setPlan] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");
 

  const upgradePlan = () => {
    if (plan === "") {
      setPlan("Basic");
      setPrice(199);
      setStatus("Active")
    } else if (plan === "Basic") {
      setPlan("Standard");
      setPrice(499);
      setStatus("Active");
    } else if(plan==="Standard"){
      setPlan("Premium");
      setPrice(649);
      setStatus("Active")
    }else {
      alert("You already have the Premium Plan!");
    }
  };

  const pauseSubscription = () => {
    setStatus("Paused");
  };

  const resumeSubscription = () => {
    setStatus("Active");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Netflix Subscription Dashboard</h1>

      <h2>Plan: {plan}</h2>
      <h2>Price: ₹{price}/month</h2>
      <h2>Status: {status}</h2>
     
      <button onClick={upgradePlan}>
        Upgrade Plan
      </button>

      <button
        onClick={pauseSubscription}
        style={{ marginLeft: "10px" }}
      >
        Pause Subscription
      </button>

      <button
        onClick={resumeSubscription}
        style={{ marginLeft: "10px" }}
      >
        Resume Subscription
      </button>

      {status === "Paused" && (
        <h3>❌ Subscription Paused</h3>
      )}

      {status === "Active" && (
        <h3>✅ Enjoy your shows!</h3>
      )}

      {plan === "Premium" && (
        <h3>⭐ Ultra HD Enabled</h3>
      )}
    </div>
  );
}

export default App;*/
import { useState, useEffect } from "react";
function App(){
  const [visits,setVisits]=useState(0);
  const visitProfile=()=>{
    setVisits(visits+1);
  };
  useEffect(()=>{
    document.title=`Visits:${visits}`;
  },[visits]);
  return(
    <>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Profile Visit Tracker</h1>

      <h2>Profile Visits: {visits}</h2>

      <button onClick={visitProfile}>
        Visit Profile
      </button>

      {visits >= 5 && (
        <h3>⭐ Popular Profile</h3>
      )}
    </div>

    </>
  );


}
export default App;
