import {ActionTypes,IState,IUIState,IActionAmount,IAction} from './constants'
import update= require('react-addons-update');
import { combineReducers } from 'redux';


const initialState:IState={
    balance:0,
    ui:{
        showExchange:true
    }
};

const balanceReducer=(state:number=initialState.balance,action:IActionAmount)=>{
    switch (action.type) {
        case ActionTypes.DEPOSIT_INTO_ACCOUNT:
            return state+action.amount;
        case ActionTypes.WITHDRAW_FROM_ACCOUNT:
            return state-action.amount;
        default:
            return state;
    }
}

const uiReducer=(state:IUIState=initialState.ui,action:IAction)=>{
    switch(action.type){
        case ActionTypes.TOGGLE_EXCHANGE:
            return update(state,{showExchange:{$apply:currentState=>!currentState}});
        default:
        return state;
    }
}

const bankReducer = combineReducers<IState>({balance:balanceReducer,ui:uiReducer});

export default bankReducer;