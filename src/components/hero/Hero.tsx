import HeroCarousal from "./HeroCarousal";
import HeroInfo from "./HeroInfo";

function Hero() {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
			<HeroInfo />
			<HeroCarousal />
		</section>
	);
}

export default Hero;
