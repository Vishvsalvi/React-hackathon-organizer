import React from 'react'

const StatisticCard = ({stats, header}) => {
  return (
    <div> <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
    <dt className="order-last text-lg font-medium text-white">
      {header}
    </dt>

    <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">
      {stats}
    </dd>
  </div></div>
  )
}

export default StatisticCard