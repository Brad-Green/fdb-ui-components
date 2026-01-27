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
    const reactId = React.useId()

    const child = React.Children.only(children) as React.ReactElement<
      React.HTMLAttributes<HTMLElement> & { disabled?: boolean }
    >

    const controlId =
      (child.props as { id?: string }).id ?? `form-field-${reactId}-control`
    const descriptionId = `form-field-${reactId}-description`
    const errorId = `form-field-${reactId}-error`

    const describedByIds: string[] = []
    if (error) describedByIds.push(errorId)
    else if (description) describedByIds.push(descriptionId)

    const control = React.cloneElement(child, {
      id: controlId,
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
            htmlFor={controlId}
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
            id={descriptionId}
            className="text-xs text-muted-foreground"
          >
            {description}
          </p>
        )}

        {error && (
          <p
            id={errorId}
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
