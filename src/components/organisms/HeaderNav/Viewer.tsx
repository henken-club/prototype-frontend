import clsx from 'clsx';
import React, {useState} from 'react';
import Link from 'next/link';

export type ViewProps = {
  className?: string;
  alias: string;
  displayName: string | null;
};
export const View: React.VFC<ViewProps> = ({className, alias, displayName}) => {
  const [name] = useState<string>(displayName ? displayName : alias);

  return (
    <div className={clsx(className, 'flex')}>
      <Link href={`/users/${alias}`}>
        <a className={clsx(['text-white'], ['text-sm', 'md:text-base'])}>
          {name}
        </a>
      </Link>
    </div>
  );
};

export const Viewer = View;
