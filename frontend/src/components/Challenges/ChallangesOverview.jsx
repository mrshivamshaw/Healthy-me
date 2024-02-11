import React, { useEffect, useState } from "react";
import Calander from "./Calender/Calander";
import topSvg from '../../assets/Group 29 (1).png'
import downSvg from '../../assets/Group 27 (1).png'
import Task from "./Task/Task";
import Leaderboard from "./Leaderboard";
import ChallengeModal from "./challengeModal/ChallengeModal";


function ChallangesOverview() {
	const [challengeModal,setChallengeModal] = useState(false)
	useEffect(()=>{
		console.log('challenges');
	},[challengeModal])

	return (
		<div className="w-[100vw] mt-[15vh] md:mt-[15vh] lg:mt-[15vh] xl:mt-[10vh] h-[90vh] overflow-hidden relative">
			<img src={topSvg} alt="top" className="absolute h-[40vh] bottom-0 z-0"/>
			<img src={downSvg} alt="down" className="absolute right-0 h-[40vh] z-[0]"/>
			<div className="w-[85vw] mx-auto ">
				<div className="w-full flex flex-col justify-center items-center py-3 mb-10">
					<h1 className="text-3xl font-bold">Hey! <span className="font-medium text-[#1678F2]">{localStorage.getItem('userName')}</span></h1>
					<h2 className="text-3xl font-medium">Welcome Back</h2>
				</div>
				<div className="flex justify-center items-center gap-10">
					<Calander />
					<Task setChallengeModal={setChallengeModal} challengeModal={challengeModal}/>
					<Leaderboard/>
				</div>
			</div>
			{
				challengeModal &&
			<ChallengeModal setChallengeModal={setChallengeModal} challengeModal={challengeModal}/>
			}
		</div>
	);setChallengeModal
}

export default ChallangesOverview;
