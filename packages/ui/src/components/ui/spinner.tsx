import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "inline-block animate-spin rounded-full border-2 border-current border-t-transparent",
  {
    variants: {
      size: {
        mini: "size-3",
        small: "size-4",
        regular: "size-5",
        large: "size-6",
      },
    },
    defaultVariants: {
      size: "regular",
    },
  }
)

export interface SpinnerProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="status"
        aria-label="Loading"
        data-slot="spinner"
        data-icon="inline-start"
        className={cn(spinnerVariants({ size }), className)}
        {...props}
      />
    )
  }
)

Spinner.displayName = "Spinner"

export { Spinner, spinnerVariants }
