export default function FeatureSection({ title, desc, sectionImage, index }) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between shadow-[0px_0px_14px_rgba(0,_0,_0,_0.07)] pt-[4.3%] pb-[4.3%] pl-[9.7%] pr-[2.6%] ${
        index % 2 !== 0 ? "flex-row-reverse" : ""
      }`}
    >
      <div className="lg-w-[47%] order-2">
        <h2 className="font-semibold text-[1.75rem] leading-[2.625rem] mb-2">
          {title}
        </h2>
        <p className="text-customGray text-[1.125rem] leading-[1.6875rem] order-2">
          {desc}
        </p>
      </div>
      <img
        src={`/images/illustration-${sectionImage}.svg`}
        alt="growing-togeth"
        className="lg:w-[33%]"
      />
    </div>
  );
}
