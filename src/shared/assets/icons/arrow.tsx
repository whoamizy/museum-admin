import { IconProps } from "./types"

export const ArrowIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m14 17-1.763-1.747c-1.406-1.394-2.109-2.09-2.217-2.94a2.477 2.477 0 0 1 0-.626c.108-.85.811-1.546 2.217-2.94L14 7"
      />
    </svg>
  )
}
