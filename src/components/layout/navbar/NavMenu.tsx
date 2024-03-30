"use client"

import * as React from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowRight, Menu } from "lucide-react"
import { NAV_LINKS } from "@/data/links"
import Link from "next/link"

export function NavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 mr-2">
        {NAV_LINKS.map((link, idx) => (
          <DropdownMenuCheckboxItem key={idx}>
            <Link
              key={idx}
              href={link.href}
              className={buttonVariants({ variant: "ghost" })}
            >
              {link.title}
            </Link>
          </DropdownMenuCheckboxItem>
        ))}
        <Link
          href="/sign-up"
          className={buttonVariants({ className: "w-full" })}
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
