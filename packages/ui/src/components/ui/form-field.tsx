import * as React from "react"
import { cn } from "@/lib/utils"

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  description?: string
  error?: string
  required?: boolean
  disabled?: boolean
  children: React.ReactElement
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { className, label, description, error, required, disabled, children, ...props },
    ref
  ) => {
    const child = React.Children.only(children) as React.ReactElement<
      React.HTMLAttributes<HTMLElement> & { disabled?: boolean }
    >

    const describedByIds: string[] = []
    if (description) describedByIds.push("form-field-description")
    if (error) describedByIds.push("form-field-error")

    const control = React.cloneElement(child, {
      "aria-invalid": !!error || undefined,
      "aria-describedby": describedByIds.length
        ? describedByIds.join(" ")
        : undefined,
      disabled: disabled || child.props.disabled,
    })

    return (
      <div
        ref={ref}
        className={cn("grid gap-1.5", className)}
        {...props}
      >
        {label && (
          <label
            className={cn(
              "text-sm font-medium leading-none",
              disabled && "opacity-60"
            )}
          >
            {label}
            {required && <span className="text-destructive"> *</span>}
          </label>
        )}

        {control}

        {description && !error && (
          <p
            id="form-field-description"
            className="text-xs text-muted-foreground"
          >
            {description}
          </p>
        )}

        {error && (
          <p
            id="form-field-error"
            className="text-xs text-destructive"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

FormField.displayName = "FormField"

export { FormField }
export type { FormFieldProps }
