import React, { useState } from 'react';

const SearchUsers = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <div className="text-black dark:text-white">
      <form onSubmit={handleSubmit} className="flex justify-center gap-4">
        <input
          type="text"
          className="border p-2 w-2/5 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchUsers;