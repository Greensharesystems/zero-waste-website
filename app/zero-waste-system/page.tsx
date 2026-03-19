import Image from "next/image";
import PageHero from "../components/PageHero";
import { FloatDiv, RevealDiv, RevealHeading, RevealText } from "../components/Animated";

const zeroWasteSystemSections = [
	{
		title: "Circular Intelligence & Traceability Platform",
		description:
			"Greenshare is the digital intelligence and traceability layer of the Zero Waste system, structured around three integrated pillars: Engage, Transform, and Sustain. Engage aligns stakeholders by assessing and activating the system across key dimensions, enabling coordinated participation. Transform enables structured circular loops by directing waste streams into traceable resource pathways and converting waste into secondary resources. Sustain drives continuous improvement through data-driven dashboards, certification frameworks, ESG indicators, and adaptive feedback mechanisms, ensuring transparency and long-term circular value creation.",
		image: "/greensharemodel.png",
		imageAlt: "Circular intelligence and traceability platform",
		backgroundClass: "bg-white",
	},
	{
		title: "Engage",
		description:
			"Engage aligns stakeholders by activating system-level engagement, including waste characterization studies, baseline development, and material flow mapping. Through this process, operations and resource flows are analyzed to identify value leakages, set improvement targets, and uncover high-impact circular opportunities across the ecosystem.",
		image: "/engage.png",
		imageAlt: "Engage operational process",
		backgroundClass: "bg-white",
	},
	{
		title: "Transform",
		description:
			"Transform converts circular priorities into measurable operational outcomes. Waste streams received at the Zero Waste Circular Processing Facilities are directed into structured resource pathways, primarily material and energy routes, where they are converted into secondary resources. Through this process, we generate economic value by reinjecting resources into continuous circular loops, minimizing environmental impact, and eliminating dependency on landfills.",
		image: "/transform.png",
		imageAlt: "Transform operational process",
		backgroundClass: "bg-white",
	},
	{
		title: "Sustain",
		description:
			"Sustain records circular performance and end-to-end traceability. Through real-time dashboards, integrated traceability systems, performance analytics, and adaptive feedback, we continuously monitor waste streams from collection to resource conversion and reintegration within the secondary ecosystem, creating a continuous circular loop, ensuring full visibility while enabling measurable ESG performance. Certificates of reception and circularity provide compliance assurance and verified outcomes.",
		image: "/sustain.png",
		imageAlt: "Sustain operational process",
		backgroundClass: "bg-white",
	},
];

export default function ZeroWasteSystemPage() {
	return (
		<>
			<PageHero image="/zerowastesystem.png" title="Zero Waste System">
				<div className="text-center text-white">
					<h1 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
						Zero Waste System
					</h1>
				</div>
			</PageHero>

			<main>
				{zeroWasteSystemSections.map((section) => {
					return (
					<section
						key={section.title}
						className={`relative overflow-hidden ${section.backgroundClass} py-14 md:py-20`}
					>
						<div className="ambient-orb ambient-orb-emerald left-[8%] top-12" />
						<div className="ambient-orb ambient-orb-sky right-[10%] bottom-12" />
						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<RevealDiv>
								<RevealHeading className="mb-5 text-2xl font-bold text-black sm:text-3xl">
									{section.title}
								</RevealHeading>
								<RevealText delay={0.08} className="mb-10 whitespace-pre-line text-base leading-7 text-gray-600 md:mb-12 md:text-lg md:leading-8">
									{section.description}
								</RevealText>
							</RevealDiv>

							<RevealDiv delay={0.12} className="flex justify-center">
								<FloatDiv>
									<Image
										src={section.image}
										alt={section.imageAlt}
										width={1440}
										height={900}
										className="h-auto w-full max-w-xl object-cover md:max-w-2xl"
									/>
								</FloatDiv>
							</RevealDiv>
						</div>
					</section>
					);
				})}
			</main>
		</>
	);
}
