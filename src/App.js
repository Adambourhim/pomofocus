import Header from "./Header/Header";
import Pomodoro from "./Pomodoro/Pomodoro";
import ShortBreak from "./ShortBreak/Shortbreak";
import LongBreak from "./LongBreak/LongBreak";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Pomodoro} />
        <Route path="/ShortBreak" component={ShortBreak} />
        <Route path="/LongBreak" component={LongBreak} />
      </div>
    </Router>
  );
}

export default App;
