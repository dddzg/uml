import {MovieData} from './data'
import {observable,computed,action} from 'mobx'
class AppState{
  movies:MovieData[]=[]
  moviesBuy:MovieData[]=[]
  @observable name='飞奔的啦啦啦'
  @observable school='华南理工大学'
  moviesStatus:Map<MovieData,boolean[][]>=new Map()
  nowSeat:boolean[][]=[]
  @action buy(movie:MovieData){
    if (!this.moviesBuy.includes(movie)) {
      this.moviesBuy.push(movie)
    }
    return true
  }
  @action WantTobuy(movie:MovieData){
    this.nowSeat=this.moviesStatus.get(movie)
    this.buy(movie)
    return true
  }

  constructor(){
    this.movies=require('./dzg.json')
    this.movies.forEach(value=>{
      this.moviesStatus.set(value,this.doubleArray(4,4))
    })
  }
  doubleArray(a:number,b:number){
    return Array.from(new Array(a),()=>Array.from(new Array(b),()=>false))
  }
}

export {AppState}