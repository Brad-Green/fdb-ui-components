import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const RadioGroup = RadioGroupPrimitive.Root

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
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioItemVariants({ size }), className)}
      data-size={size}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem, radioItemVariants }
