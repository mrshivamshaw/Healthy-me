import React, { useEffect, useState } from "react";
import topSvg from '../../../assets/Group 29 (1).png'
import downSvg from '../../../assets/Group 27 (1).png'
import Rewards from "./Rewards.jsx";



function RewardsPage() {

	return (
		<div className="w-[100vw] mt-[15vh] md:mt-[15vh] lg:mt-[15vh] xl:mt-[10vh] overflow-hidden relative">
			<img src={topSvg} alt="top" className="absolute h-[40vh] bottom-0 z-0"/>
			<img src={downSvg} alt="down" className="absolute right-0 h-[40vh] z-[0]"/>
			<div className="w-[85vw] mx-auto ">
				<div className="w-full flex flex-col justify-center items-center py-3 mb-10">
					<h1 className="text-3xl font-bold">Hey! <span className="font-medium text-[#1678F2]">{localStorage.getItem('userName')}</span></h1>
					<h2 className="text-6xl font-bold font-satoshi mt-20 tracking-wider gap-56 [word-spacing:10px]">Get your Rewards</h2>
                    <div className="flex flex-wrap justify-center items-center gap-14 w-[85vw] h-full  z-10">
                        {/* Rewards */}
						<Rewards />
                    </div>
				</div>
				
			</div>
			
		</div>
	);
}

export default RewardsPage;
