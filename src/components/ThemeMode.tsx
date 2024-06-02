"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeMode() {
  const [position, setPosition] = React.useState("system");
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SunMoon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-fit mt-4'>
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(value) => setTheme(value)}>
          <DropdownMenuRadioItem value='system'>System</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='dark'>Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='light'>Light</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
