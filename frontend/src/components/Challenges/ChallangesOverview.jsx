import React, { useEffect, useState } from "react";
// import { IoSearch, IoReorderTwoSharp } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa";
// import curve from "../../../assets/Curve.png";
import Calander from "./Calender/Calander";
import topSvg from '../../assets/Group 29 (1).png'
import downSvg from '../../assets/Group 27 (1).png'
import Task from "./Task/Task";
import Leaderboard from "./Leaderboard";
import ChallengeModal from "./challengeModal/ChallengeModal";


function ChallangesOverview() {
	const [challengeModal,setChallengeModal] = useState(false)
	useEffect(()=>{

	},[challengeModal])
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
		<div className="w-[100vw] mt-[15vh] md:mt-[15vh] lg:mt-[15vh] xl:mt-[10vh] h-[90vh] overflow-hidden relative">
			<img src={topSvg} alt="top" className="absolute h-[40vh] bottom-0 z-0"/>
			<img src={downSvg} alt="down" className="absolute right-0 h-[40vh] z-[0]"/>
			<div className="w-[85vw] mx-auto ">
				<div className="w-full flex flex-col justify-center items-center py-3 mb-10">
					<h1 className="text-3xl font-bold">Hey! <span className="font-medium text-[#1678F2]">{localStorage.getItem('userName')}</span></h1>
					<h2 className="text-3xl font-medium">Welcome Back</h2>
				</div>
				<div className="flex justify-center items-start gap-10">
					<Calander />
					<Task setChallengeModal={setChallengeModal}/>
					<Leaderboard/>
				</div>
			</div>
			{
				challengeModal &&
			<ChallengeModal setChallengeModal={setChallengeModal}/>
			}
		</div>
	);
}

export default ChallangesOverview;
