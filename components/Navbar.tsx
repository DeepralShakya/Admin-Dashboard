'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

const Navbar = () => {
  return (
    <div className='bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white'>
      <Link href="/">
        <Image src="/images/logo.png" alt='Dashboard Logo' width={40} height={40} />
      </Link>
      
      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='hover:cursor-pointer'>Profile</DropdownMenuItem>
          <DropdownMenuItem className='hover:cursor-pointer'>Billing</DropdownMenuItem>
          <DropdownMenuItem className='hover:cursor-pointer'>Team</DropdownMenuItem>
          <DropdownMenuItem className='hover:cursor-pointer'>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}

export default Navbar
