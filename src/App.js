import './styles.css';
import React, {Component} from 'react';
import ToDoList from './containers/list/itemList';

class App extends Component {
 render() {
  return (
   <div>
    <ToDoList title="My Stuff" />
   </div>
  );
 }
}

export default App;
