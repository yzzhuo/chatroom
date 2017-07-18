import * as React from 'react';
import * as styles from './Chatroom.css';
import FlatButton from 'material-ui/FlatButton';
import FileUpload from 'material-ui/svg-icons/file/folder-open';

export const Chatroom = () => (
  <div className={styles.chatroom_wrapper}>
    <div className={styles.chatroom_title}>Somebody</div>
    <div className={styles.chatroom_body}>

    </div>
    <div className={styles.chatroom_bottom}>
      <div className={styles.toolbar}>
        <FlatButton
        icon={<FileUpload />}
    />
      </div>
      <div className="send_box"></div>
    </div>
  </div>
);