import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skeletons = () => {
  return (
    <>
      {Array(15)
        .fill(0)
        .map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-around  h-[150px] w-[250px] p-2 border border-1 border-slate-600 rounded shadow-md bg-white"
            >
              <Skeleton circle width={30} height={30} />
              <Skeleton width={200} count={2} />
            </div>
          );
        })}
    </>
  );
};

export default Skeletons;
