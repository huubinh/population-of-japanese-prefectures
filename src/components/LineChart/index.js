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
			"#058dc7",
			"#50b432",
			"#ed561b",
			"#dddf00",
			"#24cbe5",
			"#64e572",
			"#ff9655",
			"#fff263",
			"#6af9c4",
			"#6664e6",
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
				{
					condition: {
						maxWidth: 690,
					},
					chartOptions: {
						legend: {
							itemStyle: {
								fontSize: "16px",
							},
						},
						yAxis: {
							title: {
								text: "",
							},
						},
						xAxis: {
							title: {
								text: "",
							},
						},
					},
				},
			],
		},
	};

	return (
		<div className="container">
			<section id="line-chart">
				<HighchartsReact highcharts={Highcharts} options={options} />
			</section>
		</div>
	);
};

export default LineChart;
