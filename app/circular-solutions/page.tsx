import Image from "next/image";
import PageHero from "../components/PageHero";
import {
	FloatDiv,
	RevealDiv,
	RevealHeading,
	RevealText,
	StaggerGrid,
	StaggerItem,
} from "../components/Animated";

const secondaryEcosystemItems = [
	{ icon: "/icons/municipalities.svg", label: "Municipalities" },
	{ icon: "/icons/publicinstitutions.svg", label: "Public Institutions" },
	{ icon: "/icons/communities.svg", label: "Communities" },
	{ icon: "/icons/retailmalls.svg", label: "Retail & Malls" },
	{ icon: "/icons/realestate.svg", label: "Real Estate" },
	{ icon: "/icons/fertilizers.svg", label: "Fertilizers Industry", iconWidthClass: "w-20" },
	{ icon: "/icons/oilgas.svg", label: "Oil & Gas", iconWidthClass: "w-28" },
	{ icon: "/icons/shipyards.svg", label: "Shipyards", iconWidthClass: "w-28" },
	{ icon: "/icons/ports.svg", label: "Ports" },
	{ icon: "/icons/automotive.svg", label: "Automotive Industry" },
	{ icon: "/icons/paint.svg", label: "Paint Industry", iconWidthClass: "w-28" },
	{ icon: "/icons/aluminium.svg", label: "Aluminium Industry" },
	{ icon: "/icons/laboratories.svg", label: "Laboratories" },
	{ icon: "/icons/chemical.svg", label: "Chemical Industry", iconWidthClass: "w-20" },
	{ icon: "/icons/consumer.svg", label: "Consumer Goods Industry" },
	{ icon: "/icons/manufacturing.svg", label: "Manufacturing Industry", iconWidthClass: "w-28" },
	{ icon: "/icons/textile.svg", label: "Textile Industry" },
	{ icon: "/icons/metal.svg", label: "Metal Industry" },
	{ icon: "/icons/renewable.svg", label: "Renewable Industry", iconWidthClass: "w-20" },
	{ icon: "/icons/marine.svg", label: "Marine Industry", iconWidthClass: "w-28" },
];

const circularSolutionSections = [
	{
		title: "Hazardous and Non Hazardous Waste Processing",
		description:
			"Zero Waste processes both hazardous and non-hazardous waste streams through structured, compliant, and traceable systems. We deliver the operational domain through specialized project management and waste analysis. Hazardous waste streams are managed under strict safety protocols with customized logistics and advanced treatment pathways. Non-hazardous waste streams, comprising recyclable and recoverable materials from industrial and commercial activities, are systematically directed into circular processing routes.",
		image: "/hazardouswasteprocessing.png",
		imageAlt: "Hazardous and non hazardous waste processing",
		backgroundClass: "bg-white",
	},
	{
		title: "Burnt, Expired, Distressed Cargo and Products Processing",
		description:
			"Zero Waste manages burnt, distressed, and expired cargo streams from maritime environments, ports, and industries through multiple management approaches, including specialized project management, systematic waste characterization, customized logistics to circular processing facilities, and the conversion of waste materials into secondary products.",
		image: "/burntcargoprocessing.png",
		imageAlt: "Burnt expired distressed cargo and products processing",
		backgroundClass: "bg-white",
	},
	{
		title: "Marine Cleanup and Waste Processing",
		description:
			"Zero Waste manages resources for marine cleanup operations, including the remediation of seashores, beaches, and water bays contaminated by oil, chemical, and debris spills. Waste streams generated from these operations are collected through customized logistics, transported to circular processing facilities, and converted into secondary products.",
		image: "/marinecleanupprocessing.png",
		imageAlt: "Marine cleanup and waste processing",
		backgroundClass: "bg-white",
	},
	{
		title: "Demolition, Fitout Removal, and Waste Processing",
		description:
			"Zero Waste has specialized expertise in managing demolition and fit-out removal projects. Waste generated from these activities is collected and processed through structured material streams, transforming waste into secondary products.",
		image: "/fitoutremovalprocessing.png",
		imageAlt: "Demolition fitout removal and waste processing",
		backgroundClass: "bg-white",
	},
];

export default function CircularSolutionsPage() {
	return (
		<>
			<PageHero image="/circularsolutions.png" title="Circular Solutions">
				<div className="text-center text-white">
					<h1 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
						Circular Solutions
					</h1>
				</div>
			</PageHero>

			<main>
				<section className="relative overflow-hidden bg-white py-14 md:py-20">
					<div className="ambient-orb ambient-orb-emerald left-[8%] top-10" />
					<div className="ambient-orb ambient-orb-sky right-[10%] top-18" />
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div>
							<RevealHeading className="mb-5 text-2xl font-bold text-black sm:text-3xl">
								Primary Ecosystem
							</RevealHeading>
							<RevealText delay={0.08} className="mb-10 text-base leading-7 text-gray-600 md:mb-14 md:text-lg md:leading-8">
								Zero Waste engages with a diverse primary ecosystem, including
								municipalities, public institutions, communities, and industrial
								sectors to facilitate the transition toward circular resource
								management. We provide customized circular solutions to our
								partners, delivering efficiency, innovation, and traceability.
							</RevealText>
						</div>

						<StaggerGrid className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-10 md:grid-cols-4 md:gap-y-12">
							{secondaryEcosystemItems.map((item) => (
								<StaggerItem
									key={item.label}
									className="flex w-full max-w-40 flex-col items-center px-2 py-2 text-center sm:px-4"
								>
									<div className="mb-4 flex h-24 w-full items-center justify-center sm:mb-5 sm:h-32">
										<Image
											src={item.icon}
											alt={item.label}
											width={96}
											height={96}
											className={`h-auto ${item.iconWidthClass ?? "w-24"} object-contain`}
										/>
									</div>
									<p className="max-w-44 text-sm leading-6 text-gray-600">
										{item.label}
									</p>
								</StaggerItem>
							))}
						</StaggerGrid>
					</div>
				</section>

				{circularSolutionSections.map((section) => {
					const isFullWidthSection =
						section.title === "Hazardous and Non Hazardous Waste Processing" ||
						section.title ===
							"Burnt, Expired, Distressed Cargo and Products Processing" ||
						section.title === "Marine Cleanup and Waste Processing" ||
						section.title ===
							"Demolition, Fitout Removal, and Waste Processing";

					return (
					<section
						key={section.title}
						className={`relative overflow-hidden ${section.backgroundClass} py-14 md:py-20`}
					>
						<div className="ambient-orb ambient-orb-emerald left-[6%] top-14" />
						<div className="ambient-orb ambient-orb-sky right-[10%] bottom-10" />
						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<RevealDiv className={isFullWidthSection ? "" : "max-w-4xl"}>
								<RevealHeading className="mb-5 text-2xl font-bold text-black sm:text-3xl">
									{section.title}
								</RevealHeading>
								<RevealText delay={0.08} className="mb-10 text-base leading-7 text-gray-600 md:mb-12 md:text-lg md:leading-8">
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
