function ProfileCard(props) {
  return (
		<div>
			<h3>Title is {props.title}</h3>
			<p>Handle is {props.handle}</p>
		</div>
	)
}

export default ProfileCard;