import {useAuth} from '../../Context/AuthContext'
import './Profile.css'

const Profile = () => {
    const {user} = useAuth()
    const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
    return(
       <div className='ProfileContainer'>
        <div className='profileName'>
            {initials}
        </div>
        <h2>
            {user.firstName} {user.lastName}
        </h2>
        <div className='profileIcons'>
            <button className='btn-edit'>
                Edit Profile
            </button>
            <button className='btn'>

            </button>
        </div>
       </div>
    )
}

export default Profile