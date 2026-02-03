import figma from "@figma/code-connect/react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"

// Note: Date Picker is a composition of Popover + Calendar.
// Use the format() function from date-fns to display the selected date.
figma.connect(
  Calendar,
  // Note: connect to the Date Picker component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=288-119954",
  {
    example: () => (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Pick a date
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" />
        </PopoverContent>
      </Popover>
    ),
  }
)
