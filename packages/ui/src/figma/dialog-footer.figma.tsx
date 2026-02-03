import figma from "@figma/code-connect/react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Note: DialogFooter with sticky prop keeps actions visible while content scrolls.
// Use DialogBody for scrollable content in long dialogs.
figma.connect(
  DialogFooter,
  // Note: connect to the Dialog Footer component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=176-21284",
  {
    example: () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Sticky Footer Example</DialogTitle>
            <DialogDescription>
              Footer stays visible while content scrolls.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            {/* Scrollable content goes here */}
            <p>Long content that may overflow...</p>
          </DialogBody>
          <DialogFooter sticky>
            <Button variant="outline">Cancel</Button>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
  }
)
