import { v4 as uuidv4 } from "uuid";

import ProfileCard from "../ProfileCard";
import "./index.css";

const teamProfiles = [
  {
    id: uuidv4(),
    name: "Mathews Kurian",
    role: "Founder",
  },
  {
    id: uuidv4(),
    name: "Abhishek Kumar",
    role: "Chief Executive Officer",
  },
  {
    id: uuidv4(),
    name: "Saliha Hussain",
    role: "HR Manager",
  },
  {
    id: uuidv4(),
    name: "Karthik Mukesh",
    role: "Business Expert",
  },
  {
    id: uuidv4(),
    name: "Mohammed Althaf KM",
    role: "Digital Marketing Manager",
  },
  {
    id: uuidv4(),
    name: "Joseph Antony",
    role: "Software Developer",
  },
  {
    id: uuidv4(),
    name: "Vaishali Khola",
    role: "HR Executive",
  },
  {
    id: uuidv4(),
    name: "Disha Sodhani",
    role: "HR Associate",
  },
];

const trainingDepartment = [
  {
    id: uuidv4(),
    name: "Joseph Antony",
    role: "Director of Training",
  },
  {
    id: uuidv4(),
    name: "Urooj Khan",
    role: "Data Science Trainer",
  },
  {
    id: uuidv4(),
    name: "Farzana Rashid",
    role: "Python Development Trainer",
  },
  {
    id: uuidv4(),
    name: "Divija Ameta",
    role: "Artificial Intelligence Trainer",
  },
];

const TeamProfiles = () => {
  return (
    <div className="profiles-section">
      <h1 className="Meet-our-team-heading">Meet Our Team</h1>
      <ul className="team-list">
        {teamProfiles.map((eachMember) => (
          <ProfileCard profileDetails={eachMember} key={eachMember.id} />
        ))}
      </ul>
      <h1 className="Meet-our-team-heading">Training Department</h1>
      <ul className="team-list">
        {trainingDepartment.map((eachMember) => (
          <ProfileCard profileDetails={eachMember} key={eachMember.id} />
        ))}
      </ul>
    </div>
  );
};

export default TeamProfiles;
