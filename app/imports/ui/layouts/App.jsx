import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import { ROLE } from '../../api/role/Role';
import LoadingSpinner from '../components/LoadingSpinner';
import ManageDatabase from '../pages/ManageDatabase';
import Dashboard from '../pages/Dashboard';
import TermsAndConditions from '../pages/TermsAndConditions';
import ImportSheet from '../pages/ImportSheet';
import UserSettings from '../pages/UserSettings';
import VerificationTable from '../pages/VerificationTable';
import CompareProjections from '../pages/CompareProjections';
import EditClientInfo from '../pages/EditClientInfo';
import ManageProjections from '../pages/ManageProjections';
import InputABS from '../pages/InputABS';
import ProfilePage from '../pages/Profile';
/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/import" element={<UserProtectedRoute><ImportSheet /></UserProtectedRoute>} />
          <Route path="/compare-projections" element={<ModProtectedRoute><CompareProjections /></ModProtectedRoute>} />
          <Route path="/manage-projections" element={<ModProtectedRoute><ManageProjections /></ModProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
          <Route path="/list" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ModProtectedRoute><Dashboard /></ModProtectedRoute>} />
          <Route path="/balance-sheet" element={<UserProtectedRoute><InputABS /></UserProtectedRoute>} />
          <Route path="/user-settings" element={<ProtectedRoute><UserSettings /></ProtectedRoute>} />
          <Route path="/edit" element={<UserProtectedRoute><EditClientInfo /></UserProtectedRoute>} />
          <Route path="/profile" element={<UserProtectedRoute><ProfilePage /></UserProtectedRoute>} />
          <Route path="/verification-table" element={<AdminProtectedRoute ready={ready}><VerificationTable /></AdminProtectedRoute>} />
          <Route path="/manage-database" element={<AdminProtectedRoute ready={ready}><ManageDatabase /></AdminProtectedRoute>} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="/tos" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  console.log('ProtectedRoute', isLogged);
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 *  UserProtectedRoute
 * Checks for Meteor login and user role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const UserProtectedRoute = ({ children }) => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return { ready: rdy };
  });

  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }

  if (!ready) {
    return <LoadingSpinner />;
  }

  const isUser = Roles.userIsInRole(Meteor.userId(), [ROLE.USER]);
  const isAdmin = Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]);
  return isLogged && (isUser || isAdmin) ? children : <Navigate to="/notauthorized" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]);
  console.log('AdminProtectedRoute', isLogged, isAdmin);
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

/**
 *  ModProtectedRoute
 * Checks for Meteor login and mod role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ModProtectedRoute = ({ children }) => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return { ready: rdy };
  });

  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }

  if (!ready) {
    return <LoadingSpinner />;
  }

  const isMod = Roles.userIsInRole(Meteor.userId(), [ROLE.MOD]);
  const isAdmin = Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]);
  return isLogged && (isMod || isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

UserProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

UserProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

ModProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ModProtectedRoute.defaultProps = {
  children: <Landing />,
};

export default App;
