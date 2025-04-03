import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Topper {
  name: string;
  image: string;
  percentage: string;
}

interface TopperCategory {
  [key: string]: Topper[];
}

interface ToppersData {
  [key: string]: TopperCategory;
}

const toppersData: ToppersData = {
  '2024': {
    'CBSE X Toppers': [
      { name: 'VARSHA PRASAD', image: 'https://i.pinimg.com/736x/56/7a/d2/567ad26c22b991cb9f52b999f70b855d.jpg', percentage: '95 %' },
      { name: 'VARSHA PRASAD', image: 'https://i.pinimg.com/736x/56/7a/d2/567ad26c22b991cb9f52b999f70b855d.jpg', percentage: '95 %' },
      { name: 'TARUN UPADHYA', image: 'https://via.placeholder.com/150/e0e0e0/333?Text=TU', percentage: '94 %' },
      { name: 'DIVYASHREE.S', image: 'https://via.placeholder.com/150/d0d0d0/333?Text=DS', percentage: '94 %' },
    ],
    'ICSE X Toppers': [
      { name: 'ANIKA SHARMA', image: 'https://via.placeholder.com/150/c0c0c0/333?Text=AS', percentage: '98 %' },
      { name: 'ROHAN VERMA', image: 'https://via.placeholder.com/150/b0b0b0/333?Text=RV', percentage: '97 %' },
      { name: 'PRIYA GUPTA', image: 'https://via.placeholder.com/150/a0a0a0/333?Text=PG', percentage: '96 %' },
    ],
  },
  '2023': {
    'CBSE X Toppers': [
      { name: 'AMAN SINGH', image: 'https://via.placeholder.com/150/909090/333?Text=AS', percentage: '96 %' },
      { name: 'SHIKHA YADAV', image: 'https://via.placeholder.com/150/808080/333?Text=SY', percentage: '95 %' },
      { name: 'VIKAS RAI', image: 'https://via.placeholder.com/150/707070/333?Text=VR', percentage: '94 %' },
    ],
    'ICSE X Toppers': [
      { name: 'SANJANA NAIR', image: 'https://via.placeholder.com/150/606060/333?Text=SN', percentage: '99 %' },
      { name: 'DEEPAK PATEL', image: 'https://via.placeholder.com/150/505050/333?Text=DP', percentage: '98 %' },
      { name: 'ISHA MEHRA', image: 'https://via.placeholder.com/150/404040/333?Text=IM', percentage: '97 %' },
    ],
  },
  '2022': {
    'CBSE X Toppers': [
      { name: 'PRIYA VERMA', image: 'https://via.placeholder.com/150/303030/fff?Text=PV', percentage: '97.5 %' },
      { name: 'RAHUL SHARMA', image: 'https://via.placeholder.com/150/202020/fff?Text=RS', percentage: '97.2 %' },
      { name: 'KAVYA IYER', image: 'https://via.placeholder.com/150/101010/fff?Text=KI', percentage: '96.8 %' },
    ],
    'ICSE X Toppers': [
      { name: 'ADITI GUPTA', image: 'https://via.placeholder.com/150/000000/fff?Text=AG', percentage: '99.1 %' },
      { name: 'SAHIL KHAN', image: 'https://via.placeholder.com/150/333333/eee?Text=SK', percentage: '98.9 %' },
      { name: 'SHREYA NAIR', image: 'https://via.placeholder.com/150/666666/ddd?Text=SN', percentage: '98.5 %' },
    ],
  },
  '2021': {
    'CBSE X Toppers': [
      { name: 'ANJALI SINGH', image: 'https://via.placeholder.com/150/999999/ccc?Text=AS', percentage: '98.1 %' },
      { name: 'ARYAN VERMA', image: 'https://via.placeholder.com/150/bbb/aaa?Text=AV', percentage: '97.9 %' },
      { name: 'SIMRAN KAUR', image: 'https://via.placeholder.com/150/ddd/999?Text=SK', percentage: '97.6 %' },
    ],
    'ICSE X Toppers': [
      { name: 'ISHAN PATEL', image: 'https://via.placeholder.com/150/eee/888?Text=IP', percentage: '99.3 %' },
      { name: 'TANVI MEHTA', image: 'https://via.placeholder.com/150/fff/777?Text=TM', percentage: '99.0 %' },
      { name: 'VIRAT REDDY', image: 'https://via.placeholder.com/150/111/eee?Text=VR', percentage: '98.7 %' },
    ],
  },
  '2020': {
    'CBSE X Toppers': [
      { name: 'GAURAV SHARMA', image: 'https://via.placeholder.com/150/222/ddd?Text=GS', percentage: '97.8 %' },
      { name: 'PRIYANKA GUPTA', image: 'https://via.placeholder.com/150/444/bbb?Text=PG', percentage: '97.5 %' },
      { name: 'SACHIN IYER', image: 'https://via.placeholder.com/150/666/999?Text=SI', percentage: '97.1 %' },
    ],
    'ICSE X Toppers': [
      { name: 'MAYA NAIR', image: 'https://via.placeholder.com/150/888/777?Text=MN', percentage: '99.5 %' },
      { name: 'KUNAL VERMA', image: 'https://via.placeholder.com/150/aaa/555?Text=KV', percentage: '99.2 %' },
      { name: 'DIVYA SINGH', image: 'https://via.placeholder.com/150/ccc/333?Text=DS', percentage: '98.9 %' },
    ],
  },
  '2019': {
    'CBSE X Toppers': [
      { name: 'HARSHIT RAI', image: 'https://via.placeholder.com/150/eee/111?Text=HR', percentage: '97.2 %' },
      { name: 'SHIVANI DIXIT', image: 'https://via.placeholder.com/150/ddd/222?Text=SD', percentage: '96.9 %' },
      { name: 'ROHAN MEHRA', image: 'https://via.placeholder.com/150/bbb/444?Text=RM', percentage: '96.5 %' },
    ],
    'ICSE X Toppers': [
      { name: 'NISHA PATEL', image: 'https://via.placeholder.com/150/999/666?Text=NP', percentage: '99.7 %' },
      { name: 'AKASH GUPTA', image: 'https://via.placeholder.com/150/777/888?Text=AG', percentage: '99.4 %' },
      { name: 'PRIYA SHETTY', image: 'https://via.placeholder.com/150/555/aaa?Text=PS', percentage: '99.1 %' },
    ],
  },
};

const ToppersPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>(Object.keys(toppersData).sort().reverse()[0]);
  const years = Object.keys(toppersData).sort().reverse();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 } },
  };

  const topperCardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { y: -5, boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)' },
  };

  return (
    <section className='min-h-screen'>
      <div className='bg-gray-800 p-10 md:px-8 lg:px-16'>

      </div>
      <div className="bg-white"> {/* Changed background color to gray-700 */}
        {/* Main Content with padding for navbar */}

        <motion.header
          className="text-center pt-16"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
            Toppers - {selectedYear}
          </h1>
        </motion.header>
        <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col lg:flex-row gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Year Shifter - now responsive */}
            <motion.aside
              className="w-full lg:w-64 bg-white rounded-lg shadow p-6 sticky top-24 h-fit"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Select Year</h3>
              <ul className="space-y-2">
                {years.map((year) => (
                  <li key={year}>
                    <button
                      onClick={() => setSelectedYear(year)}
                      className={`block w-full text-left py-2 px-4 rounded-md transition-all duration-200 ${
                        selectedYear === year
                          ? 'bg-rose-600 text-white font-medium shadow-md'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {year}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.aside>


            {/* Toppers Content */}
            <div className="flex-1"> {/* Removed pl-22 */}


              {toppersData[selectedYear] ? (
                <div className="space-y-12">
                  {Object.entries(toppersData[selectedYear]).map(([category, toppers]) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <h2 className="text-2xl font-semibold text-gray-700 mb-6 pl-2 border-l-4 border-rose-500">
                        {category}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {toppers.map((topper, index) => (
                          <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
                            variants={topperCardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                          >
                            <div className="aspect-w-1 aspect-h-1 w-full">
                              <img
                                src={topper.image}
                                alt={topper.name}
                                className="w-full h-48 object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-4 text-center">
                              <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
                                {topper.name}
                              </h3>
                              <p className="text-lg text-rose-600 font-bold">
                                {topper.percentage}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.p
                  className="text-gray-500 text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  No toppers data available for the year {selectedYear}.
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToppersPage;