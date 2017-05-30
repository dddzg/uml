import * as React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {MovieData} from './data'
import RaisedButton from 'material-ui/RaisedButton'
import {inject,observer} from 'mobx-react'
import {AppState} from './AppState' 
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import './Main.less'
import Choose from './Choose'
const Line=({first,second})=>(
		<div className="line">
				<div>{first}</div>
				<div style={{marginLeft:"24px"}}>{second}</div>
		</div>
)
@inject('AppState')
@observer
class Main extends React.Component<{
	open:boolean,
	AppState?:AppState
},{
  data?:MovieData[],
  open?:boolean
}> {
		constructor(props:any) {
				super(props);
        this.state={
          data:this.props.AppState.movies,
          open:false
        }
		}
		handleInput=(_,input)=>{
				let data=[];
				this.props.AppState.movies.forEach(value=> {
						for(let x of Object.keys(value)){
								if (value[x].includes(input)) {
										data.push(value)
										break
								}
						}
				})
				this.setState({
						data
				})
		}
		haveBought=(movie:MovieData)=>this.props.AppState.moviesBuy.includes(movie)
		render(){
				return(
						<div className="main" style={{margin:`0 0 0 ${this.props.open?260:0}px`}}>
								<div className="main-content">
										<TextField
										hintText="输入你想看的电影"
										onChange={this.handleInput}
										floatingLabelText='搜索'
										fullWidth={true}
										/>
                    <div className="onebyone">
										{
												this.state.data.map((value,index)=>(
														<Card
														key={index}
														initiallyExpanded={false}
                            className="card"
														style={{
															margin:"14px 8px 24px",
															minWidth:'300px'
														}}
														>
																<CardHeader
																title={<Line first={value.name} second={value.type}/>}
																subtitle={<Line first={value.price} second={value.time}/>}
																actAsExpander={true}
																showExpandableButton={true}
																textStyle={{paddingRight:'60px'}}
																subtitleStyle={{marginTop:"8px"}}
																/>
																<CardTitle expandable={true} title={value.director} subtitle={value.actor} />
																<CardText expandable={true}>
																		{value.content}
																</CardText>
																<CardActions expandable={true}>
																		<RaisedButton 
                                    label={"买买买"}
                                    onTouchTap={()=>{
                                      this.props.AppState.WantTobuy(value)
                                      this.setState({
                                        open:true
                                      })
                                    }}/>
																</CardActions>
														</Card>
												))
										}
                    <Dialog
                    title="客官来选座啦！"
                    open={this.state.open}
                    onRequestClose={()=>{this.setState({open:false})}}
                    actions={[
                      // tslint:disable-next-line:jsx-wrap-multiline
                      <FlatButton
                        label="Ok"
                        primary={true}
                        onTouchTap={()=>{this.setState({open:false})}}
                      />
                    ]}>
                      <Choose/>
                    </Dialog>
                    </div>
								</div>
						</div>
				)
		}
}

export default Main