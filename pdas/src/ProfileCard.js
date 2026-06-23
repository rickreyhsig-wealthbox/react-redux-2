function ProfileCard({ title, handle }) {
	console.log(title, handle)
	// const title = props.title;
	// const handle = props.handle;

	// const { title, handle } = props;

	// 3 Destructure in props

  return (
		<div>
			<h3>Title is {title}</h3>
			<p>Handle is {handle}</p>
		</div>
	)
}

export default ProfileCard;