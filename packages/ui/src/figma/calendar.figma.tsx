import figma from "@figma/code-connect/react"

import { Calendar } from "@/components/ui/calendar"

// Note: Calendar is built on react-day-picker. Navigation buttons use aria-disabled
// when month constraints (fromMonth/toMonth) prevent scrolling. Day buttons emit
// data-day, data-selected-single, data-range-start, data-range-middle, data-range-end.
// The mode prop ("single" | "range" | "multiple") is passed at the consumer level.
figma.connect(
  Calendar,
  // Note: connect to the Date Picker component node.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=288-119954",
  {
    props: {},
    example: () => (
      <Calendar
        mode="single"
        className="rounded-md border"
      />
    ),
  }
)
