import React from 'react';

const Timeline = ({ children, orientation = 'vertical', align = 'left' }) => {
  const isAlternate = align.includes('alternate');
  const baseClasses = `flex ${
    orientation === 'vertical' ? 'flex-col' : 'flex-row'
  } gap-12 relative`;

  return (
    <div className={`${baseClasses} px-4 md:px-12 py-10 bg-transparent`}>
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0" />
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          orientation,
          isAlternate: isAlternate ? index % 2 === 0 : false,
          align,
        })
      )}
    </div>
  );
};

const Event = ({
  interval,
  title,
  subtitle,
  children,
  orientation,
  isAlternate,
  align,
}) => {
  const isLeft = align === 'left' || (align.includes('alternate') && isAlternate);
  const alignment = isLeft ? 'md:items-end md:pr-12' : 'md:items-start md:pl-12';
  const contentAlign = isLeft ? 'md:text-right' : 'md:text-left';
  const dotPosition = isLeft
    ? 'md:right-[calc(50%-10px)]'
    : 'md:left-[calc(50%-10px)]';

  return (
    <div className={`relative flex flex-col items-start ${alignment} w-full`}>
      <div
        className={`absolute top-2 w-5 h-5 bg-blue-500 border-4 border-white rounded-full shadow-md z-10 ${dotPosition}`}
      />
      <div
        className={`bg-white/80 backdrop-blur-md p-5 rounded-lg shadow-md border border-gray-200 w-full md:w-1/2 transition-all duration-300 z-20 ${contentAlign}`}
      >
        <div className="text-sm text-gray-500 mb-1">{interval}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <h4 className="text-gray-600 font-medium">{subtitle}</h4>
        <ul className="mt-2 text-gray-700 text-sm space-y-2 list-disc pl-4">
          {children}
        </ul>
      </div>
    </div>
  );
};

const ExperienceTimeline = () => {
  return (
    <Timeline align="alternate">
      <Event
        interval="July 2023 – Present"
        title="Nokia"
        subtitle="Fixed Networks Solution Engineer | Dallas, TX"
      >
        <li>
          <strong>Led development</strong> of a containerized <strong>network automation platform</strong> to enhance validation and testing.
        </li>
        <li>
          <strong>Spearheaded delivery</strong> of <strong>fiber access solutions</strong> across North America, including AT&T and Frontier projects.
        </li>
        <li>
          Key contributor to the <strong>100G PON trial</strong> — North America’s first, testing 100G/50G/25G/10G PON on Nokia Lightspan MF.
        </li>
        <li>
          Drove integration of OLT/ONT with RGNET Gateway for AT&T’s <strong>MDU WiFi deployment</strong>.
        </li>
        <li>
          Collaborated across <strong>R&D, engineering, and customer teams</strong> to troubleshoot and resolve complex network issues.
        </li>
        <li>
          Utilized <strong>NETCONF/YANG</strong> and L2/L3 protocol expertise to optimize and support high-performance network environments.
        </li>
      </Event>

      <Event
        interval="June 2022 – July 2023"
        title="DataGenie"
        subtitle="Software Developer & QA Tester | Remote"
      >
        <li>
          Built and maintained frontend features for a <strong>Big Data analytics platform</strong> using <strong>ReactJS</strong>.
        </li>
        <li>
          Automated UI testing with <strong>Cypress</strong>, increasing product reliability and reducing bugs.
        </li>
        <li>
          Processed and validated large-scale data using <strong>PySpark</strong> in <strong>Databricks</strong> and <strong>Google BigQuery</strong>.
        </li>
        <li>
          Collaborated with data scientists to improve <strong>machine learning model integration</strong> and performance.
        </li>
        <li>
          Piloted integration of <strong>ChatGPT and LLMs</strong> to enhance the platform’s intelligence and user experience.
        </li>
      </Event>
    </Timeline>
  );
};

export default ExperienceTimeline;
