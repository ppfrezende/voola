import {
  HomeIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

import { HeaderItem } from './HeaderItem';

export function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="SIGN IN" Icon={UserIcon} />
      </div>

      <img className="object-contain" src="/images/logo.svg" alt="voo.la" />
    </header>
  );
}
