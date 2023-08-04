import { useFetch, useFetchSuggestions } from "../hooks/useFetch";

export const Suggestion = ({ category, title }) => {
  const { data, loading, error } = useFetchSuggestions(
    import.meta.env.VITE_APP_API_URL + "/articles/suggestions",
    {
      category,
      title
    }
  );
    console.log(data)
  return (
    <div className={`${data.length === 0 ? "hidden" : "visible" } w-full border-t mt-16 pt-16`}>
      <div className="w-[80%] md:w-[70%] mx-auto flex flex-col gap-8">
        <h3 className="font-semibold">You might also like</h3>
        <div className="w-[calc(100%/3)] flex flex-col sm:flex-row gap-6">
          {data?.map((suggestion) => (
            <div className="flex flex-col gap-4 w-full" key={suggestion.title}>
              <img className="w-full" src={suggestion.coverImageUrl}/>
              <p>{suggestion.title}</p>
              <p>{suggestion.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
