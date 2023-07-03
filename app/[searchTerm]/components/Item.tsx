import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type ItemProps = {
  item: Result;
};

const Item = ({ item }: ItemProps) => {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${item.pageid}`}
          target="_blank"
          className="text-xl font-bold underline"
        >
          {item.title}
        </Link>
      </h2>
      <p>{item.extract}</p>
    </div>
  );

  const content = item?.thumbnail?.source ? (
    <article className="m-4 max-w-lg">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          <img
            src={item.thumbnail.source}
            alt={item.title}
            width={item.thumbnail.width}
            height={item.thumbnail.height}
            loading="lazy"
          />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg">{itemTextCol}</article>
  );

  return content;
};

export default Item;
