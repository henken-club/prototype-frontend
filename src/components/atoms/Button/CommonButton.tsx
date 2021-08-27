import clsx from 'clsx';
import React from 'react';

export const ButtonTemplate: React.VFC<{
  className?: string;
  text: string;
  onClick(): void;
}> = ({className, onClick, text}) => (
  <button
    type="button"
    className={clsx(
      className,
      ['rounded-sm'],
      ['transition', 'duration-50'],
      ['bg-opacity-30', 'hover:bg-opacity-80'],
    )}
    onClick={onClick}
  >
    {text}
  </button>
);

export type ButtonProps = React.ComponentProps<typeof ButtonTemplate>;

/**
 * 通常操作ボタン
 */
export const ButtonNormal: React.VFC<ButtonProps> = ({className, ...props}) => (
  <ButtonTemplate
    className={clsx(
      className,
      ['bg-blue-500'],
      ['border'],
      ['border-opacity-50', 'hover:border-opacity-50'],
      ['border-blue-400'],
      ['text-blue-100', 'hover:text-white'],
    )}
    {...props}
  />
);

/**
 * 通常-危険操作ボタン
 */
export const ButtonNormalDanger: React.VFC<ButtonProps> = ({
  className,
  ...props
}) => (
  <ButtonTemplate
    className={clsx(
      className,
      ['bg-blue-600', 'hover:bg-red-500'],
      ['border'],
      ['border-opacity-50', 'hover:border-opacity-50'],
      ['border-blue-500', 'hover:border-red-400'],
      ['text-blue-100', 'hover:text-white'],
    )}
    {...props}
  />
);

/**
 * 危険ボタン
 */
export const ButtonDangerous: React.VFC<ButtonProps> = ({
  className,
  ...props
}) => (
  <ButtonTemplate
    className={clsx(
      className,
      ['bg-red-500'],
      ['border'],
      ['border-opacity-50', 'hover:border-opacity-50'],
      ['border-red-400'],
      ['text-red-200', 'hover:text-white'],
    )}
    {...props}
  />
);

/**
 * 消極的ボタン
 */
export const ButtonNegative: React.VFC<ButtonProps> = ({
  className,
  ...props
}) => (
  <ButtonTemplate
    className={clsx(
      className,
      ['bg-gray-500'],
      ['border'],
      ['border-opacity-50', 'hover:border-opacity-50'],
      ['border-gray-400'],
      ['text-gray-300', 'hover:text-white'],
    )}
    {...props}
  />
);
