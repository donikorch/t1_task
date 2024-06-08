import React from 'react';

interface PlusMinusIconProps {
  variant: string;
}

const PlusMinusIcon = ({ variant }: PlusMinusIconProps) => (
  <>
    {variant === 'plus' && (
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17.0002 10L1.00024 10C0.447959 10 0.000244141 9.55228 0.000244141 9C0.000244141 8.44772 0.44796 8 1.00024 8L17.0002 8C17.5525 8 18.0002 8.44772 18.0002 9C18.0002 9.55228 17.5525 10 17.0002 10Z'
          fill='white'
        />
        <path
          d='M8.00024 17L8.00024 1C8.00024 0.447715 8.44796 0 9.00024 0C9.55253 0 10.0002 0.447716 10.0002 1L10.0002 17C10.0002 17.5523 9.55253 18 9.00024 18C8.44796 18 8.00024 17.5523 8.00024 17Z'
          fill='white'
        />
      </svg>
    )}
    {variant === 'minus' && (
      <svg
        width='18'
        height='3'
        viewBox='0 0 18 3'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.5002 3L1.50024 3C0.671817 3 0.000244141 2.32843 0.000244141 1.5C0.000244141 0.671573 0.671817 0 1.50024 0L16.5002 0C17.3287 0 18.0002 0.671573 18.0002 1.5C18.0002 2.32843 17.3287 3 16.5002 3Z'
          fill='white'
        />
      </svg>
    )}
  </>
);

export default PlusMinusIcon;
