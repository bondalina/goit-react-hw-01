import Profile from './Profile/Profile';
import userData from '../userData.json';
function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
    </div>
  );
}

export default App;
