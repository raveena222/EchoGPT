import {use, useEffect} from "react";
import Dashboard from "./Dashboard/Dashboard";
import { connecWithSocketServer } from "./socketConnection/socketConn";


function App() {
  useEffect(() => {
    connecWithSocketServer();
  }, []);

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
