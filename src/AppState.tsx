import {MovieData} from './data'
import {observable,computed,action} from 'mobx'
class AppState{
  movies:MovieData[]=[]
  moviesBuy:MovieData[]=[]
  @observable name='飞奔的啦啦啦'
  @observable school='华南理工大学'
  @action buy(movie:MovieData){
    this.moviesBuy.push(movie)
    return true
  }
  constructor(){
    this.movies=require('./dzg.json')
  }
}

export {AppState}