// import { Feed } from '@mui/icons-material';
import './App.css';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';

function App() {
  return (
    // Following the BEM convention

    <div className="app">
      
    {/* Sidebar */}
    
    <Sidebar/>

    {/* Feed */}

    <Feed/>

    {/* Widgets */}
    
    </div>
  );
}

export default App;
