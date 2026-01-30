import figma from "@figma/code-connect/react"

import { Textarea } from "@/components/ui/textarea"

figma.connect(
  Textarea,
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=16-1745",
  {
    props: {
      roundness: figma.enum("Roundness", { Default: "default", Round: "round" }),

      disabled: figma.enum("State", { Disabled: true }),
      ariaInvalid: figma.enum("State", { Error: true, "Error Focus": true }),

      placeholder: figma.enum("State", { Placeholder: "Type your message here." }),
      defaultValue: figma.enum("State", { Value: "Value" }),
    },
    example: ({ roundness, disabled, ariaInvalid, placeholder, defaultValue }) => (
      <Textarea
        roundness={roundness}
        disabled={disabled}
        aria-invalid={ariaInvalid}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    ),
  }
)

