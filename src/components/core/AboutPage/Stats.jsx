import React from "react";

const stats = [
  { count: "5k", label: "active Student" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponents = () => {
  return (
    <section className="bg-richblack-800 mx-auto">
      <div className="">
        <div className="flex gap-5 items-center justify-evenly p-14" >
            {
                stats.map((data,index)=>{
                    return(
                        <div>
                            <h1 className="text-richblack-5 text-3xl">{data.count}</h1>
                            <h2 className="text-richblack-500 text-xl mt-2">{data.label}</h2>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
};

export default StatsComponents;
