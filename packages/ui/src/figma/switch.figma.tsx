import figma from "@figma/code-connect/react"

import { Switch } from "@/components/ui/switch"

figma.connect(
  Switch,
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=16-1801",
  {
    props: {
      defaultChecked: figma.enum("Checked?", { False: false, True: true }),
      disabled: figma.enum("State", { Disabled: true }),
    },
    example: ({ defaultChecked, disabled }) => (
      <Switch defaultChecked={defaultChecked} disabled={disabled} />
    ),
  }
)

