 export const   enum  ActionTypes{
    WITHDRAW_FROM_ACCOUNT,
    DEPOSIT_INTO_ACCOUNT,
    TOGGLE_EXCHANGE
}

export interface IAction{
    type:ActionTypes;
}

export interface IActionAmount extends  IAction{
    amount:number;
}

export interface IUIState{
    showExchange:boolean;
} 

export interface IState{
    balance:number;
    ui:IUIState;
}

export interface IDispatch{
    ():void;
}

export interface IAmountDispatch{
    (amount: number):void;
}

 