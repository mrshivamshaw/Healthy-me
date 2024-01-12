import React from "react";
import { IoSearch, IoReorderTwoSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import curve from "../../../assets/Curve.png";

function ChallangesOverview() {
	const currentDate = new Date();
	const currentDay = currentDate.getDay();
	const currentMonth = currentDate.getMonth();
	const date = currentDate.getDate();
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const monthsOfYear = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const today = daysOfWeek[currentDay];
	const thisMonth = monthsOfYear[currentMonth];
	console.log(today);
	console.log(thisMonth);
	console.log(date);
	return (
		<div className="mt-[15vh] md:mt-[15vh] lg:mt-[15vh] xl:mt-[10vh] h-screen">
			<div className="w-[85vw] mx-auto  ">
				{/*top part */}
				{/* pink portion */}
				<div className="bg-pink-300 h-[40vh] pt-20">
					<div className="text-white text-2xl font-bold font-['Inter'] tracking-wide text-center">
						Today
					</div>
					<div className="flex">{today}</div>
				</div>
				{/* white portion */}
				<div className="bg-white h-[30vh]">
					White portion
				</div>

				{/* Bottom Part */}
				<div>
					<div className="bg-white flex h-20 w-[85vw] rounded-3xl fixed bottom-10 justify-around items-center">
						<IoSearch className="text-[#8565F1] text-2xl" />
						<button
							type="button"
							className="flex items-center  justify-center h-16 w-16 rounded-full bg-gradient-to-b from-blue-500 via-indigo-600 to-violet-600 shadow "
						>
							<FaPlus className="text-white text-3xl text-center place-self-center" />
						</button>
						<IoReorderTwoSharp className="text-[#8565F1] text-2xl" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChallangesOverview;
