
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/providers/ThemeProvider';
import './logoAnimation.css';

interface LogoProps {
  scrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ scrolled }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Link to="/" className="flex items-center group relative">
      <div className="custom-logo">
        <span className="actual-text">&nbsp;Auto<span className="text-primary">Revive</span>&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;Auto<span className="text-primary">Revive</span>&nbsp;</span>
      </div>
      <span className="ml-1 text-xl text-white font-light italic">Motors</span>
    </Link>
  );
};

export default Logo;
