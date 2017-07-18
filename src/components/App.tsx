import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Sidebar } from '../components/Sidebar';
import * as styles from './App.css';
import { Chatroom } from '../components/Chatroom';

const App = () => (
  <div className={styles.wrapper}>
    <Sidebar />
    <Chatroom />
  </div>
);

export default App;