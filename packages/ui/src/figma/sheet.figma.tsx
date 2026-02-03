import figma from "@figma/code-connect/react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

figma.connect(
  Sheet,
  // Note: connect to the top-level node that contains all variants.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=301-243831",
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
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open sheet</Button>
        </SheetTrigger>

        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <div className="py-4">Sheet content…</div>
        </SheetContent>
      </Sheet>
    ),
  }
)
