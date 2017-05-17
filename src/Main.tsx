import * as React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {InitData} from './data'
import RaisedButton from 'material-ui/RaisedButton'
import './Main.less'
const Line=({first,second})=>(
    <div className="line">
        <div>{first}</div>
        <div style={{marginLeft:"24px"}}>{second}</div>
    </div>
)
class Main extends React.Component<any,{
    data:InitData[],
}> {
    data:InitData[]
    constructor(props) {
        super(props);
        this.data=require('./dzg.json')
        this.state={
            data:this.data,
        }
    }
    handleInput=(_,input)=>{
        let data=[];
        this.data.forEach(value=> {
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
    render(){
        return(
            <div style={{margin:"0 0 0 260px",paddingTop:"64px"}}>
                <div style={{margin:"16px 72px"}}>
                    <TextField
                    hintText="输入你想看的电影"
                    onChange={this.handleInput}
                    floatingLabelText="搜索"
                    fullWidth={true}
                    />
                    {
                        this.state.data.map((value,index)=>(
                            <Card 
                            key={index}  
                            initiallyExpanded={false} 
                            style={{margin:"14px 0px 24px"}}
                            >
                                <CardHeader
                                title={<Line first={value.name} second={value.type}/>}
                                subtitle={<Line first={value.price} second={value.time}/>}
                                actAsExpander={true}
                                showExpandableButton={true}
                                subtitleStyle={{marginTop:"8px"}}
                                />
                                <CardTitle expandable={true} title={value.director} subtitle={value.actor} />
                                <CardText expandable={true}>
                                    {value.content}
                                </CardText>
                                <CardActions expandable={true}>
                                    <RaisedButton label="买买买" />
                                </CardActions>
                            </Card>
                        ))
                    }
                </div>
            </div>
        )
    }
}


export default Main