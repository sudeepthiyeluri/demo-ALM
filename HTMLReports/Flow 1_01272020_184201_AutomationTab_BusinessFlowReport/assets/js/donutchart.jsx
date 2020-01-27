function CreateChart(inputDatax, id, ChartTitle, Total) {
	const inputData = [];
	var j = 0;
	for (var i = 0; i < inputDatax.length; i++) {
		if (inputDatax[i].value !== 0) {
			inputData[j] = inputDatax[i];
			j = j + 1;
		}
	}
	const { PieChart, Pie, Legend, Cell, XAxis, YAxis, CartesianGrid, Tooltip } = Recharts;
	const RADIAN = Math.PI / 180;
	//const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
	//	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	//	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	//	const y = cy + radius * Math.sin(-midAngle * RADIAN);
	//	return (
	//		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
	//			{`${(percent * 100).toFixed(0)}%`}
	//		</text>
	//	);
	//};
	//const CustomLabel = React.createClass({
	//	propTypes: {
	//		type: PropTypes.string,
	//		payload: PropTypes.array,
	//		label: PropTypes.string,
	//	},
	//	render() {
	//		const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
	//			fill, payload, percent, value, active, label, name, color } = this.props;

	//		const sin = Math.sin(-RADIAN * midAngle);
	//		const cos = Math.cos(-RADIAN * midAngle);
	//		const sx = cx + (outerRadius + 5) * cos;
	//		const sy = cy + (outerRadius + 5) * sin;
	//		const mx = cx + (outerRadius + 20) * cos;
	//		const my = cy + (outerRadius + 20) * sin;
	//		const ex = mx + (cos >= 0 ? 1 : -1) * 20;
	//		const ey = my;
	//		const textAnchor = cos >= 0 ? 'start' : 'end';

	//		return (
	//			<g>
	//				<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
	//				<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
	//				<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} size="12" fontSize="12" fill={fill}>
	//					{`${name}(${value})`}
	//				</text>
	//			</g>
	//		);
	//	}


	//});

	function Getcolor(props) {
		if (props.name === "Passed")
			return '#54A81B';
		else if (props.name === "Failed")
			return '#E31123';
		else if (props.name === "Stopped")
			return '#ED5588';
		else if (props.name === "Other")
			return '#1B3651';
		else if (props.name === "NA")
			return '#e3dfdb';
	}

	const DonutChart = React.createClass({
		render() {
			const { value, name } = this.props;
			return (
				<PieChart width={300} height={500}>
					<Pie data={inputData} nameKey="name" dataKey="value" cx={180} cy={150} innerRadius={90} outerRadius={110} fill="#82ca9d" label>
						{
							inputData.map((entry, index) => <Cell fill={Getcolor(inputData[index])} />)
						}
					</Pie>
				</PieChart>
			);
		}
	})

	ReactDOM.render(
		<DonutChart />,
		document.getElementById(id)

	);
}