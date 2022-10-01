import Link from 'next/link'
import React from 'react'
import IPageLink from '../../@types/IPageLink'
import { Logo } from '../utility'
import { BsTwitter, BsFillChatFill,BsYoutube } from 'react-icons/bs'
import { ButtonDefault } from '../button'
type socialMedia = {
  name: string,
  link: string,
  icon : JSX.Element
}

function FooterLinkSection(props: {title: string, pageLink: Array<IPageLink>}){
  return (
    <section className='flex flex-col gap-8 text-stone-700'>
      <h4 className='capitalize text-xl font-bold'>{props.title}</h4>
      <ul className='flex flex-col gap-4'>
        {props.pageLink.map((e,id) => {
          return <li key={ e.name + id }>
            <Link href={e.link}>
              <p className="text-xl capitalize">{e.name}</p> 
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
    <footer className='flex flex-row justify-between px-32 py-24 border-t-2 text-stone-700'>
      <section className='flex flex-col gap-8' aria-labelledby='footer-about-us'>
        <Logo />
        <div className='flex flex-col gap-4'>
          {whoWeAre.map((e,id) => {
            return <p key={e + id} className="text-lg">{e}</p>
          })}
        </div>
      </section>
      <FooterLinkSection title='About' pageLink={aboutUsLinks}/>
      <FooterLinkSection title='General' pageLink={generalLinks}/>
      <FooterLinkSection title='resources' pageLink={resourcesLinks}/>
      <section aria-labelledby='footer-social-media' className='flex gap-4 justify-start'>
        {socialMediaLink.map((e,id) => {
          return <ButtonDefault key={e.name + id} className="text-white bg-emerald-400 h-fit">
              <Link href={e.link}>
                {e.icon}
              </Link>
          </ButtonDefault>
        })}
      </section>
    </footer>
  )
}
