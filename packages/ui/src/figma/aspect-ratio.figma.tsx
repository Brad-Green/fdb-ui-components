import figma from "@figma/code-connect/react"

import { AspectRatio } from "@/components/ui/aspect-ratio"

// Note: AspectRatio displays content within a desired ratio.
// Use for images, videos, or any content that needs consistent proportions.
figma.connect(
  AspectRatio,
  // Note: connect to the Carousel with Image component set (similar image display).
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=164-18350",
  {
    example: () => (
      <div className="w-[450px]">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800"
            alt="Photo by Drew Beamer"
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    ),
  }
)
