import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

export default function HomeLayout() {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";
	return (
		<div className="align-element">
			<Header />
			<Navbar />
			<div className="align-element py-20">{isLoading ? <Loading /> : <Outlet />}</div>
		</div>
	);
}
