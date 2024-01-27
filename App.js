import React from 'react'
import { createStore,combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
const App = () => {
  const logger=createLogger()
  const Buycake="buycake";
  const Buyicream="buyicream";
  const buycakes=()=>{
    return{
      type:Buycake,
    };
  }
  const buyicream=()=>{
    return{
      type:Buyicream,
    };
  }
  const initialState={
    numberofcake:10,
    numberoficreams:20,
  }
  const cakereducer=(state=initialState,action)=>{
    switch(action.type){
      case Buycake:
        return{
          numberofcake:state.numberofcake-3
        }
        default:
          return state;
    }
  }
  const icreamreducer=(state=initialState,action)=>{
    switch(action.type){
      case Buyicream:
        return{
          numberoficreams:state.numberoficreams -4
        }
        default:
          return state;
    }
  }
  const rootreducer=combineReducers({
    cake:cakereducer,
    icream:icreamreducer,
  })
  const store = createStore(rootreducer, applyMiddleware(logger));
  console.log("Initial state", store.getState());
  const unsubscribe=store.subscribe(()=>console.log('Updated state',store.getState()));
  store.dispatch(buycakes());
  store.dispatch(buycakes());
  store.dispatch(buyicream());
  unsubscribe();
  return (
    <div>
      
    </div>
  )
}

export default App
