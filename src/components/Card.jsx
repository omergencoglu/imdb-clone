import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <div className="relative w-auto h-64 sm:h-80 lg:h-72 overflow-hidden sm:rounded-lg group-hover:opacity-80 transition-opacity duration-200 object-cover">
          <Image
            src={
              result.backdrop_path || result.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                    result.poster_path || result.backdrop_path
                  }`
                : "/fallback.jpg"
            }
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt={result.title || result.name}
          />
        </div>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}{" "}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
