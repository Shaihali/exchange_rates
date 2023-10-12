import { Navigate, Route, Routes } from "react-router-dom";
import { UserProfile } from "../view/user-profile/user-profile";
import { MainContent } from "../view/main-content/main-content";
import { useSelector } from "react-redux";

export const AuthenticatedRoutes = () => {
  const stateUser = useSelector((state) => state.user)
  const usersList = stateUser.users;
  const currentUser = stateUser.loggedInUser;
  const id = currentUser && 
    usersList.findIndex(user => user.username === currentUser.username && user.password === currentUser.password);
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/users/${id + 1}`} />} />
      <Route path="/users/:id/profile" element={<UserProfile />} />
      <Route path="/users/:id" element={<MainContent />} />
    </Routes>
  );
}
