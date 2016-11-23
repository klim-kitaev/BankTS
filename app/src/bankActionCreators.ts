import {ActionTypes,IAction,IActionAmount} from './constants'


const bankActionCreators = {

    depositIntoAccount(amount:number):IActionAmount{
        return{
            type:ActionTypes.DEPOSIT_INTO_ACCOUNT,
            amount:amount
        };
    },

    withdrawFromAccount(amount:number):IActionAmount{
        return{
            type:ActionTypes.WITHDRAW_FROM_ACCOUNT,
            amount:amount
        };
    },
    toggleExchange():IAction{
        return{
            type:ActionTypes.TOGGLE_EXCHANGE
        }
    }
}

export default bankActionCreators;