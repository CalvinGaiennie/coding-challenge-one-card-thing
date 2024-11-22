// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar src="/download.jpeg" name="Jonas Schmedtman" />
      <div className="data">
        <Intro text={"Fledgling Developer blah blah blah"} />
        <Skill text="Web Dev" />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img src={props.src} alt="avatar"></img>
      <h1>{props.name}</h1>
    </div>
  );
}
function Intro(props) {
  return <p>{props.text}</p>;
}

function Skill(props) {
  return <div className="skill">{props.text}</div>;
}

function SkillList() {}

export default App;
