'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}/`);
  };

  return (
    <form className="w-50 flex justify-center md:justify-between" onClick={handleSubmit}>
      <input
        name="input"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search"
        className="bg-white p-2 w-80 text-xl rounded-xl"
      />
      <button
        type="submit"
        className="p-3 text-xll rounded-xl bg-slate-300 ml-2 font-bold"
      >
        🚀
      </button>
    </form>
  );
};

export default Search;
