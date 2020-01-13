import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/styles'
import Theme from './Theme'
import Index from '../index/Index'
import ApplicationForm from '../applicationForm/ApplicationForm'
import SignIn from '../signIn/SignIn'
import StudentPortal from '../studentPortal/StudentPortal'
import ErrorNotFound from './ErrorNotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Auth from './Auth'

// function Portal({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         Auth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/signin",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );


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
      </ThemeProvider>
    </div>
  );
}

export default App
