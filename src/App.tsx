import * as React from 'react';
import './App.less';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Main from './Main'
class App extends React.Component<{}, {
  open:boolean
}> {
  constructor(props) {
    super(props)
    this.state= {
      open:true
    }
  }
  toggleDrawer=()=>{
    this.setState({
      open:!this.state.open
    })
  }
  render() {
    return (
      <div>
        <AppBar
          className="app-bar"
          style={{
            position:'fixed',
            top:0
          }}
          title="华工电影院"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Main/>
        <Drawer 
          open={true} 
          docked={true}
          width={260}
        >
          <div className="drawer-title">
            华工电影院
          </div>
          <MenuItem>我的信息</MenuItem>
          <MenuItem onTouchTap={this.toggleDrawer}>返回</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
