import figma from "@figma/code-connect/react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

// Note: Tooltip placement (side) is determined by Radix at render time based on
// available space. The Figma component may show static placement for visual design,
// but code relies on Radix's automatic positioning.
figma.connect(
  Tooltip,
  // Note: connect to the top-level node that contains all variants.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=133-14788",
  {
    props: {
      side: figma.enum("Side", {
        Top: "top",
        Right: "right",
        Bottom: "bottom",
        Left: "left",
      }),
    },
    example: ({ side }) => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>Tooltip content</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  }
)
