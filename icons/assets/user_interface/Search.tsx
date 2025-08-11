import type React from 'react'
import type { IconProps } from '@/icons/IconProps'

export const OutlineSearch: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.793 13.793a1 1 0 0 1 1.414 0l5.5 5.5a1 1 0 0 1-1.414 1.414l-5.5-5.5a1 1 0 0 1 0-1.414Z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z'
      fill='currentColor'
    />
  </svg>
)

export const SolidSearch: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.293 16.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414Z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z'
      fill='currentColor'
    />
  </svg>
)

export const DuotoneSearch: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      className='opacity-50'
      d='M12.793 12.793a1 1 0 0 1 1.414 0l6.5 6.5a1 1 0 0 1-1.414 1.414l-6.5-6.5a1 1 0 0 1 0-1.414Z'
      fill='currentColor'
    />

    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z'
      fill='currentColor'
    />
  </svg>
)
