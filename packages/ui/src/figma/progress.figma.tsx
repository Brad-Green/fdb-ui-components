import figma from "@figma/code-connect/react"

import { Progress } from "@/components/ui/progress"

figma.connect(
  Progress,
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=438-64981",
  {
    props: {
      value: figma.enum("Progress", {
        "0": 0,
        "10": 10,
        "25": 25,
        "33": 33,
        "50": 50,
        "66": 66,
        "75": 75,
        "90": 90,
        "100": 100,
      }),
    },
    example: ({ value }) => <Progress value={value} />,
  }
)

