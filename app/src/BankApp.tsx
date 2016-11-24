import * as React from "react";
import { connect } from "react-redux";
import {IAmountDispatch,IDispatch,IState} from './constants'
import bankActionCreators from './bankActionCreators';

interface IBankAppProps {
    balance:number,
    showExchange:boolean,
    onDeposit:IAmountDispatch,
    onWithdraw:IAmountDispatch,
    onToggle:IDispatch
};

interface IBankAppState {
    amount:string
};

class BankApp extends React.Component<IBankAppProps, IBankAppState> {



    componentWillMount() {
        this.setState({amount:""});
    }
    

    handleDeposit(){
        this.props.onDeposit(parseFloat(this.state.amount));
        this.setState({amount:""});
    }

    handleWithdraw() {
    this.props.onWithdraw(parseFloat(this.state.amount));
    this.setState({amount:""});
    }

    handleChange(event:any){
        this.setState({amount:(event.target.value)});
    }

    refs: {
        [key: string]: (Element);
        amount: (HTMLInputElement);
    }

    public render(): JSX.Element {
        return (<div>
        <header><img src="//www.pro-react.com/logos/redux-bank.svg" width="150" height="150" /><br/>Redux Bank</header>
        <br />
        <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
        <div className="atm">
          <input type="text" placeholder="Enter Ammount" value={this.state.amount} onChange={this.handleChange.bind(this)} />
          <br />
          <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
          <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
        </div>
        <div className="info" onClick={this.props.onToggle}>
          <strong>Additional Info:</strong>
          <div className={this.props.showExchange? 'info--visible' : 'info--closed'}>
            <p><strong>Your account Manager:</strong> C. F. Frost </p>
            <p><strong>Pre approved credit limit:</strong> $500,000.00 </p>
          </div>
        </div>
        </div>);
    }
}

const mapStateToProps=(state:IState)=>{
    return{
        balance:state.balance,
        showExchange:state.ui.showExchange
    } as IBankAppProps
}

const mapDispatchToProps = (dispatch:any)=>{
    return{
        onDeposit:(amount:number)=>dispatch(bankActionCreators.depositIntoAccount(amount)),
        onWithdraw: (amount:number) => dispatch(bankActionCreators.withdrawFromAccount(amount)),
        onToggle: () => dispatch(bankActionCreators.toggleExchange())
    }
}

 const BankAppContainer = connect(mapStateToProps,mapDispatchToProps)(BankApp);

export default BankAppContainer

