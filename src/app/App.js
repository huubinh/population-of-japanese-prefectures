import { useState, useEffect } from "react";
import Header from "../components/Header";
import Checkboxes from "../components/Checkboxes";
import LineChart from "../components/LineChart";
import Footer from "../components/Footer";
import "./App.css";

const App = () => {
	const [prefectures, setPrefectures] = useState([]);
	const [selectedPrefs, setSelectedPrefs] = useState([]);

	useEffect(() => {
		const getPrefectures = async () => {
			const prefecturesFromApi = await fetchPrefectures();
			setPrefectures(prefecturesFromApi);
		};

		getPrefectures();
	}, []);

	const fetchPrefectures = async () => {
		const response = await fetch(
			"https://opendata.resas-portal.go.jp/api/v1/prefectures",
			{
				method: "GET",
				headers: { "X-API-KEY": "XJxXP5YORDkCAtIvwo3j4PGG9A6nYNaTKsMtLWf1" },
			}
		);
		const data = await response.json();
		return data.result;
	};

	const selectPrefecture = async (prefecture) => {
		const response = await fetch(
			`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefecture.prefCode}`,
			{
				method: "GET",
				headers: { "X-API-KEY": "XJxXP5YORDkCAtIvwo3j4PGG9A6nYNaTKsMtLWf1" },
			}
		);
		const data = await response.json();

		const currentYear = new Date().getFullYear();
		const prefPopulation = await data.result.data[0].data.filter(
			(population) => population.year <= currentYear
		);
		const selectPref = { ...prefecture, prefPopulation: prefPopulation };
		setSelectedPrefs([...selectedPrefs, selectPref]);
	};

	const deselectPrefecture = (prefCode) => {
		setSelectedPrefs(
			selectedPrefs.filter((prefecture) => prefecture.prefCode !== prefCode)
		);
	};

	return (
		<div>
			<Header />
			{prefectures && (
				<Checkboxes
					prefectures={prefectures}
					selectPrefecture={selectPrefecture}
					deselectPrefecture={deselectPrefecture}
				/>
			)}
			{selectedPrefs.length ? (
				<LineChart selectedPrefs={selectedPrefs} />
			) : (
				<h4 style={{ margin: "18px 0 0 0", textAlign: "center" }}>
					都道府県を選択してください。
				</h4>
			)}
			<Footer />
		</div>
	);
};

export default App;
