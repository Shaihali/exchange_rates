import Seo from '../seo/seo';
import Layout from '../layout/layout';
import { FormIdentification } from '../components/forms';
import { MainContent } from '../view/main-content/main-content';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { UserProfile } from '../view/user-profile/user-profile';


function App() {
  const state = useSelector(state => state.user);
  const isLoggedInUser = state.loggedInUser;

  useEffect(() => {
    localStorage.setItem('usersData', JSON.stringify(state))
  }, [state]);
 
  return (
    <BrowserRouter>
      <Seo title='Exchange Rates' />
      <Layout>
        <Routes>
          {isLoggedInUser ? (
            <Route path="/users/:id" element={<MainContent />} />
          ) : (
            <Route path="/registration" element={<FormIdentification />} />
          )}
          <Route path="/users/:id/profile" element={<UserProfile />} />
          <Route path="/login" element={<FormIdentification />} />
          <Route path="/" element={<Navigate to="/registration" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
