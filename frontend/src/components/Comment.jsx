export const Comment = ({ title }) => {
  const data = [1, 2, 3];

  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="font-semibold">
        {data.length} thoughts on “{title}”
      </h3>
      {data.map((reply) => (
        <div className="flex flex-col gap-10 w-full">
          <div className="flex gap-5">
            <img
              className="rounded-full object-cover object-center w-[3rem] h-[3rem]"
              src="http://1.gravatar.com/avatar/72be378021bcd1bd2fc85fe8d89f527a?s=100&d=mm&r=g"
            />
            <div className="sm:text-sm flex flex-col gap-2">
              <p className="font-medium">Rogue</p>
              <p className="text-sm sm:text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis repellendus illum maxime eaque consequatur excepturi.
              </p>
              <div className="flex justify-between text-[#7b7b7b] items-center">
                <span className="text-sm sm:text-xs">
                  August 23, 2017 at 12:47 pm
                </span>
                <span className="border px-2 py-1 text-[10px] tracking-widest cursor-pointer">
                  REPLY
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h4 className="font-semibold">Leave a Reply</h4>
      <small className="text-xs text-[#7b7b7b] italic">
        Your email address will not be published. Required fields are marked *
      </small>
      <form className="flex flex-col mt-3 gap-4">
        <textarea
          placeholder="Comment *"
          className="border p-3 sm:text-xs w-full sm:w-[80%] h-[10rem] text-sm outline-none focus-within:bg-white transition duration-200 ease bg-[#f6f6f6]"
        />
        <input
          placeholder="Name *"
          className="border p-3 sm:text-xs w-full md:w-[60%] text-sm outline-none focus-within:bg-white transition duration-200 ease bg-[#f6f6f6]"
          type="text"
        />
        <input
          placeholder="Email *"
          className="border p-3 sm:text-xs w-full md:w-[60%] text-sm outline-none focus-within:bg-white transition duration-200 ease bg-[#f6f6f6]"
          type="text"
        />
        <button className="sm:text-xs bg-[#edb48b] tracking-widest max-w-max py-3 px-5  text-white cursor-pointer">
          POST COMMENT
        </button>
      </form>
    </div>
  );
};
