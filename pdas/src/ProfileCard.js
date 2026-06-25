function ProfileCard({ title, handle, image }) {
	// console.log(title, handle, image)

  return (
		<div>
			<h3>Title is {title}</h3>
			<p>Handle is {handle}</p>
			<img src={image} alt={title} />
		</div>
	)
}

export default ProfileCard;