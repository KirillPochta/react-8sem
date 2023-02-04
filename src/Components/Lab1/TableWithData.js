import React from 'react';
import cl from './TableWithData.module.css'
import ChessBoard from "./ChessBoard"

const TableWithData = () => {
    const data = [{
        stock_name: "EFX",
        company_name: "Equifax Inc",
        price: 163.55,
        currency: "USD",
        change: "+9.03"
    }, {
        stock_name: "IRM",
        company_name: "Iron Mountain Inc",
        price: 33.21,
        currency: "USD",
        change: "+1.42"
    }, {
        stock_name: "NTAP",
        company_name: "NetApp Inc",
        price: 54.81,
        currency: "USD",
        change: "-6.01"
    }, {
        stock_name: "CTL",
        company_name: "Centurylink Inc",
        price: 13.79,
        currency: "USD",
        change: "-1.37"
    }]
    const tbData = data.map((item, index) => (
        <table key={index}>
            <thead>
            <tr>
                <th>{item.stock_name}</th>
                <th>{item.company_name}</th>
                <th>{item.price}</th>
                <th>{item.currency}</th>
                {item.change < 0 ? (<th className={cl.badChange}>{item.change}</th>) : (
                    <th className={cl.normalChange}>{item.change}</th>)}
            </tr>
            </thead>
        </table>
    ))
    const date = new Date()
    return (
        <div>
            Hello
            world {date.getHours() + ":" + date.getMinutes() + "/" + date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()}
            <hr/>

            task 2{tbData}

            <hr/>
            <ChessBoard/>
        </div>
    );
};

export default TableWithData;
