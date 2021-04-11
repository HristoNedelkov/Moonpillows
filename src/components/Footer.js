import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import fP from './services/pathSolver';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
         Write down your email to receive any updates on our products!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to={fP('')}>Testimonials</Link>
            <Link to={fP('')}>Careers</Link>
            <Link to={fP('')}>Investors</Link>
            <Link to={fP('')}>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to={fP('')}>Contact</Link>
            <Link to={fP('')}>Support</Link>
            <Link to={fP('')}>Shops</Link>
            <Link to={fP('')}>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sponsorships</h2>
            <Link to={fP('')}>How to get one</Link>
            <Link to={fP('')}>Clients</Link>
            <Link to={fP('')}>Agency</Link>
            <Link to={fP('')}>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={fP('')}>Instagram</Link>
            <Link to={fP('')}>Facebook</Link>
            <Link to={fP('')}>Youtube</Link>
            <Link to={fP('')}>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to={fP('')} className='social-logo'>
              MP
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>MP © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to={fP('')}
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to={fP('')}
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to={fP('')}
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to={fP('')}
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to={fP('')}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
