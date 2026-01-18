import { useQuery } from "@tanstack/react-query";

const fetchMovies = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
    return res.json();
};

const useMovie = () => {
    return useQuery({
        queryKey: ["movies"],
        queryFn: fetchMovies
    });
};

export default useMovie;
