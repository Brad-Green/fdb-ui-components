import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const formFieldVariants = cva("grid gap-2", {
  variants: {
    orientation: {
      vertical: "grid-cols-1",
      horizontal: "grid-cols-[auto_1fr] items-center gap-x-4",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

export interface FormFieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formFieldVariants> {
  label?: string
  htmlFor?: string
  description?: string
  error?: string
  required?: boolean
  disabled?: boolean
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      className,
      orientation,
      label,
      htmlFor,
      description,
      error,
      required,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-slot="form-field"
        data-orientation={orientation ?? "vertical"}
        data-disabled={disabled || undefined}
        className={cn(
          formFieldVariants({ orientation }),
          disabled && "opacity-50 pointer-events-none",
          className
        )}
        {...props}
      >
        {label && (
          <Label
            htmlFor={htmlFor}
            className={cn(
              "text-sm font-medium",
              error && "text-destructive",
              orientation === "horizontal" && "justify-self-end"
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}
        <div className="grid gap-1.5">
          {children}
          {description && !error && (
            <p
              data-slot="form-field-description"
              className="text-sm text-muted-foreground"
            >
              {description}
            </p>
          )}
          {error && (
            <p
              data-slot="form-field-error"
              className="text-sm text-destructive"
              role="alert"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    )
  }
)
FormField.displayName = "FormField"

export { FormField, formFieldVariants }
