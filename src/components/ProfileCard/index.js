import { BiSolidMessageRounded } from "react-icons/bi";
import "./index.css";

const sampleProfileImg =
  "https://res.cloudinary.com/dbwmdblhs/image/upload/v1710482464/fyxd7v5azxqjm29nzhj7.jpg";

const ProfileCard = (props) => {
  const { profileDetails } = props;
  const { name, role } = profileDetails;

  return (
    <li className="profile-card">
      <img src={sampleProfileImg} alt={role} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-role">Role: {role}</p>
      <button className="massage-button">
        <a href="#" target="_blank">
          {" "}
          <BiSolidMessageRounded className="message-icon" size={40} />
        </a>
      </button>
    </li>
  );
};

export default ProfileCard;
