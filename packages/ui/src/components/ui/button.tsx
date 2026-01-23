import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-primary-foreground hover:bg-destructive/90",
        ghostMuted: "text-muted-foreground hover:bg-muted",
      },
    
      size: {
        regular: "h-10 px-4 py-2",
        large: "h-12 px-6 text-base",
        small: "h-9 px-3 text-sm",
        mini: "h-8 px-2 text-xs",
      },
    
      roundness: {
        default: "rounded-md",
        round: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "regular",
      roundness: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "regular",
  roundness = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-roundness={roundness}
      className={cn(buttonVariants({ variant, size, roundness, className }))}
      {...props}
    />
  )
}

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export { Button, buttonVariants }
export type { ButtonProps }
