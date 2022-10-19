import Link from 'next/link'
import React from 'react'
import IPageLink from '../../@types/IPageLink'
import { ButtonDefault, ButtonIcon } from '../button'
import { Logo } from '../utility'
import { GiHamburgerMenu } from 'react-icons/gi'
export default function HeaderComponent() {
  const pageLink: Array<IPageLink> = [
    {name: 'overview', link: './'},
    {name: 'examples', link: './'},
    {name: 'tour', link: './'},
    {name: 'blog', link: './'},
    {name: 'help', link: './'},
  ]
  return (
    <header className="py-2 text-stone-800 flex justify-between lg:justify-center backdrop-blur-sm items-center sticky top-0 z-50 mb-8 ">
      <Logo />
      <ul className='hidden md:flex flex-row gap-10 font-medium xl:text-lg capitalize grow justify-center'>
        {pageLink.map((e,id) => {
          return <li key={e.name + id}>
            <Link href={e.link}>{e.name}</Link>
          </li>
        })}
      </ul>
      <ButtonDefault title='download' className='text-white bg-emerald-400 xl:text-xl capitalize hidden md:block' />
      <ButtonIcon className='text-stone bg-gray-200 md:hidden'>
          <GiHamburgerMenu size={20}/>
      </ButtonIcon>
  </header>
  )
}
