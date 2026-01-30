import figma from "@figma/code-connect/react"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

figma.connect(
  RadioGroup,
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=19-6048",
  {
    props: {
      defaultValue: figma.enum("Checked?", { True: "one" }),
      containerClassName: figma.enum("Layout", {
        Inline: "flex items-center gap-2",
        Block: "grid gap-2",
      }),
    },
    example: ({ defaultValue, containerClassName }) => (
      <RadioGroup defaultValue={defaultValue}>
        <div className={containerClassName}>
          <RadioGroupItem value="one" />
          <span className="text-sm">Label</span>
        </div>
      </RadioGroup>
    ),
  }
)

