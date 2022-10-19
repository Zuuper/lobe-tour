import Link from 'next/link'
import React from 'react'
import IPageLink from '../../@types/IPageLink'
import { Logo } from '../utility'
import { BsTwitter, BsFillChatFill,BsYoutube } from 'react-icons/bs'
import { ButtonDefault, ButtonIcon } from '../button'
type socialMedia = {
  name: string,
  link: string,
  icon : JSX.Element
}

function FooterLinkSection(props: {title: string, pageLink: Array<IPageLink>}){
  return (
    <section className='flex flex-col gap-4 md:gap-8 text-stone-700 text-center md:text-start'>
      <h4 className='capitalize text-lg xl:text-xl font-bold'>{props.title}</h4>
      <ul className='flex flex-col gap-2 md:gap-4 mb-12 md:mb-4'>
        {props.pageLink.map((e,id) => {
          return <li key={ e.name + id }>
            <Link href={e.link}>
              <p className="text-base xl:text-lg capitalize">{e.name}</p> 
            </Link>
          </li>
        })}
      </ul>
    </section>
  )

}


export default function FooterComponent() {
  const whoWeAre: Array<string> = ['A product by Microsoft.', 'All rights reserved.', '© Microsoft 2021']
  const aboutUsLinks: Array<IPageLink> = [
    {name: 'download', link:'./'},
    {name: 'overview', link:'./'},
    {name: 'example', link:'./'},
    {name: 'blog', link:'./'},
  ]
  const generalLinks: Array<IPageLink> = [
    {name: 'notice', link:'./'},
    {name: 'license', link:'./'},
    {name: 'press injury', link:'./'},
    {name: 'press images', link:'./'},
  ]
  const resourcesLinks: Array<IPageLink> = [
    {name: 'help', link:'./'},
    {name: 'tour', link:'./'},
    {name: 'contact', link:'./'},
    {name: 'privacy', link:'./'},
  ]
  const socialMediaLink: Array<socialMedia> = [
    {name: 'reddit', link: './', icon: <BsFillChatFill className='text-white w-4 h-4'/>},
    {name: 'twitter', link: './', icon: <BsTwitter className='text-white w-4 h-4'/>},
    {name: 'youtube', link: './', icon: <BsYoutube className='text-white w-4 h-4'/>},
  ] 
  return (
    <footer className=' pt-16 pb-24 md:mx-8 lg:mx-24 border-t-2 text-stone-700'>
      <div className='grid grid-cols-2 md:flex md:flex-row justify-between px-16 place-items-center md:place-items-start grid-flow-row'>
        <section className='order-last md:order-first flex flex-col gap-8 col-span-2' aria-labelledby='footer-about-us'>
          <Logo className='justify-center'/>
          <div className='flex flex-col gap-2 md:gap-4'>
            {whoWeAre.map((e,id) => {
              return <p key={e + id} className="text-sm md:text-lg text-center md:text-start">{e}</p>
            })}
          </div>
        </section>
        <FooterLinkSection title='About' pageLink={aboutUsLinks}/>
        <FooterLinkSection title='General' pageLink={generalLinks}/>
        <FooterLinkSection title='resources' pageLink={resourcesLinks}/>
        <section aria-labelledby='footer-social-media' className='flex flex-col xl:flex-row gap-4 justify-center place-self-start'>
          {socialMediaLink.map((e,id) => {
            return <ButtonIcon key={e.name + id} className="text-white bg-emerald-400 w-fit h-fit">
                <Link href={e.link}>
                  {e.icon}
                </Link>
            </ButtonIcon>
          })}
        </section>
      </div>
    </footer>
  )
}
