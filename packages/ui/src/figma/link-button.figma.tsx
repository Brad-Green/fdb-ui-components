import figma from "@figma/code-connect/react"

import { Button } from "@/components/ui/button"

// Note: Link Button in Figma renders as an anchor styled like a button.
// We use Button with asChild to wrap an anchor element.
figma.connect(
  Button,
  // Note: connect to the Link Button component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=11-2014",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Outline: "outline",
        Ghost: "ghost",
        GhostMuted: "ghostMuted",
        "Ghost Muted": "ghostMuted",
        Destructive: "destructive",
      }),
      size: figma.enum("Size", {
        Mini: "mini",
        Small: "small",
        Regular: "regular",
        Large: "large",
      }),
      roundness: figma.enum("Roundness", {
        Default: "default",
        Round: "round",
      }),
    },
    example: ({ variant, size, roundness }) => (
      <Button variant={variant} size={size} roundness={roundness} asChild>
        <a href="#">Link</a>
      </Button>
    ),
  }
)
