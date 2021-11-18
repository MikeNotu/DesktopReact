function Table(props) {
    const Values = [{ number: 10 }, { number: 20 }, { number: 30 }];
    const TrueValue = 100;
    return (
        <div>
            <table>
                <tr>
                    <th>{TrueValue}</th>
                    <th>{props.number}</th>
                    <th>{Values[1].number}</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                </tr>
            </table>
        </div>
    );
}

export default Table;
