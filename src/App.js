//import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import Header from './components/header/Header';
//import Sidebar from './components/sidebar/Sidebar';
import Clients from './pages/clients/Clients';
import Login from './pages/auth/Login';
//import Register from './pages/auth/Register';
import Forgotpassword from './pages/auth/Forgotpassword';
import Resetpassword from './pages/auth/Resetpassword';
import Dashboard from './pages/Dashboard/Dashboard';
import NewClient from './pages/newclient/NewClient';
import SingleClient from './pages/singleclient/SingleClient';
//import ClientProfile from './components/clientcomponents/profile/ClientProfile';
//import ClientHistory from './components/clientcomponents/history/ClientHistory';
import SingleHistory from './components/clientcomponents/history/SingleHistory';
import Riders from './pages/riders/Riders';
import NewRider from './pages/newRider/NewRider';
import SingleRider from './pages/singlerider/SingleRider';
import RiderSingleHistory from './components/ridercomponents/riderhistory/RiderSingleHistory';
import Settings from './pages/settings/Settings';
import AdminUsers from './pages/adminusers/AdminUsers';
import NewAdmin from './pages/newadmin/NewAdmin';
import SingleAdmin from './pages/singleadmin/SingleAdmin';
import Layout from './components/layout/Layout';

import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.withCredentials = true;


function App() {

  return (
    <>  
        <Routes>

        <Route path="login" element={<Login />} />
       
        <Route path="forgot-password" element={<Forgotpassword />} />
        <Route path="reset-password" element={<Resetpassword />} />
        <Route path="/"  element={
                <Layout>
                  <Dashboard />
                </Layout>
              } />
              <Route path="clients" >
                <Route index element={<Layout><Clients /></Layout>} />
                
                <Route path="add-client" element={<Layout><NewClient /></Layout>} />

                <Route path=":userId" element={<Layout><SingleClient /></Layout>} />
                <Route path=":userId/history" element={<Layout><SingleHistory /></Layout>} />
              </Route>
              <Route path='riders'>
                 <Route index element={<Layout><Riders /></Layout>} />
                 <Route path="new-rider" element={<Layout><NewRider /></Layout>} />
                 <Route path=":userId" element={<Layout><SingleRider /></Layout>} />
                 <Route path=":userId/history" element={<Layout><RiderSingleHistory /></Layout>} />
              </Route>
              <Route path="settings" element={<Layout><Settings /></Layout>} />

              <Route path="admin-users" >
                <Route index element={<Layout><AdminUsers /></Layout>} />
                
                <Route path="new" element={<Layout><NewAdmin /></Layout>} />

             <Route path=":userId" element={<Layout><SingleAdmin /></Layout>} />
    
              </Route>
              
        </Routes>
        <ToastContainer />
      
    </>
  );
}

export default App;
