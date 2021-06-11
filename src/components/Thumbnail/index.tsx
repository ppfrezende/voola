import Image from 'next/image';
import { FilmProps } from '../../pages/index';

export function Thumbnail({
  id,
  title,
  description,
  primaryImagePath,
  secondaryImagePath,
  popularity,
  voteAverage,
  likesCount,
}: FilmProps) {
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <div>
      <Image
        layout="responsive"
        height={1000}
        width={1920}
        src={
          `${BASE_IMAGE_URL}${primaryImagePath || secondaryImagePath}` ||
          `${BASE_IMAGE_URL}${secondaryImagePath}`
        }
      />
    </div>
  );
}
