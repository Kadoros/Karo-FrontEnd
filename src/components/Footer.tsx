// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// Styled-components for Footer
const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`;

const FooterLink = styled.li`
  display: inline;
  margin: 0 10px;
`;

const FooterAnchor = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.textHover};
  }
`;

const SocialMedia = styled.div`
  margin: 10px 0;
`;

const SocialMediaIcon = styled.a`
  color: ${({ theme }) => theme.text};
  margin: 0 10px;
  font-size: 20px;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const ContactInfo = styled.div`
  margin: 10px 0;
`;

const BackToTopButton = styled.button`
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.black.veryBlack};
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>&copy; {new Date().getFullYear()} Karo. All rights reserved.</FooterText>
        <FooterLinks>
          <FooterLink><FooterAnchor href="/about">About Us</FooterAnchor></FooterLink>
          <FooterLink><FooterAnchor href="/contact">Contact</FooterAnchor></FooterLink>
          <FooterLink><FooterAnchor href="/privacy">Privacy Policy</FooterAnchor></FooterLink>
          <FooterLink><FooterAnchor href="/terms">Terms of Service</FooterAnchor></FooterLink>
        </FooterLinks>
        <SocialMedia>
          <SocialMediaIcon href="https://facebook.com" aria-label="Facebook"><FaFacebook /></SocialMediaIcon>
          <SocialMediaIcon href="https://twitter.com" aria-label="Twitter"><FaTwitter /></SocialMediaIcon>
          <SocialMediaIcon href="https://instagram.com" aria-label="Instagram"><FaInstagram /></SocialMediaIcon>
        </SocialMedia>
        <ContactInfo>
          <FooterText>Email: contact@mywebsite.com</FooterText>
          <FooterText>Phone: (123) 456-7890</FooterText>
        </ContactInfo>
        <BackToTopButton onClick={() => window.scrollTo(0, 0)}>
          Back to Top
        </BackToTopButton>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
