const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center mt-20 mb-12 md:w-3/12 mx-auto">
      <p className="text-[#D99904] text-xl italic font-['Inter']">
        ---{subHeading}---
      </p>
      <h1 className="text-black text-4xl font-['Inter'] border-y-4 p-5">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
