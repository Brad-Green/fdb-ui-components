import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonGroupVariants = cva(
  "inline-flex [&>button]:rounded-none",
  {
    variants: {
      orientation: {
        horizontal:
          "flex-row items-center " +
          "[&>button]:border-r-0 [&>button:last-child]:border-r " +
          "[&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md",
        vertical:
          "flex-col " +
          "[&>button]:border-b-0 [&>button:last-child]:border-b " +
          "[&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

export interface ButtonGroupProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof buttonGroupVariants> {}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        data-slot="button-group"
        data-orientation={orientation ?? "horizontal"}
        className={cn(buttonGroupVariants({ orientation }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ButtonGroup.displayName = "ButtonGroup"

const ButtonGroupSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { orientation?: "horizontal" | "vertical" }
>(({ className, orientation = "vertical", ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      data-slot="button-group-separator"
      className={cn(
        "bg-border",
        orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        className
      )}
      {...props}
    />
  )
})

ButtonGroupSeparator.displayName = "ButtonGroupSeparator"

export { ButtonGroup, ButtonGroupSeparator, buttonGroupVariants }
