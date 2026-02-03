import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarStackVariants = cva("flex items-center", {
  variants: {
    size: {
      sm: "-space-x-2",
      default: "-space-x-3",
      lg: "-space-x-4",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export interface AvatarStackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarStackVariants> {
  /** Maximum number of avatars to show before +N indicator */
  max?: number
}

const AvatarStack = React.forwardRef<HTMLDivElement, AvatarStackProps>(
  ({ className, size, max, children, ...props }, ref) => {
    const childArray = React.Children.toArray(children)
    const totalCount = childArray.length
    const visibleChildren = max ? childArray.slice(0, max) : childArray
    const remainingCount = max ? totalCount - max : 0

    return (
      <div
        ref={ref}
        data-slot="avatar-stack"
        className={cn(avatarStackVariants({ size }), className)}
        {...props}
      >
        {visibleChildren.map((child, index) => (
          <div
            key={index}
            className="relative ring-2 ring-background rounded-full"
            style={{ zIndex: totalCount - index }}
          >
            {child}
          </div>
        ))}
        {remainingCount > 0 && (
          <div
            data-slot="avatar-stack-overflow"
            className={cn(
              "relative flex items-center justify-center rounded-full bg-muted text-muted-foreground ring-2 ring-background",
              size === "sm" && "h-8 w-8 text-xs",
              size === "lg" && "h-12 w-12 text-sm",
              (!size || size === "default") && "h-10 w-10 text-xs"
            )}
            style={{ zIndex: 0 }}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    )
  }
)
AvatarStack.displayName = "AvatarStack"

export { AvatarStack, avatarStackVariants }
