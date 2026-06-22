import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
			<h2>Personal Digital Assistants</h2>
			<ProfileCard title="Alexa" handle="@alexa99" />
			<ProfileCard title="Cortana" handle="@cortana32" />
			<ProfileCard title="Siri" handle="@siri01" />
    </div>
  );
}


export default App;