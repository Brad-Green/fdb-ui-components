import figma from "@figma/code-connect/react"

import { Slider } from "@/components/ui/slider"

figma.connect(
  Slider,
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=162-17939",
  {
    props: {
      defaultValue: figma.enum("Type", {
        Default: [50],
        "Range narrow": [40, 60],
        "Range wide": [20, 80],
      }),
    },
    example: ({ defaultValue }) => (
      <div className="h-40">
        <Slider orientation="vertical" defaultValue={defaultValue} />
      </div>
    ),
  }
)

