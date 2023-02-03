import { UserProvider } from "./UserProvider";
import Hijo from "./Hijo";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Hijo/>
      </div>
    </UserProvider>
  );
}

export default App;
