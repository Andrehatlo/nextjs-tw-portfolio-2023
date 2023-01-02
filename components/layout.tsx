import React from 'react';
import NavBar from '../components/navigation/responsivetopnav';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container w-full p-4 mx-auto font-sans md:w-1/2 lg:w-1/3">
      <div className="flex justify-center">
        <header className="sticky top-0 z-50 py-5">
          <NavBar />
          {/* Header content goes here */}
        </header>
        <main className="relative flex-1 w-full py-4 mx-auto">
          {children}
        </main>
        <footer>
          {/* Footer content goes here */}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
