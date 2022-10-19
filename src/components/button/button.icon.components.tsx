import React from 'react'

export default function ButtonIconComponent(props: { icon?: JSX.Element, className?: string, children: any}) {
  return (
    <button className={`p-2 ${props.className} rounded-full`}>
      {props.icon}
      {props.children}
    </button>
  )
}
