import "../footer/footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const FooterSection = () => {
  return (
    <div>
      <div className="footer-area">
        <div className="footer-desc">
          <h3>FlickChat</h3>
          <ul className="social-links">
            <a
              href="https://twitter.com/kungfupandey1"
              className="social-links-names" target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://github.com/InvincibleRP1"
              className="social-links-names" target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-pandey-311843168/" target="_blank"
              className="social-links-names"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </ul>
          <p>
            © 2023, FlickChat, Inc.{" "}
            <span id="footer-details">All rights reserved.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
