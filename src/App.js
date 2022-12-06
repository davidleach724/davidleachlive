import './App.css';
import profilepic from './profilepic.JPG'

const App = () => {

  return (
    <main>
      <a href='https://davidleachmusic.bandcamp.com/'>
        <img src={profilepic} className="profile-pic" alt="David Leach sitting in a chair next to his dog, Birdie"/>
      </a>
    </main>
  )
}

export default App;
