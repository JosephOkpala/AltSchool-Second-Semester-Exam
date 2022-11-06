import "../styles/profile.css";
import profile from "../assets/profile.jpg";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  return (
    <div className="profile">
      <Helmet>
        <title>Profile</title>
        <meta
          name="description"
          content="Information about myself."
        />
        <link rel="canonical" href="/profile" />
      </Helmet>
      <div className="profile-container">
        <div className="flex">
          <img
            src={profile}
            alt="profile"
            style={{ width: "5rem", borderRadius: "50%" }}
          />
          <h2>Okpala Joseph</h2>
        </div>
        <div className="profile-card">
          <div className="mg-b2">
            <h4>Github username</h4>
            <h3>
              <a href="https://github.com/josephokpala" target="blank">
                JosephOkpala
              </a>
            </h3>
          </div>
          <div className="mg-b2">
            <h4>Bio</h4>
            <h3>Front-end Developer who loves to code. Learning to create.</h3>
          </div>
          <div className="mg-b2">
            <h4>Achievements</h4>
            <h3>Pull Shark</h3>
          </div>
          <div className="mg-b2">
            <h4>Public Repositories</h4>
            <h3>17</h3>
          </div>
          <div className="mg-b2">
            <h4>Email</h4>
            <h3>okpalajoseph995@gmail.com</h3>
          </div>
          <div className="mg-b2">
            <h4>Twitter</h4>
            <h3>
              <a href="https://twitter.com/unorthodox__dev" target="blank">
                @unorthodox__dev
              </a>
            </h3>
          </div>
          <div>
            <h4>Location</h4>
            <h3>Lagos Nigeria</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
