import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function Header() {
  return (
    <header className="w-full py-3">
      <div className="flex justify-between">
        <div className="px-8 flex items-end gap-1">
          <Image alt="logo" src="/Logo.svg" width={80} height={32} />
          <Link
            href="https://www.github.com/pleaobraga"
            target="_blank"
            className="font-extralight"
          >
            pleaobraga
          </Link>
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage src="profile.png" />
          <AvatarFallback>PL</AvatarFallback>
        </Avatar>
      </div>
      <Separator className="my-4" />
    </header>
  )
}
