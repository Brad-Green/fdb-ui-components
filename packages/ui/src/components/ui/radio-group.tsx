import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    data-slot="radio-group"
    className={cn(className)}
    {...props}
  />
))
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const radioItemVariants = cva(
  "aspect-square shrink-0 rounded-full border border-input text-primary shadow-sm transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-ring-error aria-[invalid=true]:data-[state=checked]:border-destructive " +
    "disabled:cursor-not-allowed disabled:opacity-50 " +
    "data-[state=checked]:border-primary data-[state=checked]:bg-primary-subtle",
  {
    variants: {
      size: {
        regular: "h-4 w-4",
        large: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "regular",
    },
  }
)

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioItemVariants> {}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, size, ...props }, ref) => {
  const resolvedSize = size ?? "regular"

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      data-slot="radio-group-item"
      className={cn(radioItemVariants({ size: resolvedSize }), className)}
      data-size={resolvedSize}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center"
      >
        <Circle className="h-2.5 w-2.5 fill-current text-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem, radioItemVariants }
