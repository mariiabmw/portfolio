import './style.css';
import gitHubIcon from './gitHub-black.svg';

function BtnGithub({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub
    </a>
  );
}

export default BtnGithub;
