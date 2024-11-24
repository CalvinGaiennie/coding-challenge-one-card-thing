// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar src="/download.jpeg" />
      <div className="data">
        <Intro
          name="Jonas Schmedtman"
          text={"Fledgling Developer blah blah blah"}
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.src} alt={props.name}></img>
    </div>
  );
}
function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML/CSS" emoji="💪" color="orangered" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
