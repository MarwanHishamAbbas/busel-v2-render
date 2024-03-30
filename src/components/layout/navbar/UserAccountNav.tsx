"use client"

import { User } from "@/payload-types"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { UserIcon } from "lucide-react"

const UserAccountNav = ({ user }: { user: User }) => {
  const { signOut } = useAuth()

  return (
    <div className="flex items-center  gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="overflow-visible">
          <Button variant="outline" size="icon">
            <UserIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white">
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-0.5 leading-none">
              <p className="font-medium text-sm text-black">
                {user.email}{" "}
                {user.role === "admin" && (
                  <span className="text-green-400">Admin</span>
                )}
              </p>
            </div>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link target="_blank" href="/sell" className="cursor-pointer">
              Seller Dashboard
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={signOut} className="cursor-pointer">
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UserAccountNav
