import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQGqLrIgUvIUJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727396145027?e=1772064000&v=beta&t=8MP5GL-7fYPdkwMGcbqZqS0-9BiyJboUTwCuehjlQBE" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/anijithanil" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anijith-am-83b6671ba/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Anijith AM</h1>
          <p>React Native Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/anijithanil" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anijith-am-83b6671ba/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;