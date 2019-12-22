import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import Theme from './Theme';
import Index from '../index/Index';
import ApplicationForm from '../applicationForm/ApplicationForm';
import Footer from '../footer/Footer';
import SignIn from '../signIn/SignIn';
import StudentPortal from '../studentPortal/StudentPortal';
import ErrorNotFound from './ErrorNotFound';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/application" component={ApplicationForm} />
            <Route path="/signin" component={SignIn} />
            <Route path="/student" component={StudentPortal} />
            <Route component={ErrorNotFound} />
          </Switch>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
