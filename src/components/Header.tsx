import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header>

<nav>
    <div>
        <Image src="/images/logo.svg" alt="logo" width={100} height={100}/>
    </div>
    <ul>

        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Careers</a>

        </li>
        <li>
            <a href="#">Events</a>

        </li>
        <li>
            <a href="#">Support</a>

        </li>
        <li>
            <a href="#">Products</a>

        </li>

    </ul>
</nav>

         

    </header>
  )
}
