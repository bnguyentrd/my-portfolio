import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../css/looks.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <p className="cloud-text">Bobby Nguyen</p>
      <a 
      href="https://www.linkedin.com/in/bobby-nguyen343/"
      className="link-icons"
      >
      <FaLinkedin />
    </a>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaGithub />
      </a>
      {blog && (
        <a href={blog} aria-label="External link" className="link-icons">
          {Blog}
        </a>
      )}
    </StyledSocialLinks>
  );
}
