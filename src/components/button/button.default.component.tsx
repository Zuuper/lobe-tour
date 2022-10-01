import React from 'react'

export default function ButtonDefaultComponent(props: {title?: string, clickHandle?:() => any, className?:string, children?:any}) {
  return (
    <button className={`px-6 py-3 rounded-full ${props.className} max-h-fit` }>
      {props.title && <p>{props.title}</p>}
      {props.children}
    </button>
  )
}
