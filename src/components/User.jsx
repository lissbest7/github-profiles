import React from 'react';

const User = ({ user, repos }) => {
  return (
    <div className="mt-6 max-w-5xl mx-auto flex flex-col gap-6">
      <div className="h-max bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 flex flex-col border dark:border-white">
        <div className="flex flex-col items-center mb-4">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full border-2 dark:border-blue-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{user.name || user.login}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Created on {new Date(user.created_at).toLocaleDateString()}</p>
        </div>
        <div className="flex justify-between p-5">
          <p className="text-sm text-gray-800 dark:text-gray-200"><span className="font-semibold">{user.followers}</span> Followers</p>
          <p className="text-sm text-gray-800 dark:text-gray-200"><span className="font-semibold">{user.following}</span> Following</p>
          <p className="text-sm text-gray-800 dark:text-gray-200"><span className="font-semibold">{user.public_repos}</span> Repositories</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 flex flex-col border dark:border-white">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Repositories:</h3>
        {repos.length > 0 ? (
          <ul className="grid grid-cols-4 gap-4 max-[992px]:grid-cols-2">
          {repos.map((repo) => (
            <li
              key={repo.id}
              className="flex flex-col bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <a
                href={repo.html_url}
                className="text-center text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
              >
                {repo.name}
              </a>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  Stars: <span className="font-semibold">{repo.stargazers_count}</span>
                </p>
                <p>
                  Issues: <span className="font-semibold">{repo.open_issues_count}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No repositories found</p>
        )}
      </div>
    </div>
  );
};

export default User;
