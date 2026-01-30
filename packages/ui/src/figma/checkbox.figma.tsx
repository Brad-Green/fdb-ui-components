import figma from "@figma/code-connect/react"

import { Checkbox } from "@/components/ui/checkbox"

figma.connect(
  Checkbox,
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=16-1790",
  {
    props: {
      checked: figma.enum("Checked?", {
        False: false,
        True: true,
        Indeterminate: "indeterminate",
      }),
      disabled: figma.enum("State", { Disabled: true }),
      ariaInvalid: figma.enum("State", { Error: true, "Error Focus": true }),
    },
    example: ({ checked, disabled, ariaInvalid }) => (
      <Checkbox checked={checked} disabled={disabled} aria-invalid={ariaInvalid} />
    ),
  }
)

