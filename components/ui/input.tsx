import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "twflex twh-10 tww-full twrounded-md twborder twborder-input twbg-background twpx-3 twpy-2 twtext-sm twring-offset-background file:twborder-0 file:twbg-transparent file:twtext-sm file:twfont-medium placeholder:twtext-muted-foreground focus-visible:twoutline-none focus-visible:twring-2 focus-visible:twring-ring focus-visible:twring-offset-2 disabled:twcursor-not-allowed disabled:twopacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
