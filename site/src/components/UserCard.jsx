import React from "react";
import UserCharts from "./UserCharts";

const UserCard = ({ user }) => {
  if (!user) return <div>Loading...</div>;

  return (
    <div className='user-card'>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} width='100' />
      <h2>{user.name || user.login}</h2>
      <p>Username: {user.login}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Repositories: {user.public_repos}</p>
      <p>Created: {new Date(user.created_at).toLocaleDateString()}</p>
      <a href={user.html_url} target='_blank' rel='noreferrer'>
        View Profile
      </a>
      <UserCharts user={user} />
    </div>
  );
};

export default UserCard;
