import './index.css'

const UserProfile = props => {
  const {userProfile} = props
  const {imageUrl, name, role} = userProfile

  return (
    <div className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="use-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </div>
  )
}

export default UserProfile
