import React from 'react';
import { motion } from 'framer-motion';
import logo from '../img/Group 47.png'; // Adjust the path to your logo image
import backgroundImage from '../img/Group 54.png'; // Adjust the path to your background image

const Footer = () => {
  return (
    <motion.footer
      className="footersection text-white  mt-5  mb-0 text-center "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Background and Overlay */}
      <div className="footerbackgroundcontainer mb-0">
        <img
          src={backgroundImage}
          className="footerbackgroundimage"
          alt="Landing"
        />
        <div className="footeroverlay">
          <div className="footercontentcontainer  position-relative">
            {/* Logo Section */}
            <section className="footer-logo-section  d-flex justify-content-center align-items-center ">
            <img
  src={logo}
  alt="FlashPoint News"
  className="footer-logo"
/>

            </section>

            {/* About Section */}
            <section className="footer-about-section text-center">
              <p className="fs-4">
                &copy; {new Date().getFullYear()} FlashPoint News. All rights reserved.
              </p>
              <p className="fs-6">
                FlashPoint News brings you the latest headlines from around the world, providing timely and relevant information on global events, entertainment, and more.
              </p>
            </section>

            {/* Social Media & Contact Section */}
            <section className="footer-social-section text-center">
              <p className="fs-6">
                Connect with us through social media for real-time updates and discussions. Follow us on:
              </p>
              <p>
                <a
                  href="https://facebook.com"
                  className="footer-link text-white mx-2 fs-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>{' '}
                |{' '}
                <a
                  href="https://twitter.com"
                  className="footer-link text-white mx-2 fs-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>{' '}
                |{' '}
                <a
                  href="https://instagram.com"
                  className="footer-link text-white mx-2 fs-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </p>
            </section>

            {/* Legal Section */}
            <section className="footer-legal-section text-center">
              <p className="fs-6">
                <a
                  href="/privacy-policy"
                  className="footer-link text-white hover:text-primary mx-2"
                >
                  Privacy Policy
                </a>{' '}
                |{' '}
                <a
                  href="/terms-of-service"
                  className="footer-link text-white hover:text-primary mx-2"
                >
                  Terms of Service
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
