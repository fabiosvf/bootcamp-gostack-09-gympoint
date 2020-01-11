import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Home from '../pages/Home';
import Student from '../pages/Student';
import StudentRegister from '../pages/Student/Register';
import StudentUpdate from '../pages/Student/Update';
import Plan from '../pages/Plan';
import PlanRegister from '../pages/Plan/Register';
import PlanUpdate from '../pages/Plan/Update';
import Enrollment from '../pages/Enrollment';
import EnrollmentRegister from '../pages/Enrollment/Register';
import EnrollmentUpdate from '../pages/Enrollment/Update';
import HelpOrder from '../pages/HelpOrder';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} isPrivate />
      <Route path="/signin" component={SignIn} />

      <Route path="/student" exact component={Student} isPrivate />
      <Route path="/student/register" component={StudentRegister} isPrivate />
      <Route path="/student/update" component={StudentUpdate} isPrivate />

      <Route path="/plan" exact component={Plan} isPrivate />
      <Route path="/plan/register" component={PlanRegister} isPrivate />
      <Route path="/plan/update" component={PlanUpdate} isPrivate />

      <Route path="/enrollment" exact component={Enrollment} isPrivate />
      <Route
        path="/enrollment/register"
        component={EnrollmentRegister}
        isPrivate
      />
      <Route path="/enrollment/update" component={EnrollmentUpdate} isPrivate />

      <Route path="/helporder" component={HelpOrder} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
