import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

import hero1 from "../../assets/hero1.webp";
import hero2 from "../../assets/hero2.webp";
import hero3 from "../../assets/hero3.webp";
import hero4 from "../../assets/hero4.webp";
// import Card from "../Card";

const carousalImages = [hero1, hero2, hero3, hero4];

function HeroCarousal() {
	return (
		<section className="hidden lg:block p-4">
			<Carousel>
				<CarouselContent>
					{carousalImages.map((image, index) => {
						return (
							<CarouselItem key={index}>
								<div className="p-4">
									<img
										src={image}
										className="h-[24rem] w-full block object-cover"
									/>
								</div>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
}

export default HeroCarousal;
