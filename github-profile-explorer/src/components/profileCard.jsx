import "./ProfileCard.css";

export default function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img src={user.avatar_url} className="avatar" />

      <div>
        <div className="profile-name">{user.name}</div>
        <div className="meta">@{user.login}</div>

        {user.bio && <p>{user.bio}</p>}

        <div className="meta">
          👥 {user.followers} | 📦 {user.public_repos}
        </div>
      </div>
    </div>
  );
}