function ProfileCard({ title, handle, image }) {
	console.log(title, handle, image)
	// const title = props.title;
	// const handle = props.handle;
	// const image = props.image;

	// const { title, handle, image } = props;

	// 3 Destructure in props

  return (
		<div>
			<h3>Title is {title}</h3>
			<p>Handle is {handle}</p>
			<img src={image} alt={title} />
		</div>
	)
}

export default ProfileCard;