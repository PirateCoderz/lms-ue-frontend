/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
const SectionTitle = ({ title, para, color="text-white", bgColor="bg-textColor" }) => (
        <div className="flex flex-col pb-4  gap-4">
            <div className="flex flex-col mx-auto justify-center ">
                <h4 className={`text-[12px] ${color}`}>{para}</h4>
                <h2 className={`text-[34px]  ${color} font-bold custonFonts`}>
                    {title}
                </h2>
                <div className={`w-[40px] flex justify-start items-start h-[1px] ${bgColor}`}></div>
            </div>
        </div>
    );

export default SectionTitle;
