import { useNavigate } from 'react-router-dom';
import profile from './user-profile.module.css';
import { useSelector } from 'react-redux';

export function UserProfile() {
  const navigate = useNavigate();
  const state = useSelector(state => state.user)
  const userName = state.loggedInUser.username; 

  const handleClickBack = () => {
    navigate(-1);
  }

  return (
    <div className={profile.box}>
      <button onClick={handleClickBack}>назад</button>
      <h2>Твой профиль {userName}</h2>
      <p>Тут можно реализовать, что угодно!!!</p>
    </div>
  );
}