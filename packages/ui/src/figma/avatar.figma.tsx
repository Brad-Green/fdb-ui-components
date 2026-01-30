import figma from "@figma/code-connect/react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

figma.connect(
  Avatar,
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=18-1398",
  {
    props: {
      className: figma.enum("Size", {
        Regular: "h-10 w-10",
        Small: "h-8 w-8",
        Tiny: "h-6 w-6",
        "Extra Tiny": "h-5 w-5",
      }),
    },
    example: ({ className }) => (
      <Avatar className={className}>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  }
)

