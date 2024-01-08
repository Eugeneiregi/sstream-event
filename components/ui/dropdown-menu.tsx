"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "twflex twcursor-default twselect-none twitems-center twrounded-sm twpx-2 twpy-1.5 twtext-sm twoutline-none focus:twbg-accent data-[state=open]:twbg-accent",
      inset && "twpl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="twml-auto twh-4 tww-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "twz-50 twmin-w-[8rem] twoverflow-hidden twrounded-md twborder twbg-popover twp-1 twtext-popover-foreground twshadow-lg data-[state=open]:twanimate-in data-[state=closed]:twanimate-out data-[state=closed]:twfade-out-0 data-[state=open]:twfade-in-0 data-[state=closed]:twzoom-out-95 data-[state=open]:twzoom-in-95 data-[side=bottom]:twslide-in-from-top-2 data-[side=left]:twslide-in-from-right-2 data-[side=right]:twslide-in-from-left-2 data-[side=top]:twslide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "twz-50 twmin-w-[8rem] twoverflow-hidden twrounded-md twborder twbg-popover twp-1 twtext-popover-foreground twshadow-md data-[state=open]:twanimate-in data-[state=closed]:twanimate-out data-[state=closed]:twfade-out-0 data-[state=open]:twfade-in-0 data-[state=closed]:twzoom-out-95 data-[state=open]:twzoom-in-95 data-[side=bottom]:twslide-in-from-top-2 data-[side=left]:twslide-in-from-right-2 data-[side=right]:twslide-in-from-left-2 data-[side=top]:twslide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "twrelative twflex twcursor-default twselect-none twitems-center twrounded-sm twpx-2 twpy-1.5 twtext-sm twoutline-none twtransition-colors focus:twbg-accent focus:twtext-accent-foreground data-[disabled]:twpointer-events-none data-[disabled]:twopacity-50",
      inset && "twpl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "twrelative twflex twcursor-default twselect-none twitems-center twrounded-sm twpy-1.5 twpl-8 twpr-2 twtext-sm twoutline-none twtransition-colors focus:twbg-accent focus:twtext-accent-foreground data-[disabled]:twpointer-events-none data-[disabled]:twopacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="twabsolute twleft-2 twflex twh-3.5 tww-3.5 twitems-center twjustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="twh-4 tww-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "twrelative twflex twcursor-default twselect-none twitems-center twrounded-sm twpy-1.5 twpl-8 twpr-2 twtext-sm twoutline-none twtransition-colors focus:twbg-accent focus:twtext-accent-foreground data-[disabled]:twpointer-events-none data-[disabled]:twopacity-50",
      className
    )}
    {...props}
  >
    <span className="twabsolute twleft-2 twflex twh-3.5 tww-3.5 twitems-center twjustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="twh-2 tww-2 twfill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "twpx-2 twpy-1.5 twtext-sm twfont-semibold",
      inset && "twpl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("tw-mx-1 twmy-1 twh-px twbg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("twml-auto twtext-xs twtracking-widest twopacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
