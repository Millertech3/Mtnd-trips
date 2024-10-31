import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";

export const metadata = {
	title: "MTnD Trips | Find The Perfect Rental For The Title",
	description: "Find your dream rental property",
	keyword: "rental, find rental, find properties",
};
const Mainlayout = ({children}) => {
	return (
		<html lang="en">
			<body>
				<Navbar /><main>{children}</main>
				<Footer/>
			</body>
		</html>
	);
};

export default Mainlayout;
