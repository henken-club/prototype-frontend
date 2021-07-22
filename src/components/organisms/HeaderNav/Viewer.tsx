import clsx from 'clsx';
import React, {useState} from 'react';

export type ViewProps = {
  className?: string;
  alias: string;
  displayName: string | null;
};
export const View: React.VFC<ViewProps> = ({className, alias, displayName}) => {
  const [name] = useState<string>(displayName ? displayName : alias);

  return (
    <div className={clsx(className, 'flex')}>
      <span className={clsx(['text-white'])}>{name}</span>
    </div>
  );
};

export const Viewer = View;
