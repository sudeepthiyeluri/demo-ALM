function CreateChart(data, id, ChartTitle, Total, Percent) {
	const { PieChart, Pie, Legend, Sector, Cell } = Recharts;
	function Getcolor(props) {
		if (props.name === "Passed")
			return '#54A81B';
		else if (props.name === "Failed")
			return '#E31123';
		else if (props.name === "Stopped")
			return '#ED5588';
		else if (props.name === "Other")
			return '#A21025';
		else if (props.name === "NA")
			return '#e3dfdb';
	}

    const TwoSimplePieChart = React.createClass({
        render() {
            return (
                <PieChart width={300} height={500}>
                    <Pie isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
                        {
                            data.map((entry, index) => <Cell fill={Getcolor(entry)} />)
                        }
                    </Pie>
                </PieChart>
            );
        }
    });

	ReactDOM.render(
		<TwoSimplePieChart />,
		document.getElementById(id)
	);

}