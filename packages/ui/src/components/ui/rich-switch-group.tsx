"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const RichSwitchGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "vertical" | "horizontal"
  }
>(({ className, orientation = "vertical", ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    data-slot="rich-switch-group"
    data-orientation={orientation}
    className={cn(
      "grid gap-3",
      orientation === "horizontal" ? "grid-flow-col auto-cols-fr" : "grid-cols-1",
      className
    )}
    {...props}
  />
))
RichSwitchGroup.displayName = "RichSwitchGroup"

interface RichSwitchItemProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  title: string
  description?: string
}

const RichSwitchItem = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  RichSwitchItemProps
>(({ className, title, description, id, ...props }, ref) => {
  const generatedId = React.useId()
  const itemId = id || generatedId

  return (
    <label
      htmlFor={itemId}
      className={cn(
        "relative flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-input p-4 shadow-sm transition-colors",
        "hover:bg-accent/50",
        "has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5",
        "has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50",
        className
      )}
    >
      <div className="grid gap-1">
        <span className="text-sm font-medium leading-none">{title}</span>
        {description && (
          <span className="text-sm text-muted-foreground">{description}</span>
        )}
      </div>
      <SwitchPrimitives.Root
        ref={ref}
        id={itemId}
        data-slot="rich-switch-item"
        className={cn(
          "peer shrink-0 inline-flex h-6 w-11 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
        )}
        {...props}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
            "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          )}
        />
      </SwitchPrimitives.Root>
    </label>
  )
})
RichSwitchItem.displayName = "RichSwitchItem"

export { RichSwitchGroup, RichSwitchItem }
