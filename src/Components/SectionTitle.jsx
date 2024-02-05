const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center mt-10 mb-10 md:mt-20 md:mb-12 md:w-4/12 mx-auto">
      <p className="text-[#D99904] text-xl italic font-['Inter'] pb-2">
        ---{subHeading}---
      </p>
      <h1 className="uppercase text-3xl md:text-4xl font-['Inter'] border-y-4 p-2 md:p-5">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
