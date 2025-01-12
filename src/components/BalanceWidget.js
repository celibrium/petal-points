import React, { useContext } from 'react';
import GlobalContext from '../GlobalContext';
import petal from '../images/petal.png'
import './BalanceWidget.css'

function BalanceWidget() {
    const { balance } = useContext(GlobalContext); // Access the global variable

    return (
        <div className="balance-widget">
            <p>
                <strong>Petals:</strong>&nbsp;{balance}
                <img src={petal} alt="Petal Icon" className="petal-icon" />
            </p>
        </div>
    );
};

export default BalanceWidget;