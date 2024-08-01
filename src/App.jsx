import React, { useState, useEffect } from 'react';
import Container from './components/Container';
import Navbar from './components/Navbar';
import SearchUsers from './components/SearchUsers';
import User from './components/User';

const App = () => {
  const [username, setUsername] = useState(null);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!username) return;

    fetch(`https://api.github.com/users/${username}`)
      .then(userResponse => {
        if (!userResponse.ok) {
          new Error('User not found');
        }
        return userResponse.json();
      })
      .then(userData => {
        return fetch(userData.repos_url)
          .then(reposResponse => {
            if (!reposResponse.ok) {
              new Error('Repositories not found');
            }
            return reposResponse.json().then(reposData => {
              setUser(userData);
              setRepos(reposData);
            });
          });
      })
      
      
  }, [username]);

  const handleSearch = (username) => {
    setUsername(username);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <Container>
        <SearchUsers onSearch={handleSearch} />
        {user && <User user={user} repos={repos} />}
      </Container>
    </div>
  );
};

export default App;