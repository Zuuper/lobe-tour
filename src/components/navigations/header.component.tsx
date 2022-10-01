import Link from 'next/link'
import React from 'react'
import IPageLink from '../../@types/IPageLink'
import { ButtonDefault } from '../button'
import { Logo } from '../utility'

export default function HeaderComponent() {
  const pageLink: Array<IPageLink> = [
    {name: 'overview', link: './'},
    {name: 'examples', link: './'},
    {name: 'tour', link: './'},
    {name: 'blog', link: './'},
    {name: 'help', link: './'},
  ]
  return (
    <header className="px-24 py-10 text-gray-800 flex justify-between backdrop-blur-sm items-center sticky top-0">
      <Logo />
      <ul className='flex flex-row gap-8 text-xl capitalize'>
        {pageLink.map((e,id) => {
          return <li key={e.name + id}>
            <Link href={e.link} className="capitalize">{e.name}</Link>
          </li>
        })}
      </ul>
      <ButtonDefault title='download' className='text-white bg-emerald-400 text-xl capitalize' />
  </header>
  )
}
