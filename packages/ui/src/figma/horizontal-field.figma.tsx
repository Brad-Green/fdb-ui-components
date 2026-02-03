import figma from "@figma/code-connect/react"

import { FormField } from "@/components/ui/form-field"
import { Input } from "@/components/ui/input"

// Note: FormField with orientation="horizontal" places label and input side by side.
// Useful for compact forms or settings pages.
figma.connect(
  FormField,
  // Note: connect to the Horizontal Field component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=120-13775",
  {
    example: () => (
      <FormField
        orientation="horizontal"
        label="Username"
        htmlFor="username"
      >
        <Input id="username" placeholder="Enter username" />
      </FormField>
    ),
  }
)
