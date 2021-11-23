import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import AppLogin from './Components/Login/AppLogin';
import TrainingDocuments from './Components/TrainingDocuments/TrainingDocuments';
import UploadFile from './Components/UploadFile/UploadFile';

const App = () => {
  const [authState, setAuthState] = useState(false);
  const [username, setUsername] = useState('');
  const [training, setTraining] = useState('');
  const [version, setVersion] = useState('');
  const [company, setCompany] = useState('');

  return (
    <div>
      <Switch>
        {!authState ? (
          <Route
            exact
            path='/'
            render={(props) => (
              <AppLogin
                {...props}
                authState={authState}
                setAuthState={setAuthState}
                username={username}
                setUsername={setUsername}
              />
            )}
          />
        ) : (
          <>
            <Route
              path='/trainingdocuments'
              component={() => <AdminDashboard username={username} />}
            />
            <Route
              exact
              path='/dashboard'
              component={() => (
                <TrainingDocuments
                  training={training}
                  setTraining={setTraining}
                  version={version}
                  setVersion={setVersion}
                  company={company}
                  setCompany={setCompany}
                />
              )}
            />
            <Route
              exact
              path='/uploaddocument'
              component={() => (
                <UploadFile
                  training={training}
                  setTraining={setTraining}
                  version={version}
                  setVersion={setVersion}
                  company={company}
                  setCompany={setCompany}
                />
              )}
            />
          </>
        )}
      </Switch>
    </div>
  );
};

export default App;
