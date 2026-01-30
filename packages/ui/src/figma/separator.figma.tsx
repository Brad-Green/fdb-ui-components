import figma from "@figma/code-connect/react"

import { Separator } from "@/components/ui/separator"

figma.connect(
  Separator,
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=176-26202",
  {
    props: {
      orientation: figma.enum("Direction", {
        Default: "horizontal",
        Vertical: "vertical",
      }),
      containerClassName: figma.enum("Direction", {
        Default: "w-full",
        Vertical: "h-10",
      }),
    },
    example: ({ orientation, containerClassName }) => (
      <div className={containerClassName}>
        <Separator orientation={orientation} />
      </div>
    ),
  }
)

