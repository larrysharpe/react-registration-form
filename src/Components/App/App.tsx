import React from 'react';
import Registration from "../Registration";
import RegistrationContextProvider from "../Registration/registration.provider";

function App() {
  return (
    <>
        <RegistrationContextProvider>
            <Registration/>
        </RegistrationContextProvider>
    </>
  );
}

export default App;
