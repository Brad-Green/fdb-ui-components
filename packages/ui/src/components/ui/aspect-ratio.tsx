import * as React from "react"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>(({ ratio, ...props }, ref) => (
  <AspectRatioPrimitive.Root
    ref={ref}
    data-slot="aspect-ratio"
    data-ratio={typeof ratio === "number" ? String(ratio) : undefined}
    ratio={ratio}
    {...props}
  />
))
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName

export { AspectRatio }
