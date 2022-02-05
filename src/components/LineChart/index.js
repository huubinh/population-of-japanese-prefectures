import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = ({ selectedPrefs }) => {
	const chartData = selectedPrefs.map((selectedPref) => {
		const name = selectedPref.prefName;
		const data = selectedPref.prefPopulation.map((population) => {
			return population.value;
		});
		const pointStart = selectedPref.prefPopulation[0].year;
		const pointInterval =
			selectedPref.prefPopulation[1].year - selectedPref.prefPopulation[0].year;

		return {
			name: name,
			data: data,
			pointStart: pointStart,
			pointInterval: pointInterval,
		};
	});
	const options = {
		title: {
			text: "",
		},

		yAxis: {
			title: {
				text: "人口",
			},
			showEmpty: false,
		},

		xAxis: {
			title: {
				text: "年",
			},
			showEmpty: false,
		},

		legend: {
			layout: "vertical",
			align: "right",
			verticalAlign: "middle",
		},

		series: chartData,

		credits: {
			enabled: false,
		},

		responsive: {
			rules: [
				{
					condition: {
						maxWidth: 640,
					},
					chartOptions: {
						legend: {
							layout: "horizontal",
							align: "center",
							verticalAlign: "bottom",
						},
					},
				},
			],
		},
	};

	return (
		<section id="line-chart">
			<div className="container">
				<HighchartsReact highcharts={Highcharts} options={options} />
			</div>
		</section>
	);
};

export default LineChart;
