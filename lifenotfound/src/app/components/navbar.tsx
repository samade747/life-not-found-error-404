
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">
          <Link href="/">Home</Link>
        </div>
        <div className="space-x-4">
          <Link href="/#" className="text-white">
            error
          </Link>
          <Link href="/#" className="text-white">
          error
          </Link>
          <Link href="/#" className="text-white">
          error
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
