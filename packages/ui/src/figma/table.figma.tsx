import figma from "@figma/code-connect/react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Note: Table is a layout component with no variant axes. TableRow supports
// data-state="selected" for highlighting selected rows.
figma.connect(
  Table,
  // Note: connect to the Basic Table Cell component node as the entry point.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=288-172242",
  {
    props: {},
    example: () => (
      <Table>
        <TableCaption>A list of items.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Item 1</TableCell>
            <TableCell>Active</TableCell>
            <TableCell className="text-right">$100.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Item 2</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell className="text-right">$200.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  }
)
