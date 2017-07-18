import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import * as styles from './Siderbar.css';
import AppBar from 'material-ui/AppBar';

export const Sidebar = () => (
  <div className={styles.sidebar}>
    <AppBar
        title="JUNE"
        iconElementLeft={
          <Avatar src="images/uxceo-128.jpg" />
        }
        iconElementRight={
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Send feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        }
        style={{backgroundColor: '#263238', color: '#fff'}}
      />
      <Tabs style={{borderBottom:'1px #eee'}}>
        <Tab
          label="联系人"
          style={{backgroundColor: '#263238', color: '#fff'}}
        />
        <Tab
          label="快捷回复"
          style={{backgroundColor: '#263238', color: '#fff'}}
        />
      </Tabs>
      <List>
        <Subheader>上课中</Subheader>
        {/* <ListItem
          leftAvatar={<Avatar src='images/ok-128.jpg' />}
          primaryText='Brunch this weekend?'
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Brendan Lim</span> --
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src='images/kolage-128.jpg' />}
          primaryText={
            <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
          }
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src='images/uxceo-128.jpg' />}
          primaryText='Oui oui'
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Grace Ng</span> --
              Do you have Paris recommendations? Have you ever been?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src='images/kerem-128.jpg' />}
          primaryText='Birdthday gift'
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Kerem Suer</span> --
              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src='images/raquelromanp-128.jpg' />}
          primaryText='Recipe to try'
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Raquel Parrado</span> --
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        /> */}
        <Subheader>有问题</Subheader>
        <Subheader>有作品</Subheader>
        <Subheader>已奖励</Subheader>
        <Subheader>已结束</Subheader>
        <Subheader>咨询</Subheader>
      </List>
  </div>
);