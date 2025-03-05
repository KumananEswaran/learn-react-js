import Entry from './components/Entry';
import Header from './components/Header';
import journalData from './data';

const App = () => {
	const entryElements = journalData.map((data) => {
		return (
			<Entry
				key={data.id}
				{...data}
				// img={data.img}
				// title={data.title}
				// country={data.country}
				// googleMapsLink={data.googleMapsLink}
				// dates={data.dates}
				// text={data.text}
			/>
		);
	});
	return (
		<>
			<Header />
			{entryElements}
		</>
	);
};
export default App;
