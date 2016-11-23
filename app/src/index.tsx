import * as React from "react";
import * as ReactDOM from "react-dom";
import {  Provider } from 'react-redux';
import bankStore from './bankStore';

import BankAppContainer from "./BankApp";

ReactDOM.render(
    <Provider store={bankStore}>
        <BankAppContainer />
    </Provider>,
    document.getElementById("example")
);