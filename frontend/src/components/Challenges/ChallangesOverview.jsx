import React from "react";
// import { IoSearch, IoReorderTwoSharp } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa";
// import curve from "../../../assets/Curve.png";
import Calander from "./Calender/Calander";


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
		<div className="w-[85vw] mx-auto mt-[15vh] md:mt-[15vh] lg:mt-[15vh] xl:mt-[10vh] h-screen">


			<Calander />
		</div>
	);
}

export default ChallangesOverview;
