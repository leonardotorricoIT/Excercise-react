import "./App.css";
import ProfileCard from "./components/profileCard";
import { users } from "./types/user";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"></div>
        {users.map((user) => (
          <ProfileCard user={user} key={user.id} />
        ))}
      </div>
    </>
  );
}

export default App;
