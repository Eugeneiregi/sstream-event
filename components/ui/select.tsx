"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "twflex twh-10 tww-full twitems-center twjustify-between twrounded-md twborder twborder-input twbg-background twpx-3 twpy-2 twtext-sm twring-offset-background placeholder:twtext-muted-foreground focus:twoutline-none focus:twring-2 focus:twring-ring focus:twring-offset-2 disabled:twcursor-not-allowed disabled:twopacity-50 [&>span]:twline-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="twh-4 tww-4 twopacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "twflex twcursor-default twitems-center twjustify-center twpy-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="twh-4 tww-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "twflex twcursor-default twitems-center twjustify-center twpy-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="twh-4 tww-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "twrelative twz-50 twmax-h-96 twmin-w-[8rem] twoverflow-hidden twrounded-md twborder twbg-popover twtext-popover-foreground twshadow-md data-[state=open]:twanimate-in data-[state=closed]:twanimate-out data-[state=closed]:twfade-out-0 data-[state=open]:twfade-in-0 data-[state=closed]:twzoom-out-95 data-[state=open]:twzoom-in-95 data-[side=bottom]:twslide-in-from-top-2 data-[side=left]:twslide-in-from-right-2 data-[side=right]:twslide-in-from-left-2 data-[side=top]:twslide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:twtranslate-y-1 data-[side=left]:tw-translate-x-1 data-[side=right]:twtranslate-x-1 data-[side=top]:tw-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "twp-1",
          position === "popper" &&
            "twh-[var(--radix-select-trigger-height)] tww-full twmin-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("twpy-1.5 twpl-8 twpr-2 twtext-sm twfont-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "twrelative twflex tww-full twcursor-default twselect-none twitems-center twrounded-sm twpy-1.5 twpl-8 twpr-2 twtext-sm twoutline-none focus:twbg-accent focus:twtext-accent-foreground data-[disabled]:twpointer-events-none data-[disabled]:twopacity-50",
      className
    )}
    {...props}
  >
    <span className="twabsolute twleft-2 twflex twh-3.5 tww-3.5 twitems-center twjustify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="twh-4 tww-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("tw-mx-1 twmy-1 twh-px twbg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
