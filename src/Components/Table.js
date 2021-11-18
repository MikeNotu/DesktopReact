function Table(props) {
    return (
        <div>
            <table>
                <tr>
                    <th>Day</th>
                    <th>Month</th>
                    <th>Year</th>
                </tr>
                <tr>
                    <th>{props.day}</th>
                    <th>{props.month}</th>
                    <th>{props.year}</th>
                </tr>
            </table>
        </div>
    );
}

export default Table;
