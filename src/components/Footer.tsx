import './Footer.css';
import { profile } from '@/user';

const Footer = () => {
  return (
    <footer className='app-footer'>
      <p>&copy; 2026 {profile.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
