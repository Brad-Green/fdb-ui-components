import figma from "@figma/code-connect/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Note: Accordion open/close state is managed by Radix. The data-state attribute
// on trigger and content drives the chevron rotation and expand/collapse animation.
figma.connect(
  Accordion,
  // Note: connect to the Accordion Trigger component node.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=66-5034",
  {
    props: {
      type: figma.enum("Type", {
        Single: "single",
        Multiple: "multiple",
      }),
    },
    example: ({ type }) => (
      <Accordion type={type} collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the design system.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  }
)
