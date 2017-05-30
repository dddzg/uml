import * as React from 'react';
import './App.less';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Main from './Main'
const Movie='Movie'
const Info='Info'
import InfoPage from './Info'

class App extends React.Component<{}, {
  open:boolean,
  docked:boolean
  page:string
}> {
  constructor(props) {
    super(props)
    this.state= {
      open:true,
      page:Movie,
      docked:false
    }
  }
  componentDidMount(){
    let size=()=>{
      if(document.body.offsetWidth<=600) {
        console.log('543')
        this.setState({
          docked:false
        })
      }else{
        console.log('123')
        this.setState({
          docked:true,
          open:true
        })
      }
    }
    size()
    window.onresize=()=>{
      size()
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
          docked={this.state.docked}
          width={260}
          onRequestChange={(open) => this.setState({open})}
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
