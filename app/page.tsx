import Navbar from './components/navbar';
import ProfilePictureGenerator from './components/avatarGenerator';


export default function Home() {
  return (
    <div className="app">
    <Navbar />
    <ProfilePictureGenerator />
  </div>
  )
}
