import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BookDemo from './BookDemo';
import DemoHoverTooltip from './DemoHoverTooltip';

const DemoHoverWrapper = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <div 
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Tooltip is always mounted, but animated */}
      <div
        className={`
          mb-2 transition-all duration-300 transform
          ${hovering ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-0'}
        `}
      >
        <DemoHoverTooltip />
      </div>

      <NavLink to="/#contact-us">
        <BookDemo />
      </NavLink>
    </div>
  );
};

export default DemoHoverWrapper;
