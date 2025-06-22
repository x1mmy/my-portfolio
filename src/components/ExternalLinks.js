import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ExternalLinks = ({ githubLink, openLink }) => {
  return (
    <div className="external-links">
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon"
        >
          <GitHubIcon style={{ fontSize: 20 }} />
        </a>
      )}
      {openLink && (
        <a
          href={openLink}
          target="_blank"
          rel="noopener noreferrer"
          className="open-icon"
        >
          <OpenInNewIcon style={{ fontSize: 20 }} />
        </a>
      )}
    </div>
  );
};

export default ExternalLinks; 