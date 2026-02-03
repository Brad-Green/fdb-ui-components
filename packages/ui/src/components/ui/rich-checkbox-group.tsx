"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const RichCheckboxGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "vertical" | "horizontal"
  }
>(({ className, orientation = "vertical", ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    data-slot="rich-checkbox-group"
    data-orientation={orientation}
    className={cn(
      "grid gap-3",
      orientation === "horizontal" ? "grid-flow-col auto-cols-fr" : "grid-cols-1",
      className
    )}
    {...props}
  />
))
RichCheckboxGroup.displayName = "RichCheckboxGroup"

interface RichCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  title: string
  description?: string
}

const RichCheckboxItem = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  RichCheckboxItemProps
>(({ className, title, description, id, ...props }, ref) => {
  const generatedId = React.useId()
  const itemId = id || generatedId

  return (
    <label
      htmlFor={itemId}
      className={cn(
        "relative flex cursor-pointer items-start gap-3 rounded-lg border border-input p-4 shadow-sm transition-colors",
        "hover:bg-accent/50",
        "has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5",
        "has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50",
        className
      )}
    >
      <CheckboxPrimitive.Root
        ref={ref}
        id={itemId}
        data-slot="rich-checkbox-item"
        className={cn(
          "mt-0.5 shrink-0 peer h-4 w-4 rounded-sm border border-input shadow-sm transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary"
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
          <Check className="h-3.5 w-3.5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <div className="grid gap-1">
        <span className="text-sm font-medium leading-none">{title}</span>
        {description && (
          <span className="text-sm text-muted-foreground">{description}</span>
        )}
      </div>
    </label>
  )
})
RichCheckboxItem.displayName = "RichCheckboxItem"

export { RichCheckboxGroup, RichCheckboxItem }
