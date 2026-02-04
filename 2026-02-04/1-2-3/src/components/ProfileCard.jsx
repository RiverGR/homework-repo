function ProfileCard({ name, age, job }) {
  return (
    <div className="glass-card profile-card">
      <h3 className="card-title">프로필 카드</h3>

      <div className="card-body">
        <p>
          이름: <b>{name}</b>
        </p>
        <p>나이: {age}</p>
        <p>직업: {job}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
