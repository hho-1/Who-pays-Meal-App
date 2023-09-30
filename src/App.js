import { initialFriends } from './helpers/data';
import './App.css';
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import { FormSplitBill } from './components/FormSplitBill';
import { useState } from 'react';




function App() {

  const friends = initialFriends;

  const [showAddFriend, setShowAddFriend] = useState(false)

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends = {friends}/>
        
        {
          showAddFriend && <FormAddFriend/>
        }
        
        <Button onClick = {()=>setShowAddFriend((show) => !show)}>

          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill/>
    </div>
  );
}

export default App;
