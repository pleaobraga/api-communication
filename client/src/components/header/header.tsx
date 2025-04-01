import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function Header() {
  return (
    <header className="w-full pt-4">
      <div className="flex justify-between px-8">
        <div className=" flex items-end gap-1">
          <Link href="https://www.github.com/pleaobraga" target="_blank">
            <Image alt="logo" src="/Logo.svg" width={80} height={32} />
          </Link>
          <Link
            href="https://github.com/pleaobraga/api-communication"
            target="_blank"
          >
            <h3 className="font-normal text-slate-700 ">EchoHub</h3>
          </Link>
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage src="profile.png" />
          <AvatarFallback>PL</AvatarFallback>
        </Avatar>
      </div>
      <Separator className="mt-4 mb-9" />
    </header>
  )
}
