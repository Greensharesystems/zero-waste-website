import Image from "next/image";
import PageHero from "../components/PageHero";
import {
	RevealHeading,
	RevealText,
	StaggerGrid,
	StaggerItem,
} from "../components/Animated";

const authorityItems = [
	{ image: "/supremecouncil.png", label: "Supreme Council of Energy", imageClassName: "w-52" },
	{ image: "/decca.png", label: "Dubai Environment and Climate Change Authority", imageClassName: "w-40" },
	{ image: "/dubaimunicipality.svg", label: "Dubai Municipality", imageClassName: "w-48" },
	{ image: "/ddalogo.png", label: "Dubai Development Authority", imageClassName: "w-48" },
	{ image: "/trakhees.png", label: "Trakhees", imageClassName: "w-40" },
	{ image: "/dubaisouth.png", label: "Dubai South", imageClassName: "w-20" },
	{ image: "/diclogo.svg", label: "Dubai International City", imageClassName: "w-48" },
	{ image: "/eadlogo.png", label: "Environmental Agency Abu Dhabi", imageClassName: "w-48" },
];

const isoItems = [
	{
		image: "/iso.png",
		label: "9001:2015 Quality Management System",
		code: "9001:2015",
		titleLines: ["Quality Management", "System"],
	},
	{
		image: "/iso.png",
		label: "14001:2015 Environmental Management System",
		code: "14001:2015",
		titleLines: ["Environmental Management", "System"],
	},
	{
		image: "/iso.png",
		label: "45001:2018 Occupational Health and Safety Management System",
		code: "45001:2018",
		titleLines: ["Occupational Health", "and Safety", "Management System"],
	},
];

const primaryEcosystemItems = [
	{
		image: "/primarypartners.png",
		label: "Primary Partners",
		imageClassName: "w-48 md:w-32 lg:w-36",
		containerClassName: "col-start-1 row-start-1 row-span-2 md:col-span-1 md:col-start-1 md:row-start-1 md:row-span-2",
		frameClassName: "h-54 md:min-h-[18rem] lg:min-h-[20rem]",
	},
	{ image: "/logos/amazonlogo.jpg", label: "Amazon", imageClassName: "w-28" },
	{ image: "/logos/alec.png", label: "alec", imageClassName: "w-28" },
	{ image: "/logos/alrawabi.png", label: "Al Rawabi", imageClassName: "w-28" },
	{ image: "/logos/qatarsteel.png", label: "Qatar Steel", imageClassName: "w-28" },
	{ image: "/logos/alshirawi.png", label: "Al Shirawi", imageClassName: "w-32" },
	{ image: "/logos/drydockworld.jpg", label: "Drydock World", imageClassName: "w-32" },
	{ image: "/logos/aptglobal.png", label: "APT Global", imageClassName: "w-32" },
	{ image: "/logos/fujairahport.jpg", label: "Fujairah Port", imageClassName: "w-28" },
	{ image: "/logos/dpworld.png", label: "DP World", imageClassName: "w-28" },
	{ image: "/logos/adnoc.png", label: "ADNOC", imageClassName: "w-32" },
	{ image: "/logos/adports.png", label: "Abu Dhabi Ports", imageClassName: "w-44" },
	{ image: "/logos/addresshotel.png", label: "Address Hotels", imageClassName: "w-28" },
	{ image: "/logos/unilever.png", label: "Unilever", imageClassName: "w-24" },
];

const secondaryEcosystemItems = [
	{
		image: "/logos/secondarypartners.png",
		label: "Secondary Partners",
		imageClassName: "w-64 md:w-60",
	},
	{ image: "/logos/starcement.png", label: "Star Cement", imageClassName: "w-24" },
	{ image: "/logos/jswcement.png", label: "JSW Cement", imageClassName: "w-36" },
	{ image: "/logos/fujairahcement.jpg", label: "Fujairah Cement", imageClassName: "w-20" },
	{ image: "/logos/holcim.png", label: "Holcim", imageClassName: "w-36" },
	{ image: "/logos/borouge.png", label: "Borouge", imageClassName: "w-32" },
	{ image: "/logos/unionpaper.png", label: "Union Paper Mills", imageClassName: "w-16" },
	{ image: "/logos/agsi.png", label: "Arabian Gulf Steel Industries", imageClassName: "w-28" },
	{ image: "/logos/envicare.jpg", label: "Envicare", imageClassName: "w-32" },
	{ image: "/logos/alkhaleejpolymers.png", label: "Al Khaleej Polymers", imageClassName: "w-28" },
];

export default function EcosystemPartnersPage() {
	return (
		<>
			<PageHero image="/ecosystempartners.png" title="Ecosystem Partners">
				<div className="text-center text-white">
					<h1 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
						Ecosystem Partners
					</h1>
				</div>
			</PageHero>

			<main>
				<section className="relative overflow-hidden bg-white py-14 md:py-20">
					<div className="ambient-orb ambient-orb-emerald left-[7%] top-12" />
					<div className="ambient-orb ambient-orb-sky right-[10%] top-20" />
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="w-full">
							<RevealText className="mb-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
								Zero Waste operates within an integrated ecosystem of regulators,
								municipalities, certification bodies, and partners. Through
								structured collaboration, we align policy, operations,
								compliance, and partner participation to enable traceable
								material flows and scalable circular outcomes.
							</RevealText>
							<RevealHeading delay={0.08} className="mb-10 text-2xl font-bold text-black sm:text-3xl md:mb-14">
								Authorities
							</RevealHeading>
						</div>

						<StaggerGrid className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-10 md:grid-cols-4">
							{authorityItems.map((item) => (
								<StaggerItem key={item.label} className="flex w-full items-center justify-center">
									<div className="flex h-28 w-full items-center justify-center sm:h-36 md:h-44">
										<Image
											src={item.image}
											alt={item.label}
											width={176}
											height={176}
											className={`mx-auto h-auto ${item.imageClassName} object-contain`}
										/>
									</div>
								</StaggerItem>
							))}
						</StaggerGrid>
					</div>
				</section>

				<section className="relative overflow-hidden bg-white py-14 md:py-20">
					<div className="ambient-orb ambient-orb-sky left-[8%] top-16" />
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="w-full">
							<RevealHeading className="mb-5 text-2xl font-bold text-black sm:text-3xl">ISO - International Organization for Standardization</RevealHeading>
						</div>

						<StaggerGrid className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
							{isoItems.map((item) => (
								<StaggerItem key={item.label} className="flex flex-col items-center px-4 py-2 text-center sm:px-6 sm:py-4">
									<div className="mb-4 flex h-24 w-24 items-center justify-center sm:mb-5 sm:h-28 sm:w-28">
										<Image
											src={item.image}
											alt={item.label}
											width={96}
											height={96}
											className="h-auto w-20 object-contain"
										/>
									</div>
									<div className="max-w-52 text-sm leading-6 text-gray-600">
										{item.code ? (
											<>
												<p className="font-bold text-black">{item.code}</p>
												<p>
													{item.titleLines?.map((line) => (
														<span key={line} className="block">
															{line}
														</span>
													))}
												</p>
											</>
										) : (
											<p>{item.label}</p>
										)}
									</div>
								</StaggerItem>
							))}
						</StaggerGrid>
					</div>
				</section>

				<section className="relative overflow-hidden bg-white py-14 md:py-20">
					<div className="ambient-orb ambient-orb-emerald right-[8%] top-10" />
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="w-full">
							<RevealHeading className="mb-5 text-2xl font-bold text-black sm:text-3xl">
								Primary Ecosystem Partners
							</RevealHeading>
						</div>

						<StaggerGrid
							viewport={{ once: true, amount: 0.05 }}
							className="mt-8 grid grid-cols-2 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-3 md:mt-12 md:grid-cols-5 md:grid-rows-3 md:auto-rows-fr md:gap-x-8 md:gap-y-10"
						>
							{primaryEcosystemItems.map((item) => (
								<StaggerItem
									key={item.label}
									className={`flex w-full justify-self-center items-center justify-center ${item.containerClassName ?? ""}`}
								>
									<div
										className={`flex h-24 w-full items-center justify-center overflow-hidden sm:h-32 md:h-40 ${item.frameClassName ?? ""}`}
									>
										<Image
											src={item.image}
											alt={item.label}
											width={176}
											height={176}
											className={`mx-auto block max-h-full h-auto ${item.imageClassName} object-contain`}
										/>
									</div>
								</StaggerItem>
							))}
						</StaggerGrid>
					</div>
				</section>

				<section className="relative overflow-hidden bg-white py-14 md:py-20">
					<div className="ambient-orb ambient-orb-sky left-[10%] bottom-10" />
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="w-full">
							<RevealHeading className="mb-5 text-2xl font-bold text-black sm:text-3xl">
								Secondary Ecosystem Partners
							</RevealHeading>
						</div>

						<StaggerGrid
							viewport={{ once: true, amount: 0.05 }}
							className="mt-8 grid grid-cols-2 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-3 md:mt-12 md:grid-cols-5 md:gap-x-8 md:gap-y-10"
						>
							{secondaryEcosystemItems.map((item) => (
								<StaggerItem
									key={item.label}
									className="flex w-full items-center justify-center"
								>
									<div className="flex h-24 w-full items-center justify-center sm:h-32 md:h-40">
										<Image
											src={item.image}
											alt={item.label}
											width={176}
											height={176}
											className={`mx-auto block h-auto ${item.imageClassName} object-contain`}
										/>
									</div>
								</StaggerItem>
							))}
						</StaggerGrid>
					</div>
				</section>
			</main>
		</>
	);
}
