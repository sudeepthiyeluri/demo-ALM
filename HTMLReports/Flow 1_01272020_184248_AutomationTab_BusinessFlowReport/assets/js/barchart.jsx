function CreateChart(inputData, id, ChartTitle, Total, Percent) {

	const { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Cell } = Recharts;
	function Getcolor(index) {
		if (inputData[index].name === "Passed")
			return '#54A81B';
		else if (inputData[index].name === "Failed")
			return '#E31123';
		else if (inputData[index].name === "Stopped")
			return '#ED5588';
		else if (inputData[index].name === "Other")
			return '#A21025';
		else if (inputData[index].name === "NA")
			return '#e3dfdb';
	}

	const SimpleBarChart = React.createClass({
		render() {
			return (
				<BarChart width={350} height={250} data={inputData}	margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="value">
						{
							inputData.map((entry, index) => (
								<Cell fill={Getcolor(index)} />
							))
						}
					</Bar>
				</BarChart>
			);
		}
	})

	ReactDOM.render(
		<SimpleBarChart />,
		document.getElementById(id)
	);


};