import React from 'react';

const Container = ({ children }) => {
  return <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-900 text-black dark:text-white">{children}</div>;
};

export default Container;