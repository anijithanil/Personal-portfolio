import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/anijithanil" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/anijith-am-83b6671ba/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Please connect by anijith7056@gmail.com 💜</p>
    </footer>
  );
}

export default Footer;