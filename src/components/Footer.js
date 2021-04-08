import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import fullPath from './services/pathSolver';

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
            <Link to={fullPath('')}>Testimonials</Link>
            <Link to={fullPath('')}>Careers</Link>
            <Link to={fullPath('')}>Investors</Link>
            <Link to={fullPath('')}>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to={fullPath('')}>Contact</Link>
            <Link to={fullPath('')}>Support</Link>
            <Link to={fullPath('')}>Shops</Link>
            <Link to={fullPath('')}>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sponsorships</h2>
            <Link to={fullPath('')}>How to get one</Link>
            <Link to={fullPath('')}>Clients</Link>
            <Link to={fullPath('')}>Agency</Link>
            <Link to={fullPath('')}>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={fullPath('')}>Instagram</Link>
            <Link to={fullPath('')}>Facebook</Link>
            <Link to={fullPath('')}>Youtube</Link>
            <Link to={fullPath('')}>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to={fullPath('')} className='social-logo'>
              MP
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>MP © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to={fullPath('')}
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to={fullPath('')}
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to={fullPath('')}
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to={fullPath('')}
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to={fullPath('')}
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
