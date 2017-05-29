import * as React from 'react';
import './App.less';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Main from './Main'
const Movie=Symbol('Movie')
const Info=Symbol('Info')
import InfoPage from './Info'
class App extends React.Component<{}, {
  open:boolean,
  page:Symbol
}> {
  constructor(props) {
    super(props)
    this.state= {
      open:true,
      page:Movie
    }
  }
  toggleDrawer=()=> {
    this.setState({
      open:!this.state.open
    })
  }
  render() {
    const content=this.state.page===Movie?<Main open={this.state.open}/>:<InfoPage open={this.state.open}/>
    return (
      <div>
        <Drawer 
          open={this.state.open} 
          docked={true}
          width={260}
        >
          <div className="drawer-title">
            华工电影院
          </div>
          <MenuItem onTouchTap={()=>{this.setState({page:Info})}}>我的信息</MenuItem>
          <MenuItem onTouchTap={()=>{this.setState({page:Movie})}}>订票</MenuItem>
          <MenuItem onTouchTap={this.toggleDrawer}>关闭抽屉</MenuItem>
        </Drawer>
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
        {content}
      </div>
    );
  }
}

export default App;
