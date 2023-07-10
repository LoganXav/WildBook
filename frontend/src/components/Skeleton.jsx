export default function Skeleton ({ type }) {

    const COUNTER = 4
    const ArticleListSkeleton = () => (
    <div className="w-[80%] md:w-[70%] flex flex-col gap-8 items-center mx-auto mb-16 animate-pulse">
        <div className="bg-[lightgray] h-[.5rem] w-1/3 rounded-full"></div>
        <div className="bg-[lightgray] h-[1rem] w-2/3 rounded-full"></div>
        <div className="w-full flex justify-center items-center gap-3">
            <div className=" bg-[lightgray] h-[.5rem] w-[8rem] rounded-full"></div>
            <div className=" bg-[lightgray] h-[.5rem] w-[8rem] rounded-full"></div>
        </div>
        <div className=" bg-[lightgray] w-full h-[25rem] rounded-[2%]"></div>
        <div className=" bg-[lightgray] w-1/3 h-[.5rem] self-start rounded-full"></div>
        <div className="flex items-center self-start gap-3">
            <div className="rounded-full w-[3rem] h-[3rem] bg-[lightgray]"></div>
            <div className="rounded-full w-[3rem] h-[3rem] bg-[lightgray]"></div>
            <div className="rounded-full w-[3rem] h-[3rem] bg-[lightgray]"></div>
        </div>
    </div>
    )
    const PlanSkeleton = () => (
        <div className=" flex flex-col md:flex-row gap-6 w-full">
    <div className="border p-4 w-[100%] md:w-[50%] aspect-[3/1.8] flex flex-col justify-between items-center animate-pulse">
        <div className="bg-[lightgray] w-1/3 h-[.1rem] rounded-full"></div>
        <div className="bg-[lightgray] w-2/3 h-[.5rem] rounded-full"></div>
        <div className="bg-[lightgray] w-1/3 h-[.5rem] rounded-full"></div>
        <div className="bg-[lightgray] w-2/3 h-[2rem] rounded-full"></div> 
    </div>
    <div className="border p-4 w-[100%] md:w-[50%] aspect-[3/1.8] flex flex-col justify-between items-center animate-pulse">
        <div className="bg-[lightgray] w-1/3 h-[.1rem] rounded-full"></div>
        <div className="bg-[lightgray] w-2/3 h-[.5rem] rounded-full"></div>
        <div className="bg-[lightgray] w-1/3 h-[.5rem] rounded-full"></div>
        <div className="bg-[lightgray] w-2/3 h-[2rem] rounded-full"></div> 
    </div>
    </div>
    )
    if (type === "articleList") return Array(COUNTER).fill(<ArticleListSkeleton />)
    if (type === "plan") return <PlanSkeleton />
}