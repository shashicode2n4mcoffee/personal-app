import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
      <footer className='light-bg flex justify-space'>
        <span className='white'>
          Copyright © {year} <Link href='/'>Shashikumar</Link> - All rights
          reserved.
        </span>
        <ul className='flex'>
          <li>
            <a
              href='https://www.instagram.com/thenameis_shashikumar_rm'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src='/icons/instagram.svg'
                width={24}
                height={24}
                alt='instagram-icon'
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/shashikumar-ravi-mamadapur-65a96698'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src='/icons/linkedin.svg'
                width={24}
                height={24}
                alt='linkedin-icon'
              />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/shashicode2n4mcoffee'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src='/icons/github.svg'
                width={24}
                height={24}
                alt='github-icon'
              />
            </a>
          </li>
        </ul>
      </footer>
    )
}