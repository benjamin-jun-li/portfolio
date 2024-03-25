"use client";
import { cn } from "@/lib/utils";

const integerArray = [
  12, 300, 78, 123, 45, 345, 589, 234, 764, 90, 654, 3, 653, 276, 124, 598, 543,
  122, 834, 637,
];

const floatArray = [
  2.9083197137284986, 2.7615403406482863, 2.9340054095931651,
  2.6175618411103819, 2.7395904839897049, 2.6630637134925485,
  2.5825445238484844, 2.06644395782983518, 3.30847186159148383,
  3.8041891474591526, 3.03553945372246956, 3.5399236743938154,
  3.8717971442179125, 3.6128491745023632, 3.46539750705620634,
  3.8610857771067034, 3.4865181800306977, 3.09815899484456344,
  3.7594518628541393, 3.4225667776175306,
];

const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: `${integerArray[idx]}px`,
            animationDelay: `${floatArray[idx]}s`,
            animationDuration: `${floatArray[idx]}s`,
          }}
        ></span>
      ))}
    </>
  );
};

export default Meteors;
