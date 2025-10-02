import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  // if user is not logged in, redirect immediately
  if (!user) {
    navigate("/");
    return null; // prevent rendering crash
  }

  const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();

  const handleLogout = () => {
    signout();
    navigate("/"); // redirect to home after logout
  };

  return (
    <div className="ProfileContainer">
      <div className="profileName">{initials}</div>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <div className="profileIcons">
        <button className="btn-edit">Edit Profile</button>
        <button className="logoutBtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
