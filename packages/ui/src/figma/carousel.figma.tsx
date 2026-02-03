import figma from "@figma/code-connect/react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

// Note: Carousel is built on Embla Carousel. The orientation prop controls
// scroll direction. Previous/Next buttons are automatically disabled when
// scrolling isn't possible. Emits data-orientation on the root.
figma.connect(
  Carousel,
  // Note: connect to the top-level node that contains all variants.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=164-18293",
  {
    props: {
      orientation: figma.enum("Orientation", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
    },
    example: ({ orientation }) => (
      <Carousel orientation={orientation} className="w-full max-w-xs">
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">1</span>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">2</span>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    ),
  }
)
