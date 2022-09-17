import { FC } from 'react'

export const BezierArrow: FC<JSX.IntrinsicElements['svg']> = props => {
  return (
    <svg
      width="81.964"
      height="33.456"
      viewBox="0 0 21.686 8.852"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="main" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset={'0%'} stopColor={'#f16f26'} />
          <stop offset={'100%'} stopColor={'#884e9c'} />
        </linearGradient>
      </defs>
      <g stroke="url(#main)" strokeWidth=".529" strokeMiterlimit="4" strokeOpacity="1" fill="none">
        <path d="M0 4.426h21.686M21.686 4.426c-7.435 0-6.815-4.389-6.815-4.389M21.686 4.426c-7.435 0-6.815 4.389-6.815 4.389" />
      </g>
    </svg>
  )
}
