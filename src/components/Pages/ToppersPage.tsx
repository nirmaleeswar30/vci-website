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
      { name: 'VARSHA PRASAD', image: 'image31.png', percentage: '95 %' },
      { name: 'TARUN UPADHYA', image: 'image32.png', percentage: '94 %' },
      { name: 'DIVYASHREE.S', image: 'image33.png', percentage: '94 %' },
      { name: 'SAANVI MAHESH RAJU', image: 'image34.png', percentage: '94 %' },
      { name: 'ANISH JOSHI', image: 'image35.png', percentage: '94 %' },
      { name: 'KEERTHANA K', image: 'image36.png', percentage: '93 %' },
      { name: 'GAGAN M', image: 'image37.png', percentage: '94 %' },
      { name: 'AADITRI M', image: 'image38.png', percentage: '92 %' },
      { name: 'SHRUTHI SHASHIDHAR', image: 'image39.png', percentage: '92 %' },
      { name: 'SAMARTH R KOWSHIK', image: 'image40.png', percentage: '90 %' },
      { name: 'ARJUN P RAO', image: 'image41.png', percentage: '90 %' },
    ],
    'ICSE X Toppers': [
      { name: 'C.M.PANKAJ', image: 'image42.png', percentage: '95 %' },
      { name: 'TANMAYEE', image: 'image43.png', percentage: '94 %' },
      { name: 'SHREEEYA YARRISWAMY', image: 'image44.png', percentage: '94 %' },
      { name: 'KATHYAYANI V', image: 'image45.png', percentage: '93.3 %' },
      { name: 'ANKITA ANAND', image: 'image46.png', percentage: '93 %' },
      { name: 'SAI ASHITH.V', image: 'image47.png', percentage: '93 %' },
      { name: 'TEJINI MAHESH', image: 'image48.png', percentage: '93 %' },
      { name: 'MOKSHANTH SRIRAMANENI' , image: 'image49.png', percentage: '92 %' },
      { name: 'DIVYADHARSHINI', image: 'image50.png', percentage: '91.3 %' },
      { name: 'CHINMAYI SURESH', image: 'image51.png', percentage: '91 %' },
      { name: 'MANISH GOWDA.D', image: 'image52.png', percentage: '91 %' },
      { name: 'AARAV SHAMACHAR', image: 'image53.png', percentage: '91 %' },
      { name: 'RISHI N', image: 'image54.png', percentage: '90.2 %' },
      { name: 'SMRATI CHOUGALA', image: 'image55.png', percentage: '85 %' },


    ],
  },
  '2023': {

    'CLASS XII STATE BOARD': [
      { name: 'SHELSHIYA SHINY B', image: 'image18.png', percentage: '582/600' },
      { name: 'CHITRITHA', image: 'image19.png', percentage: '577/600' },
      { name: 'AAKSHAY SHANKAR', image: 'image20.png', percentage: '569/600' },
      { name: 'ULLAS T', image: 'image21.png', percentage: '569/600 %' },
      { name: 'HARSHITHA PODILI', image: 'image22.png', percentage: '564/600' },
      { name: 'ADITI C.S', image: 'image23.png', percentage: '561/600' },
      { name: 'LALITHA MADALA', image: 'image24.png', percentage: '541/600' },
      { name: 'PRAGNYA H.SULIBHAVI', image: 'image25.png', percentage: '540/600' },
      { name: 'BODHANA P', image: 'image26.png', percentage: '539/600' },
      { name: 'ASYA T V', image: 'image27.png', percentage: '534/600' },
      { name: 'SHRAVYA K R', image: 'image28.png', percentage: '529/600' },
      { name: 'VISHAL R', image: 'image29.png', percentage: '528/600' },
      { name: 'VARSHINI MEGHA', image: 'image30.png', percentage: '535/600' },
    ],
  },
  '2022': {
    'SSLC 2022': [
      { name: 'SANJANA GC', image: 'image16.jpg', percentage: '600/625' },
      { name: 'TEJASWINI S', image: 'image17.jpg', percentage: '549/625' },
    ],
    },
  '2021': {
    'JEE (Main) 2021': [
      { name: 'NAVEEN BALAJI K', image: 'image11.jpg', percentage: '97.35 %' },
    ],
    'NEET 2021': [
      { name: 'KAVANA S', image: 'image12.jpg', percentage: '599/720' },
      { name: 'RITHESH SINGH', image: 'image14.jpg', percentage: '599/720' },
    ],
    'NTSE Stage I(2021)': [
      { name: 'DEEPAK CHARAN S', image: 'image13.jpg', percentage: 'MAT-90 SAT-83' },
    ],
    'NATA (Architecture)': [
      { name: 'KRITHIKA K K', image: 'image15.jpg', percentage: 'KCET Rank: 838' },
    ],
  },
  '2019': {
    'II PUC 2019': [
      { name: 'NANDINI N', image: 'image5.jpg', percentage: 'COMMERCE-FIRST CLASS' },
      { name: 'KEERTHI P', image: 'image6.jpg', percentage: 'COMMERCE 96%, ACC-100, BS-98, SAT-98, BS -93' },
      { name: 'SHILPA RAJAN', image: 'image7.jpg', percentage: 'COMMERCE 85%, ACC-96, SAT-94, BS-90, BM-79' },
      { name: 'ADITI MOHAN', image: 'image8.jpg', percentage: 'COMMERCE 94%, ACC-98, BM-95, SAT-94, BS-97' },
      { name: 'PRITHVI RAJ S', image: 'image9.jpg', percentage: 'COMMERCE 85%, ACC-97, ECO-96, BS-82, BM-79' },
      { name: 'PRANATHI P S', image: 'image10.jpg', percentage: 'COMMERCE 90%, ACC-91, ECO-99, BS-97, CS-91' },
    ],
  },
  '2018': {
    'II PUC 2019': [
      { name: 'YASHWANTH', image: 'image1.jpg', percentage: '576/625' },
      { name: 'NIKHIHTA SARIKA', image: 'image2.jpg', percentage: 'COMMERCE 95%, ACC-100, BM-97, STAT-94, BS-92' },
      { name: 'KAVANA S', image: 'image3.jpg', percentage: '607/625' },
      { name: 'NAYANA ML', image: 'image4.jpg', percentage: '594/625' },
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
      <div className='bg-gray-800 p-12 md:px-8 lg:px-16'>

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
                                className="w-full h-54 object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-4 text-center">
                              <h3 className="text-lg font-semibold text-gray-800 mb-1 break-words">
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