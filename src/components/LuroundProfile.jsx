/** @format */
import "../style.css";
import AboutDetails from "./AboutDetails";
import Search from "./LuroundSearch";
import Profile from "./Profile";
export default function LuroundProfile() {
  return (
    <div className='profiledashboard'>
      <Search />
      <Profile />
      <AboutDetails />
    </div>
  );
}
