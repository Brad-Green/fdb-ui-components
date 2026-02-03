"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RichRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    orientation?: "vertical" | "horizontal"
  }
>(({ className, orientation = "vertical", ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    data-slot="rich-radio-group"
    data-orientation={orientation}
    className={cn(
      "grid gap-3",
      orientation === "horizontal" ? "grid-flow-col auto-cols-fr" : "grid-cols-1",
      className
    )}
    {...props}
  />
))
RichRadioGroup.displayName = "RichRadioGroup"

interface RichRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  title: string
  description?: string
}

const RichRadioItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RichRadioItemProps
>(({ className, title, description, ...props }, ref) => (
  <label
    className={cn(
      "relative flex cursor-pointer items-start gap-3 rounded-lg border border-input p-4 shadow-sm transition-colors",
      "hover:bg-accent/50",
      "has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5",
      "has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50",
      className
    )}
  >
    <RadioGroupPrimitive.Item
      ref={ref}
      data-slot="rich-radio-item"
      className={cn(
        "mt-0.5 shrink-0 aspect-square h-4 w-4 rounded-full border border-input text-primary shadow-sm transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary-subtle"
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
    <div className="grid gap-1">
      <span className="text-sm font-medium leading-none">{title}</span>
      {description && (
        <span className="text-sm text-muted-foreground">{description}</span>
      )}
    </div>
  </label>
))
RichRadioItem.displayName = "RichRadioItem"

export { RichRadioGroup, RichRadioItem }
