import StatisticListItem from 'components/molecules/StatisticListItem'
import { clear } from 'console'
import React from 'react'
import { FiBarChart, FiBriefcase, FiCloudLightning, FiFastForward, FiFlag, FiTrendingUp } from 'react-icons/fi'

const StatisticList = () => {
  return (
    <div className="w-full px-8 py-6 bg-light rounded flex flex-col gap-5 md:flex-row md:justify-around md:items-center">
      <StatisticListItem icon={<FiTrendingUp />} label="SOLUTIONS DEPLOYED" value="67" />
      <div className="w-full h-[1px] bg-borderLight md:w-[1px] md:min-h-[65px]"></div>
      <StatisticListItem icon={<FiBriefcase />} label="CLIENTS" value="25" />
      <div className="w-full h-[1px] bg-borderLight md:w-[1px] md:min-h-[65px]"></div>
      <StatisticListItem icon={<FiFastForward />} label="AVERAGE PROJECT LIFECYCLE" value="28 Days" />
    </div>
  )
}

export default StatisticList



