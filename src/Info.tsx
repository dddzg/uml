import * as React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {MovieData} from './data'
import RaisedButton from 'material-ui/RaisedButton'
import {inject,observer} from 'mobx-react'
import {AppState} from './AppState' 
import Paper from 'material-ui/Paper';
import './Info.less'
const Line=({first,second})=>(
		<div className="line">
				<div>{first}</div>
				<div style={{marginLeft:"24px"}}>{second}</div>
		</div>
)
@inject('AppState')
@observer
class Info extends React.Component<{
	open:boolean,
	AppState?:AppState
},{
  data?:MovieData[]
}> {
		constructor(props:any) {
				super(props);
        this.state={
          data:this.props.AppState.movies
        }
		}
		haveBought=(movie:MovieData)=>this.props.AppState.moviesBuy.includes(movie)
		render(){
				return(
						<div className="main" style={{margin:`0 0 0 ${this.props.open?260:0}px`}}>
								<div className="main-content">
                    <Card>
                      <CardHeader
                        title={this.props.AppState.name}
                        subtitle={this.props.AppState.school}
                        avatar="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496682198&di=7183834abcd221d032d955192c06c518&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201510%2F22%2F20151022155055_3GBQ8.thumb.700_0.jpeg"
                      />
                    </Card>
                    <div className="onebyone">
										{
												this.props.AppState.moviesBuy.map((value,index)=>(
														<Card
														key={index}
														initiallyExpanded={false}
														style={{
															margin:"14px 8px 24px",
															minWidth:'300px'
														}}
                            className="card"
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
																{/*<CardActions expandable={true}>
																		<RaisedButton 
                                    disabled={this.haveBought(value)}
                                    label={this.haveBought(value)?"你已经买了啦":"买买买"}
                                    onTouchTap={()=>{
                                      this.props.AppState.buy(value) && this.forceUpdate()
                                    }}/>
																</CardActions>*/}
														</Card>
												))
										}
                    </div>
								</div>
						</div>
				)
		}
}

export default Info