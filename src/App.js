import { initialFriends } from './helpers/data';
import './App.css';
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import { FormSplitBill } from './components/FormSplitBill';
import { useState } from 'react';




function App() {

  const [friends, setFriends] = useState (initialFriends);

  const [showAddFriend, setShowAddFriend] = useState(false)

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend (friend) {
    setFriends((friends) => [...friends, friend])
    setShowAddFriend(false)
  }

  function handleSelect (friend){
    //setSelectedFriend(friend)
    setSelectedFriend((current) => current?.id === friend.id ? null: friend)
    setShowAddFriend(false)
  }

  const handleSplitBill = (value) => {
    setFriends(friends.map(friend => friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend))
    setSelectedFriend(null)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends = {friends} onSelection = {handleSelect} selectedFriend = {selectedFriend}/>
        
        {
          showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>
        }
        
        <Button onClick = {()=>setShowAddFriend((show) => !show)}>

          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend = {selectedFriend} onSplitBill = {handleSplitBill}/>}
    </div>
  );
}

export default App;
