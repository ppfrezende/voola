import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { FilmProps } from '../../pages/index';

export function Thumbnail({
  id,
  title,
  mediaType,
  description,
  releaseDate,
  primaryImagePath,
  secondaryImagePath,
  popularity,
  voteAverage,
  likesCount,
}: FilmProps) {
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <div
      className="
        p-2
        group 
        cursor-pointer
        transition duration-200 ease-in
        transform sm:hover:scale-105
        hover:z-50"
    >
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_IMAGE_URL}${primaryImagePath || secondaryImagePath}` ||
          `${BASE_IMAGE_URL}${secondaryImagePath}`
        }
      />
      <div className="p-2 ">
        <p className="text-sm truncate max-w-md">{description}</p>
        <h2
          className="
            mt-1 
            text-2xl
          text-white
            transition-all
            duration-100
            ease-in-out
            group-hover:text-3xl"
        >
          {title}
        </h2>
        <p
          className="
            flex 
            items-center
            opacity-0
            group-hover:opacity-100"
        >
          {mediaType && `${mediaType} ·`} {releaseDate} ·{' '}
          <ThumbUpIcon className="h-5 mx-2" />
          {likesCount}
        </p>
      </div>
    </div>
  );
}
