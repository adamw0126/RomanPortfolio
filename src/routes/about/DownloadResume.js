import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/ROMAN BYK.pdf";
import { React } from 'react';

const DownloadResume = () => {
  return (
    <div>
      <a className="download-btn" href={Resume} download="ROMAN BYK">
        <img
          src={DownloadIcon}
          alt="Resume download button"
        />
        Download Resume
      </a>
    </div>
  );
};

export default DownloadResume;
