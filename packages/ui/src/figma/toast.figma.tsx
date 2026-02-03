import figma from "@figma/code-connect/react"

import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastTitle,
} from "@/components/ui/toast"

// Note: In practice, toasts are shown via the useToast() hook and Toaster component.
// This Code Connect mapping shows the Toast structure for reference.
figma.connect(
  Toast,
  // Note: connect to the Sonner Content component node.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=139-11366",
  {
    props: {
      variant: figma.enum("Variant", {
        Default: "default",
        Destructive: "destructive",
      }),
    },
    example: ({ variant }) => (
      <Toast variant={variant}>
        <div className="grid gap-1">
          <ToastTitle>Toast Title</ToastTitle>
          <ToastDescription>Toast description message.</ToastDescription>
        </div>
        <ToastAction altText="Try again">Try again</ToastAction>
      </Toast>
    ),
  }
)
