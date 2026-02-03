import figma from "@figma/code-connect/react"

import { Toaster } from "@/components/ui/sonner"

// Note: Sonner is an opinionated toast component by Emil Kowalski.
// Add <Toaster /> to your layout, then use toast() to show notifications.
// Types: toast(), toast.success(), toast.error(), toast.warning(), toast.info()
figma.connect(
  Toaster,
  // Note: connect to the Sonner component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=139-11361",
  {
    example: () => (
      <>
        {/* Add Toaster to your layout */}
        <Toaster />
        {/* Then trigger toasts anywhere */}
        {/* toast("Event has been created.") */}
        {/* toast.success("Success!") */}
        {/* toast.error("Error occurred") */}
      </>
    ),
  }
)
