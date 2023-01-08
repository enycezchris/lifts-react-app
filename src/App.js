import React from "react";
import { Route } from "react-router-dom";
import Lifts from "./Lifts";
import Home from "./Home";
import StrongLifts from "./StrongLifts";
import StartingStrength from "./StartingStrength";
import C25k from "./C25k";
import SLA from "./SLA";
import SLB from "./SLB";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/lifts" component={Lifts} />
      <Route exact path="/strongLifts" component={StrongLifts} />
      <Route exact path="/strongLiftsA" component={SLA} />
      <Route exact path="/strongLiftsB" component={SLB} />
      <Route exact path="/startingStrength" component={StartingStrength} />
      <Route exact path="/c25k" component={C25k} />
    </div>
  );
}

export default App;
