import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

import Home from '../pages/public/Home';
import AboutUs from '../pages/public/AboutUs';
import EvidenceResults from '../pages/public/EvidenceResults';
import NewsEvents from '../pages/public/NewsEvents';
import Blog from '../pages/public/Blog';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';
import Remember from '../pages/public/Remember';

import ControlQuestions from '../pages/private/ControlQuestions';
import ControlStudents from '../pages/private/ControlStudent';
import Dashboard from '../pages/private/Dashboard';
import Profile from '../pages/private/Profile';
import Test from '../pages/private/Test';
import Course from '../pages/private/Course';



import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
		<Route path="/Home" element={<MainLayout><Home /></MainLayout>} />
		<Route path="/AboutUs" element={<MainLayout><AboutUs /></MainLayout>} />
		<Route path="/EvidenceResults" element={<MainLayout><EvidenceResults /></MainLayout>} />
		<Route path="/NewsEvents" element={<MainLayout><NewsEvents /></MainLayout>} />
		<Route path="/Blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/login" element={<Login />} />
		<Route path="/Register" element={<Register />} />
		<Route path="/Remember" element={<Remember />} />

        {/* Rutas Privadas */}
		<Route path="/ControlQuestions" element={<PrivateRoute><ControlQuestions/></PrivateRoute>}/>
		<Route path="/ControlStudents" element={<PrivateRoute><ControlStudents/></PrivateRoute>}/>
		<Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
		<Route path="/Profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path="/Test" element={<PrivateRoute><Test/></PrivateRoute>}/>
		<Route path="/Course" element={<PrivateRoute><Course/></PrivateRoute>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;