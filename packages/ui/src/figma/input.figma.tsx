import figma from "@figma/code-connect/react"

import { Input } from "@/components/ui/input"

figma.connect(
  Input,
  // Note: connect to the top-level node that contains all variants.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=16-1738",
  {
    props: {
      size: figma.enum("Size", {
        Mini: "mini",
        Small: "small",
        Regular: "regular",
        Large: "large",
      }),
      roundness: figma.enum("Roundness", {
        Default: "default",
        Round: "round",
      }),

      // Figma state variants represent visual states. In code we map only semantic states.
      disabled: figma.enum("State", { Disabled: true }),
      ariaInvalid: figma.enum("State", { Error: true, "Error Focus": true }),

      // Content states
      placeholder: figma.enum("State", { Placeholder: "Value" }),
      defaultValue: figma.enum("State", { Value: "Value" }),
    },
    example: ({ size, roundness, disabled, ariaInvalid, placeholder, defaultValue }) => (
      <Input
        size={size}
        roundness={roundness}
        disabled={disabled}
        aria-invalid={ariaInvalid}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    ),
  }
)

