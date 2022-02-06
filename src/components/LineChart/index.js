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
		colors: [
			"#058DC7",
			"#50B432",
			"#ED561B",
			"#DDDF00",
			"#24CBE5",
			"#64E572",
			"#FF9655",
			"#FFF263",
			"#6AF9C4",
		],

		chart: {
			backgroundColor: "#333",
		},

		title: {
			text: "",
		},

		yAxis: {
			title: {
				text: "人口",
				align: "high",
			},

			showEmpty: false,
		},

		xAxis: {
			title: {
				text: "年",
				align: "high",
			},
			showEmpty: false,
		},

		legend: {
			layout: "vertical",
			align: "right",
			verticalAlign: "middle",
			itemStyle: {
				color: "#f5f5f5",
				fontFamily: "Zen Maru Gothic, sans-serif",
				fontSize: "19px",
				fontWeight: "normal",
			},
			itemHoverStyle: {
				color: "#fff",
			},
			itemMarginBottom: 15,
		},

		series: chartData,

		credits: {
			enabled: false,
		},

		responsive: {
			rules: [
				{
					condition: {
						maxWidth: 860,
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
