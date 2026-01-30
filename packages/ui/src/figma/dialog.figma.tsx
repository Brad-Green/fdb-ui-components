import figma from "@figma/code-connect/react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Note: the Figma component has a `Type` axis (Desktop/Mobile/etc). The canonical
// code implementation is the same Radix dialog; we use `className` overrides on
// `DialogContent` to express size differences without adding visual-only props.
figma.connect(
  Dialog,
  // Note: connect to the top-level node that contains all variants.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=151-12298",
  {
    props: {
      contentClassName: figma.enum("Type", {
        Desktop: "max-w-lg",
        "Desktop Scrollable": "max-w-lg max-h-[80vh] overflow-auto",
        Mobile: "max-w-sm",
        "Mobile Full Screen Scrollable": "h-[80vh] max-w-sm",
      }),
    },
    example: ({ contentClassName }) => (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open dialog</Button>
        </DialogTrigger>

        <DialogContent className={contentClassName}>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <div className="text-sm text-muted-foreground">
            Body content…
          </div>
        </DialogContent>
      </Dialog>
    ),
  }
)

