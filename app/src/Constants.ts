 export  enum  ActionTypes{
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

 