import React from "react";
import Routes from "./routes/Routes";

import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
}

export default App;
