import * as React from 'react'
import Checkbox from 'material-ui/Checkbox';
import {inject,observer} from 'mobx-react'
import {AppState} from './AppState'
import './Choose.less'
@inject('AppState')
@observer
class Choose extends React.Component<{AppState?:AppState}, any> {
  render() {
    return(
      <div style={{paddingTop:"15px"}}>
        {this.props.AppState.nowSeat.map((value,index1)=>{
          return (
            <div key={index1} className="chooseLine" style={{marginTop:"15px"}}>
              {
                value.map((value2,index2)=>{
                  return (
                    <Checkbox 
                    key={index2} 
                    style={{width:null}}
                    checked={value2}
                    onCheck={()=>{
                      this.props.AppState.nowSeat[index1][index2]=!this.props.AppState.nowSeat[index1][index2]
                      this.forceUpdate();
                    }}
                    />
                  )
                })
              }
            </div>
          )
        })}
        
      </div>
    )
  }
}
export default Choose