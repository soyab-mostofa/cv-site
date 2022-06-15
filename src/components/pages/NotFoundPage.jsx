import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="h-screen text-center ">
      <p className="pt-40 text-5xl md:pt-80">The page is not available yet</p>

      <div className="mt-12 text-xl font-semibold ">
        <Link to="/">
          <button className="px-8 py-4 bg-neutral-900 text-neutral-50 hover:ring-4 ring-slate-500">
            Return to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
