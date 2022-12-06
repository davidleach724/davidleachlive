import './App.css';
import profilepic from './profilepic.JPG'

const App = () => {

  return (
    <main>
      <a href='https://davidleachmusic.bandcamp.com/'>
        <img src={profilepic} className="profile-pic"/>
      </a>
    </main>
  )
}

export default App;
