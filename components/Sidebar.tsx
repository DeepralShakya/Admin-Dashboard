'use client'

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"

import {
    CreditCard,
    Folders,
    LayoutDashboard,
    Newspaper,
    Settings,
    User,
} from "lucide-react"
import Link from "next/link"

const Sidebar = () => {
  return (
    <Command className="bg-orange-300 rounded-none">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
                <Link href="/" className="block">
                    <CommandItem className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                    </CommandItem>
                </Link>
                <Link href="/posts" className="block">
                    <CommandItem className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer">
                        <Newspaper className="mr-2 h-4 w-4" />
                        <span>Posts</span>
                    </CommandItem>
                </Link>
                <Link href="#" className="block">
                    <CommandItem className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer">
                        <Folders className="mr-2 h-4 w-4" />
                        <span>Categories</span>
                    </CommandItem>
                </Link>           
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
            <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
            </CommandItem>
            <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
            </CommandItem>
            <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
            </CommandItem>
            </CommandGroup>
        </CommandList>
    </Command>

  )
}

export default Sidebar
