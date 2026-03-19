import Image from "next/image";
import PageHero from "../components/PageHero";
import { FloatDiv, RevealDiv, RevealHeading, RevealText } from "../components/Animated";

export default function SustainabilityAndInnovationPage() {
	return (
		<>
			<PageHero image="/sustainabilityinnovation.png" title="Sustainability & Innovation">
				<div className="text-center text-white">
					<h1 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
						Sustainability & Innovation
					</h1>
				</div>
			</PageHero>

			<main>
				<section className="relative overflow-hidden bg-white py-14 md:py-20">
					<div className="ambient-orb ambient-orb-emerald left-[8%] top-12" />
					<div className="ambient-orb ambient-orb-sky right-[10%] bottom-10" />
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<RevealDiv>
							<RevealHeading className="mb-5 text-2xl font-bold text-black sm:text-3xl">
								Research & Innovation Lab
							</RevealHeading>
							<RevealText delay={0.08} className="mb-10 text-base leading-7 text-gray-600 md:mb-12 md:text-lg md:leading-8">
								The Research & Innovation Lab serves as the scientific backbone
								of Zero Waste, enabling data-driven circular transformation
								across materials, energy, and waste streams. Through continuous
								waste composition analysis and secondary product development,
								the Lab facilitates the transformation of complex waste streams
								into verified resources.
							</RevealText>
						</RevealDiv>

						<RevealDiv delay={0.12} className="flex justify-center">
							<FloatDiv>
								<Image
									src="/researchlab.png"
									alt="Research and innovation lab"
									width={1440}
									height={900}
									className="h-auto w-full max-w-xl object-cover md:max-w-2xl"
								/>
							</FloatDiv>
						</RevealDiv>
					</div>
				</section>
			</main>
		</>
	);
}
