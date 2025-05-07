import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#0E766E] text-white hover:bg-[#0E766E]/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#0F5E59] text-[#0F5E59] bg-background hover:bg-[#E7F9F3]",
        secondary:
          "bg-[#E7F9F3] text-[#0F5E59] hover:bg-[#E7F9F3]/80",
        ghost: "hover:bg-[#E7F9F3] hover:text-[#0F5E59]",
        link: "text-[#0E766E] underline-offset-4 hover:underline",
        call: "bg-[#0E766E] text-white hover:bg-[#0E766E]/90 px-4 py-2 rounded-md",
        explore: "bg-[#0E766E] text-white hover:bg-[#0E766E]/90 px-6 py-3 rounded-md",
        contact: "border border-[#0E766E] text-[#0E766E] bg-white hover:bg-[#E7F9F3] px-6 py-3 rounded-md",
        brochure: "bg-[#00BF7B] text-white hover:bg-[#00BF7B]/90 px-6 py-3 rounded-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
