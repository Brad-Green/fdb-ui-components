import figma from "@figma/code-connect/react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

figma.connect(
  Card,
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=179-29234",
  {
    props: {},
    example: () => (
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="text-sm text-muted-foreground">Body content…</div>
        </CardContent>

        <CardFooter>
          <div className="text-sm text-muted-foreground">Footer…</div>
        </CardFooter>
      </Card>
    ),
  }
)

