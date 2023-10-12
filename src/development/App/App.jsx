import Seo from '../seo/seo';
import Layout from '../layout/layout';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthenticatedRoutes } from '../route/authenticatedRoutes';
import { UnauthenticatedRoutes } from '../route/unauthenticatedRoutes';


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
        {isLoggedInUser ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
