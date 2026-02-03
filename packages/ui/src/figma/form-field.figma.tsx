import figma from "@figma/code-connect/react"

import { FormField } from "@/components/ui/form-field"
import { Input } from "@/components/ui/input"

// Note: FormField provides consistent label, input, description, and error layout.
// Use orientation="horizontal" for side-by-side label and input.
figma.connect(
  FormField,
  // Note: connect to the Vertical Field component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=120-13754",
  {
    example: () => (
      <FormField
        label="Email"
        htmlFor="email"
        description="We'll never share your email"
        required
      >
        <Input id="email" type="email" placeholder="Enter your email" />
      </FormField>
    ),
  }
)
