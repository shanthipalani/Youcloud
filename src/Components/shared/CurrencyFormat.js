// react
import React from 'react'; 

function CurrencyFormat(props ) {
    const { value, currency: propCurrency } = props;
     
    const currency = propCurrency || {
        code: '$',
        symbol: '$',
        name: '$',
        rate: 1,
    };

    return (
        <React.Fragment>
            {currency.symbol}
            {(value * currency.rate).toFixed(2)}
        </React.Fragment>
    );
}

export default CurrencyFormat;
