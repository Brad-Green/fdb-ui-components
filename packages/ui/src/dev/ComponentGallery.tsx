import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ChevronRight, Plus, Bold, Italic, Underline, Archive, Trash, CalendarIcon, Calculator, Settings, User } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Toaster as SonnerToaster, toast as sonnerToast } from "@/components/ui/sonner"
import { DialogBody, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"
import { Spinner } from "@/components/ui/spinner"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { FormField } from "@/components/ui/form-field"
import { RichCheckboxGroup, RichCheckboxItem } from "@/components/ui/rich-checkbox-group"
import { RichSwitchGroup, RichSwitchItem } from "@/components/ui/rich-switch-group"
import { RichRadioGroup, RichRadioItem } from "@/components/ui/rich-radio-group"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AvatarStack } from "@/components/ui/avatar-stack"
import { Toaster } from "@/components/ui/toaster"
import { toast } from "@/hooks/use-toast"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ComponentGallery() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window === "undefined") return false
    return document.documentElement.classList.contains("dark")
  })
  const [selectValue, setSelectValue] = React.useState<string | undefined>()
  const [demoCheckboxChecked, setDemoCheckboxChecked] = React.useState(false)
  const [demoSwitchChecked, setDemoSwitchChecked] = React.useState(false)
  const [demoRadioValue, setDemoRadioValue] = React.useState("one")
  const [demoSliderValue, setDemoSliderValue] = React.useState<number[]>([50])
  const [collapsibleOpen, setCollapsibleOpen] = React.useState(false)

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground p-10 space-y-16">
      <div className="flex items-center justify-between gap-6">
        <h1 className="text-2xl font-semibold">Component Gallery</h1>
        <div className="flex items-center gap-3">
          <Label htmlFor="dark-mode" className="text-sm">
            Dark mode
          </Label>
          <Switch
            id="dark-mode"
            checked={isDark}
            onCheckedChange={setIsDark}
          />
        </div>
      </div>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>        
        <div className="space-y-4">

          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghostMuted">Ghost Muted</Button>
            <Button variant="destructive">Destructive</Button>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button size="mini">Mini</Button>
            <Button size="small">Small</Button>
            <Button size="regular">Regular</Button>
            <Button size="large">Large</Button>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button roundness="default">Default</Button>
            <Button roundness="round">Round</Button>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button decoration="leftIcon" leftIcon={<Plus />}>
              Left icon
            </Button>
            <Button decoration="rightIcon" rightIcon={<ChevronRight />}>
              Right icon
            </Button>
            <Button
              decoration="both"
              leftIcon={<Plus />}
              rightIcon={<ChevronRight />}
            >
              Both
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button aria-invalid variant="outline">
              aria-invalid
            </Button>
            <Button disabled variant="outline">
              Disabled
            </Button>
            <Button aria-invalid disabled variant="outline">
              aria-invalid + Disabled
            </Button>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Loading Button (with Spinner)</div>
            <div className="flex flex-wrap gap-4 items-center">
              <Button disabled leftIcon={<Spinner />}>
                Loading...
              </Button>
              <Button variant="outline" disabled leftIcon={<Spinner />}>
                Please wait
              </Button>
              <Button variant="secondary" disabled leftIcon={<Spinner size="small" />}>
                Saving
              </Button>
            </div>
          </div>
          
        </div>
      </section>

      <Separator />

      {/* Spinner */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Spinner</h2>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Spinner size="mini" />
            <span className="text-xs text-muted-foreground">Mini</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="small" />
            <span className="text-xs text-muted-foreground">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="regular" />
            <span className="text-xs text-muted-foreground">Regular</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="large" />
            <span className="text-xs text-muted-foreground">Large</span>
          </div>
        </div>
      </section>

      <Separator />

      {/* Button Group */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button Group</h2>
        <p className="text-sm text-muted-foreground">
          Use ButtonGroup when buttons perform <strong>actions</strong> (e.g., Archive, Delete).
        </p>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm font-medium">Horizontal (default)</div>
            <ButtonGroup>
              <Button variant="outline">Archive</Button>
              <Button variant="outline">Report</Button>
              <Button variant="outline">Delete</Button>
            </ButtonGroup>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">With Separator</div>
            <ButtonGroup>
              <Button variant="outline" leftIcon={<Archive className="size-4" />}>
                Archive
              </Button>
              <ButtonGroupSeparator />
              <Button variant="outline" leftIcon={<Trash className="size-4" />}>
                Delete
              </Button>
            </ButtonGroup>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Vertical</div>
            <ButtonGroup orientation="vertical">
              <Button variant="outline">Top</Button>
              <Button variant="outline">Middle</Button>
              <Button variant="outline">Bottom</Button>
            </ButtonGroup>
          </div>
        </div>
      </section>

      <Separator />

      {/* Toggle */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Toggle</h2>
        <p className="text-sm text-muted-foreground">
          A single two-state button (on/off). For grouping toggles, see ToggleGroup below.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle aria-label="Toggle bold">
            <Bold className="size-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic className="size-4" />
          </Toggle>
          <Toggle defaultPressed aria-label="Toggle underline (pressed)">
            <Underline className="size-4" />
          </Toggle>
          <Toggle disabled aria-label="Toggle disabled">
            <Bold className="size-4" />
          </Toggle>
        </div>
      </section>

      <Separator />

      {/* Toggle Group */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Toggle Group</h2>
        <p className="text-sm text-muted-foreground">
          Use ToggleGroup when buttons toggle <strong>state</strong> (e.g., text formatting).
          Can be "single" (one at a time) or "multiple" (any combination).
        </p>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm font-medium">Multiple selection (text formatting)</div>
            <ToggleGroup type="multiple" variant="outline">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="size-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Single selection</div>
            <ToggleGroup type="single" defaultValue="bold">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="size-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Sizes</div>
            <div className="flex flex-wrap items-center gap-6">
              <ToggleGroup type="single" size="sm" variant="outline">
                <ToggleGroupItem value="a">Sm</ToggleGroupItem>
                <ToggleGroupItem value="b">Sm</ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="single" size="default" variant="outline">
                <ToggleGroupItem value="a">Default</ToggleGroupItem>
                <ToggleGroupItem value="b">Default</ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="single" size="lg" variant="outline">
                <ToggleGroupItem value="a">Lg</ToggleGroupItem>
                <ToggleGroupItem value="b">Lg</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Badges */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Badges</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <Separator />

      {/* Inputs */}
      <section className="space-y-4 max-w-sm">
        <h2 className="text-xl font-semibold">Inputs</h2>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="name@company.com" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms</Label>
        </div>

        <div className="space-y-4 max-w-sm">
          <Input placeholder="Regular size" />
          <Input size="large" placeholder="Large size" />
          <Input size="small" placeholder="Small size" />
          <Input size="mini" placeholder="Mini size" />
          <Input roundness="round" placeholder="Round input" />
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Input decoration</div>
          <div className="space-y-3">
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Plus className="h-4 w-4" />
              </span>
              <Input decoration="leftIcon" placeholder="Left icon" />
            </div>
            <div className="relative">
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <ChevronRight className="h-4 w-4" />
              </span>
              <Input decoration="rightIcon" placeholder="Right icon" />
            </div>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Plus className="h-4 w-4" />
              </span>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <ChevronRight className="h-4 w-4" />
              </span>
              <Input decoration="both" placeholder="Both icons" />
            </div>
          </div>
        </div>

        <div className="space-y-4 max-w-sm">
          <Textarea placeholder="Regular" />
          <Textarea size="large" placeholder="Large" />
          <Textarea size="small" placeholder="Small" />
          <Textarea size="mini" placeholder="Mini" />
          <Textarea roundness="round" placeholder="Round" />
        </div>
      </section>

      <Separator />

      {/* Input File */}
      <section className="space-y-4 max-w-sm">
        <h2 className="text-xl font-semibold">Input File</h2>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="document">Document (disabled)</Label>
          <Input id="document" type="file" disabled />
        </div>
      </section>

      <Separator />

      {/* Input OTP */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Input OTP</h2>
        <p className="text-sm text-muted-foreground">
          Accessible one-time password input with copy/paste support.
        </p>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm font-medium">6 digits with separator</div>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">4 digits (PIN style)</div>
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Disabled</div>
            <InputOTP maxLength={6} disabled>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
      </section>

      <Separator />

      {/* Date Picker */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Date Picker</h2>
        <p className="text-sm text-muted-foreground">
          Composition of Popover + Calendar. Use date-fns format() to display dates.
        </p>
        <div className="flex flex-wrap gap-4">
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
        </div>
      </section>

      <Separator />

      {/* Select */}
      <section className="space-y-4 max-w-sm">
        <h2 className="text-xl font-semibold">Select</h2>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger size="large" variant="destructive">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one">One</SelectItem>
            <SelectItem value="two">Two</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger roundness="round">
            <SelectValue placeholder="Round trigger" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="r1">Round 1</SelectItem>
            <SelectItem value="r2">Round 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger
            decoration="leftIcon"
            leftIcon={<Plus className="h-4 w-4 text-muted-foreground" />}
          >
            <SelectValue placeholder="Left icon decoration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="x">X</SelectItem>
            <SelectItem value="y">Y</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger aria-invalid>
            <SelectValue placeholder="aria-invalid on trigger" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="i1">Invalid 1</SelectItem>
            <SelectItem value="i2">Invalid 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger disabled>
            <SelectValue placeholder="Disabled trigger" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="d1">Disabled 1</SelectItem>
            <SelectItem value="d2">Disabled 2</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <Separator />

      {/* Validation / States */}
      <section className="space-y-4 max-w-3xl">
        <h2 className="text-xl font-semibold">Validation / State Matrix</h2>
        <p className="text-sm text-muted-foreground">
          These examples are meant for quick manual checks of disabled +{" "}
          <code className="rounded bg-muted px-1 py-0.5">aria-invalid</code>{" "}
          styling.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Select (FormField-driven)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={selectValue} onValueChange={setSelectValue}>
                <FormField label="Country (normal)">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a country" />
                  </SelectTrigger>
                </FormField>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="mx">Mexico</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectValue} onValueChange={setSelectValue}>
                <FormField label="Country (invalid)" error="Required">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a country" />
                  </SelectTrigger>
                </FormField>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="mx">Mexico</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectValue} onValueChange={setSelectValue}>
                <FormField label="Country (disabled)" disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a country" />
                  </SelectTrigger>
                </FormField>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="mx">Mexico</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Checkbox / Switch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="text-sm font-medium">Checkbox</div>
                <div className="grid gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Checkbox
                      id="demo-checkbox"
                      checked={demoCheckboxChecked}
                      onCheckedChange={(v) => setDemoCheckboxChecked(v === true)}
                    />
                    <Label htmlFor="demo-checkbox">Interactive (normal)</Label>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <FormField label="Regular (invalid)" error="Required">
                      <Checkbox />
                    </FormField>
                    <FormField label="Large (invalid)" error="Required">
                      <Checkbox size="large" />
                    </FormField>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <FormField label="Round (invalid)" error="Required">
                      <Checkbox roundness="round" />
                    </FormField>
                    <FormField label="Large + Round (invalid)" error="Required">
                      <Checkbox size="large" roundness="round" />
                    </FormField>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <FormField label="Regular (aria-invalid)" description="Direct aria-invalid on control">
                      <Checkbox aria-invalid />
                    </FormField>
                    <FormField label="Large + Round (aria-invalid)" description="Direct aria-invalid on control">
                      <Checkbox aria-invalid size="large" roundness="round" />
                    </FormField>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <FormField label="Regular (invalid + disabled)" error="Required" disabled>
                      <Checkbox />
                    </FormField>
                    <FormField label="Large (invalid + disabled)" error="Required" disabled>
                      <Checkbox size="large" />
                    </FormField>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium">Switch</div>
                <div className="grid gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <Switch
                      id="demo-switch"
                      checked={demoSwitchChecked}
                      onCheckedChange={setDemoSwitchChecked}
                    />
                    <Label htmlFor="demo-switch">Interactive (normal)</Label>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <FormField label="Regular (invalid)" error="Required">
                      <Switch />
                    </FormField>
                    <FormField label="Large (invalid)" error="Required">
                      <Switch size="large" />
                    </FormField>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <FormField label="Regular (aria-invalid)" description="Direct aria-invalid on control">
                      <Switch aria-invalid />
                    </FormField>
                    <FormField label="Large (aria-invalid)" description="Direct aria-invalid on control">
                      <Switch aria-invalid size="large" />
                    </FormField>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <FormField label="Regular (invalid + disabled)" error="Required" disabled>
                      <Switch />
                    </FormField>
                    <FormField label="Large (invalid + disabled)" error="Required" disabled>
                      <Switch size="large" />
                    </FormField>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Button (FormField-driven invalid)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="outline">Normal</Button>
              <FormField error="Required">
                <Button variant="outline">Invalid</Button>
              </FormField>
              <FormField error="Required" disabled>
                <Button variant="outline">Invalid + Disabled</Button>
              </FormField>
            </div>
            <p className="text-xs text-muted-foreground">
              This verifies <code className="rounded bg-muted px-1 py-0.5">aria-invalid</code>{" "}
              rings for button-like controls use <code className="rounded bg-muted px-1 py-0.5">ring-ring-error</code>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Slider</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <div className="text-sm font-medium">Normal</div>
              <Slider value={demoSliderValue} onValueChange={setDemoSliderValue} />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Invalid (FormField-driven)</div>
              <FormField error="Out of range">
                <Slider defaultValue={[50]} />
              </FormField>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Invalid (aria-invalid on root)</div>
              <Slider defaultValue={[50]} aria-invalid />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Disabled</div>
              <Slider defaultValue={[50]} disabled />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Calendar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm font-medium">Normal navigation</div>
              <Calendar mode="single" />

              <div className="text-sm font-medium">Navigation disabled</div>
              <Calendar
                mode="single"
                fromMonth={new Date(2026, 0, 1)}
                toMonth={new Date(2026, 0, 1)}
              />
              <p className="text-xs text-muted-foreground">
                Verify disabled navigation sets{" "}
                <code className="rounded bg-muted px-1 py-0.5">aria-disabled</code>{" "}
                on the previous/next month buttons and prevents interaction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Pagination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" aria-disabled />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <p className="text-xs text-muted-foreground">
                Verify the active link sets{" "}
                <code className="rounded bg-muted px-1 py-0.5">aria-current="page"</code>{" "}
                and{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-active="true"</code>.
                Also verify the disabled previous link sets{" "}
                <code className="rounded bg-muted px-1 py-0.5">aria-disabled</code>{" "}
                and{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-disabled="true"</code>.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Menubar (focus / disabled)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New</MenubarItem>
                    <MenubarSub>
                      <MenubarSubTrigger>More</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Sub item A</MenubarItem>
                        <MenubarItem>Sub item B</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSub>
                      <MenubarSubTrigger disabled>Disabled submenu</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Should not open</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarItem disabled>Disabled item</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger disabled>Disabled trigger</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Should not open</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <p className="text-xs text-muted-foreground">
                Tab to the triggers to verify focus ring; open a menu to confirm{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-state="open"</code>{" "}
                styling. In DevTools, verify the menu content has{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-side</code> and{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-state</code>. Open the
                “More” submenu and verify the sub-trigger gets{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-state="open"</code>{" "}
                and the submenu content has{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-side</code> +{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-state</code>. Disabled
                trigger/submenu should not open.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Navigation Menu (focus / disabled)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4">
                      <NavigationMenuLink className="text-sm">
                        This is a stub content panel.
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger disabled>
                      Disabled trigger
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuIndicator />
              </NavigationMenu>
              <p className="text-xs text-muted-foreground">
                Tab to the triggers to verify focus ring; open the menu to confirm{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-state="open"</code>{" "}
                styling and chevron rotation. In DevTools, verify the content panel
                uses{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-motion</code>{" "}
                for enter/exit animation, and the viewport uses{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-state</code>{" "}
                plus CSS vars like{" "}
                <code className="rounded bg-muted px-1 py-0.5">
                  --radix-navigation-menu-viewport-height
                </code>{" "}
                for sizing. Also verify the indicator toggles{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-state="visible"</code>
                /{" "}
                <code className="rounded bg-muted px-1 py-0.5">data-state="hidden"</code>.
                Disabled trigger should look/behave disabled.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Dropdown Menu (item focus-visible ring)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Item One</DropdownMenuItem>
                <DropdownMenuItem>Item Two</DropdownMenuItem>
                <DropdownMenuItem disabled>Disabled item</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <p className="text-xs text-muted-foreground">
              Open the menu, then use arrow keys / tab to move focus and confirm the
              focused item shows a subtle ring. In DevTools, verify the active item
              gets <code className="rounded bg-muted px-1 py-0.5">data-highlighted</code>{" "}
              and the disabled item has{" "}
              <code className="rounded bg-muted px-1 py-0.5">data-disabled</code>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Radio Group (item-level ARIA)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Normal</div>
              <RadioGroup
                value={demoRadioValue}
                onValueChange={setDemoRadioValue}
                className="flex gap-4"
              >
                <RadioGroupItem value="one" />
                <RadioGroupItem value="two" />
                <RadioGroupItem value="three" size="large" />
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Invalid (aria-invalid on items)</div>
              <RadioGroup
                value={demoRadioValue}
                onValueChange={setDemoRadioValue}
                className="flex gap-4"
              >
                <RadioGroupItem value="one" aria-invalid />
                <RadioGroupItem value="two" aria-invalid />
                <RadioGroupItem value="three" aria-invalid size="large" />
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Disabled + Invalid (group disabled)</div>
              <RadioGroup defaultValue="one" className="flex gap-4" disabled>
                <RadioGroupItem value="one" aria-invalid />
                <RadioGroupItem value="two" aria-invalid />
                <RadioGroupItem value="three" aria-invalid size="large" />
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Disabled + Invalid (item disabled)</div>
              <RadioGroup defaultValue="one" className="flex gap-4">
                <RadioGroupItem value="one" aria-invalid disabled />
                <RadioGroupItem value="two" aria-invalid disabled />
                <RadioGroupItem value="three" aria-invalid disabled size="large" />
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Card */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-xl font-semibold">Card</h2>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            This surface should match Figma card background + border tokens.
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Sheet */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sheet</h2>
        <div className="flex flex-wrap gap-3">
          {(
            [
              ["right", "Right"],
              ["left", "Left"],
              ["top", "Top"],
              ["bottom", "Bottom"],
            ] as const
          ).map(([side, label]) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline">{label} sheet</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>{label} Sheet</SheetTitle>
                  <SheetDescription>
                    This verifies <code className="rounded bg-muted px-1 py-0.5">side=&quot;{side}&quot;</code> and tokenized overlay/surface.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 text-sm text-muted-foreground">
                  Content area (layout handled outside components).
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </section>

      <Separator />

      {/* Dialog */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
            </DialogHeader>
            Modal surface + overlay should match tokens.
          </DialogContent>
        </Dialog>
        <p className="text-xs text-muted-foreground">
          Verify overlay uses <code className="rounded bg-muted px-1 py-0.5">bg-backdrop</code>, focus is trapped, and
          the close button shows a focus ring.
        </p>
      </section>

      <Separator />

      {/* Alert Dialog */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Alert Dialog</h2>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Open AlertDialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This verifies overlay/content tokens and `data-slot` signals.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <p className="text-xs text-muted-foreground">
          In DevTools, verify overlay/content emit{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot</code> values{" "}
          <code className="rounded bg-muted px-1 py-0.5">alert-dialog-overlay</code>{" "}
          and{" "}
          <code className="rounded bg-muted px-1 py-0.5">alert-dialog-content</code>.
        </p>
      </section>

      <Separator />

      {/* Hover Card */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Hover Card</h2>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </HoverCardTrigger>
          <HoverCardContent align="start">
            <div className="text-sm">HoverCard content (align=start)</div>
          </HoverCardContent>
        </HoverCard>
        <p className="text-xs text-muted-foreground">
          In DevTools, verify hover card content emits{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot="hover-card-content"</code>{" "}
          and{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-align="start"</code>.
        </p>
      </section>

      <Separator />

      {/* Context Menu */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Context Menu</h2>
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className="w-fit rounded-md border bg-background px-4 py-2 text-sm">
              Right click me
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Item One</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>Submenu</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Sub item A</ContextMenuItem>
                <ContextMenuItem>Sub item B</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuItem disabled>Disabled item</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <p className="text-xs text-muted-foreground">
          In DevTools, verify content emits{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot="context-menu-content"</code>{" "}
          and items emit{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot="context-menu-item"</code>.
          Also verify Radix{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-side</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-state</code>, and{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-disabled</code>.
        </p>
      </section>

      <Separator />

      {/* Accordion */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-xl font-semibold">Accordion</h2>
        <Accordion type="single" collapsible className="w-full rounded-md border">
          <AccordionItem value="one">
            <AccordionTrigger>Item one</AccordionTrigger>
            <AccordionContent>Accordion content one</AccordionContent>
          </AccordionItem>
          <AccordionItem value="two">
            <AccordionTrigger>Item two</AccordionTrigger>
            <AccordionContent>Accordion content two</AccordionContent>
          </AccordionItem>
        </Accordion>
        <p className="text-xs text-muted-foreground">
          In DevTools, verify{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot</code> on item/trigger/content and Radix{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-state</code> toggling.
        </p>
      </section>

      <Separator />

      {/* Scroll Area */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-xl font-semibold">Scroll Area</h2>
        <ScrollArea className="h-36 rounded-md border">
          <div className="p-4 space-y-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="text-sm text-muted-foreground">
                Scroll row {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
        <p className="text-xs text-muted-foreground">
          In DevTools, verify the root emits{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot="scroll-area"</code>{" "}
          and the viewport/scrollbar/thumb emit their respective{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot</code> values.
        </p>
      </section>

      <Separator />

      {/* Collapsible */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-xl font-semibold">Collapsible</h2>
        <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
          <div className="flex items-center justify-between rounded-md border px-4 py-3">
            <div className="text-sm font-medium">Details</div>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="mini">
                {collapsibleOpen ? "Hide" : "Show"}
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="rounded-b-md border border-t-0 px-4 py-3 text-sm text-muted-foreground">
            Collapsible content. Check{" "}
            <code className="rounded bg-muted px-1 py-0.5">data-state</code> and{" "}
            <code className="rounded bg-muted px-1 py-0.5">data-slot</code> in
            DevTools.
          </CollapsibleContent>
        </Collapsible>
      </section>

      <Separator />

      {/* Resizable */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Resizable</h2>
        <ResizablePanelGroup
          orientation="horizontal"
          className="h-36 w-full max-w-2xl rounded-md border"
        >
          <ResizablePanel defaultSize={50} minSize={25}>
            <div className="h-full p-4 text-sm text-muted-foreground">
              Left panel
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={25}>
            <div className="h-full p-4 text-sm text-muted-foreground">
              Right panel
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
        <p className="text-xs text-muted-foreground">
          In DevTools, verify{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot="resizable-panel-group"</code>{" "}
          and{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-orientation="horizontal"</code>{" "}
          and{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot="resizable-handle"</code>{" "}
          (plus{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-with-handle="true"</code>
          ). Drag the handle to verify behavior.
        </p>
      </section>

      <Separator />

      {/* Toast */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Toast</h2>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toast({
                title: "Toast",
                description: "Default variant toast (tokenized surface).",
              })
            }
          >
            Show toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast({
                variant: "destructive",
                title: "Toast (destructive)",
                description: "Destructive variant toast (tokenized surface).",
              })
            }
          >
            Show destructive toast
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          This verifies toast <code className="rounded bg-muted px-1 py-0.5">variant</code> mapping and focus/close styles.
        </p>
      </section>

      <Separator />

      {/* Dropdown */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dropdown</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item One</DropdownMenuItem>
            <DropdownMenuItem>Item Two</DropdownMenuItem>
            <DropdownMenuItem disabled>Disabled item</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Sub item A</DropdownMenuItem>
                <DropdownMenuItem>Sub item B</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger disabled>Disabled submenu</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Should not open</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
        <p className="text-xs text-muted-foreground">
          Open the menu and use arrow keys to verify the focused item shows a subtle ring (focus-visible), and the disabled
          item cannot be selected. Hover/focus “Submenu” and verify it gets{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-state="open"</code>. In DevTools, verify the main menu content
          has{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-side</code> and{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-state</code>, and the submenu content
          has{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-side</code> and{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-state</code> for placement/animation. The disabled submenu
          trigger should have{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-disabled</code> and never open.
        </p>
      </section>

      <Separator />

      {/* Checkbox */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Checkbox</h2>
        <div className="flex items-center gap-3">
          <Checkbox />
          <Checkbox size="large" />
          <Checkbox roundness="round" />
          <Checkbox disabled />
        </div>
      </section>

      <Separator />

      {/* Radio Group */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Radio Group</h2>
        <div className="flex items-center gap-3">
        <RadioGroup defaultValue="one" className="flex gap-4">
          <RadioGroupItem value="one" />
          <RadioGroupItem value="two" />
          <RadioGroupItem value="three" size="large" />
        </RadioGroup>
        </div>
      </section>

      <Separator />

      {/* Switch */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Switch</h2>
        <div className="flex items-center gap-4">
          <Switch />
          <Switch defaultChecked />
          <Switch size="large" />
          <Switch size="large" defaultChecked />
          <Switch disabled />
        </div>
      </section>

      <Separator />

      {/* Tooltip */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tooltip</h2>
        <TooltipProvider>
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent side="top">Tooltip text</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
        <p className="text-xs text-muted-foreground">
          In DevTools, verify the tooltip content emits{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot="tooltip-content"</code>{" "}
          and Radix placement/state attributes like{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-side</code> and{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-state</code>.
        </p>
      </section>

      <Separator />

      {/* Popover */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Popover</h2>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent align="start">
            <div className="text-sm">Popover content (align=start)</div>
          </PopoverContent>
        </Popover>
        <p className="text-xs text-muted-foreground">
          In DevTools, verify popover content emits{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot="popover-content"</code>{" "}
          and{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-align="start"</code>.
          Also verify Radix placement/state attributes like{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-side</code> and{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-state</code>.
        </p>
      </section>

      <Separator />

      {/* Tabs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tabs</h2>
        <Tabs defaultValue="one" className="w-[300px]">
          <TabsList>
            <TabsTrigger value="one">One</TabsTrigger>
            <TabsTrigger value="two">Two</TabsTrigger>
            <TabsTrigger value="three" disabled>
              Disabled
            </TabsTrigger>
          </TabsList>
          <TabsContent value="one">Tab one content</TabsContent>
          <TabsContent value="two">Tab two content</TabsContent>
        </Tabs>
        <p className="text-xs text-muted-foreground">
          Verify active tab styling is driven by <code className="rounded bg-muted px-1 py-0.5">data-state=&quot;active&quot;</code>, focus shows a ring, and the disabled trigger is not interactive.
        </p>
      </section>

      <Separator />

      {/* Alert */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-xl font-semibold">Alert</h2>
        <div className="space-y-3">
          <Alert>
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>
              This uses muted foreground and surface tokens.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>
              This verifies the destructive variant styling.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <Separator />

      {/* Table */}
      <section className="space-y-4 max-w-2xl">
        <h2 className="text-xl font-semibold">Table</h2>
        <Table>
          <TableCaption>A list of recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>PayPal</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
            <TableRow data-state="selected">
              <TableCell className="font-medium">INV003</TableCell>
              <TableCell>Unpaid</TableCell>
              <TableCell>Bank Transfer</TableCell>
              <TableCell className="text-right">$350.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-xs text-muted-foreground">
          In DevTools, verify each table part emits{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot</code> values
          (table, table-header, table-body, table-row, table-head, table-cell).
          The third row has{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-state=&quot;selected&quot;</code>{" "}
          for selected row styling.
        </p>
      </section>

      <Separator />

      {/* Carousel */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Carousel</h2>
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-2">
            <div className="text-sm font-medium">Horizontal</div>
            <div className="px-12">
              <Carousel orientation="horizontal" className="w-full max-w-xs">
                <CarouselContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <CarouselItem key={num}>
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{num}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Vertical</div>
            <div className="py-12">
              <Carousel orientation="vertical" className="w-full max-w-xs">
                <CarouselContent className="-mt-1 h-[200px]">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <CarouselItem key={num} className="pt-1 md:basis-1/2">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6">
                          <span className="text-3xl font-semibold">{num}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          In DevTools, verify the carousel root emits{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-slot=&quot;carousel&quot;</code>{" "}
          and{" "}
          <code className="rounded bg-muted px-1 py-0.5">data-orientation</code>.
          Also verify the previous/next buttons disable when at the edges.
        </p>
      </section>

      <Separator />

      {/* Form Field */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-xl font-semibold">Form Field</h2>
        <FormField
          label="Email"
          description="We’ll never share your email."
        >
          <Input placeholder="you@example.com" />
        </FormField>

        <FormField
          label="Email"
          required
          error="Invalid email address"
        >
          <Input />
        </FormField>

        <Select>
          <FormField label="Country">
            <SelectTrigger>
              <SelectValue placeholder="Choose a country" />
            </SelectTrigger>
          </FormField>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="mx">Mexico</SelectItem>
          </SelectContent>
        </Select>

        <FormField label="Disabled" disabled>
          <Input />
        </FormField>
      </section>

      <Separator />

      {/* Command */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Command</h2>
        <p className="text-sm text-muted-foreground">
          Command palette for search and quick actions. Built on cmdk.
        </p>
        <Command className="rounded-lg border shadow-md max-w-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>

      <Separator />

      {/* Sonner Toast */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sonner (Toast)</h2>
        <p className="text-sm text-muted-foreground">
          Opinionated toast component by Emil Kowalski.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() => sonnerToast("Event has been created.")}
          >
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() => sonnerToast.success("Successfully saved!")}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => sonnerToast.error("Something went wrong.")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() => sonnerToast.warning("Please review your input.")}
          >
            Warning
          </Button>
          <Button
            variant="outline"
            onClick={() => sonnerToast.info("New update available.")}
          >
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              sonnerToast("Loading...", {
                icon: <Spinner size="small" />,
                duration: Infinity,
                id: "loading-toast",
              })
              // Simulate async operation
              setTimeout(() => {
                sonnerToast.success("Data loaded successfully!", {
                  id: "loading-toast",
                })
              }, 2000)
            }}
          >
            Promise
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              sonnerToast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo clicked"),
                },
              })
            }}
          >
            With Action
          </Button>
        </div>
        <SonnerToaster />
      </section>

      <Separator />

      {/* Dialog with Sticky Footer */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dialog with Sticky Footer</h2>
        <p className="text-sm text-muted-foreground">
          Footer stays visible while scrollable content overflows.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Scrollable Dialog</Button>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] flex flex-col">
            <DialogHeader>
              <DialogTitle>Terms of Service</DialogTitle>
              <DialogDescription>
                Please read through the terms below.
              </DialogDescription>
            </DialogHeader>
            <DialogBody className="pr-4">
              {Array.from({ length: 15 }).map((_, i) => (
                <p key={i} className="mb-4 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              ))}
            </DialogBody>
            <DialogFooter sticky>
              <Button variant="outline">Cancel</Button>
              <Button>Accept</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      <Separator />

      {/* Rich Checkbox Group */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Rich Checkbox Group</h2>
        <p className="text-sm text-muted-foreground">
          Card-style checkboxes with titles and descriptions.
        </p>
        <RichCheckboxGroup className="max-w-md">
          <RichCheckboxItem
            title="Push Notifications"
            description="Receive push notifications on your device"
            defaultChecked
          />
          <RichCheckboxItem
            title="Email Updates"
            description="Get weekly digest emails"
          />
          <RichCheckboxItem
            title="Marketing Communications"
            description="Receive news about products and features"
            disabled
          />
        </RichCheckboxGroup>
      </section>

      <Separator />

      {/* Rich Switch Group */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Rich Switch Group</h2>
        <p className="text-sm text-muted-foreground">
          Card-style switches with titles and descriptions.
        </p>
        <RichSwitchGroup className="max-w-md">
          <RichSwitchItem
            title="Airplane Mode"
            description="Disable all wireless connections"
          />
          <RichSwitchItem
            title="Wi-Fi"
            description="Connect to wireless networks"
            defaultChecked
          />
          <RichSwitchItem
            title="Bluetooth"
            description="Connect to Bluetooth devices"
            defaultChecked
          />
        </RichSwitchGroup>
      </section>

      <Separator />

      {/* Rich Radio Group */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Rich Radio Group</h2>
        <p className="text-sm text-muted-foreground">
          Card-style radio buttons with titles and descriptions.
        </p>
        <RichRadioGroup defaultValue="standard" className="max-w-md">
          <RichRadioItem
            value="free"
            title="Free"
            description="Basic features for personal use"
          />
          <RichRadioItem
            value="standard"
            title="Standard"
            description="Advanced features for small teams"
          />
          <RichRadioItem
            value="enterprise"
            title="Enterprise"
            description="Custom solutions for large organizations"
          />
        </RichRadioGroup>
      </section>

      <Separator />

      {/* Form Field */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Form Field</h2>
        <p className="text-sm text-muted-foreground">
          Consistent form field layouts with label, input, description, and error.
        </p>
        <div className="grid gap-8 max-w-lg">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Vertical (default)</h3>
            <FormField
              label="Email"
              htmlFor="demo-email"
              description="We'll never share your email"
              required
            >
              <Input id="demo-email" type="email" placeholder="Enter your email" />
            </FormField>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Horizontal</h3>
            <FormField
              orientation="horizontal"
              label="Username"
              htmlFor="demo-username"
            >
              <Input id="demo-username" placeholder="Enter username" />
            </FormField>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">With Error</h3>
            <FormField
              label="Password"
              htmlFor="demo-password"
              error="Password must be at least 8 characters"
              required
            >
              <Input id="demo-password" type="password" placeholder="Enter password" aria-invalid="true" />
            </FormField>
          </div>
        </div>
      </section>

      <Separator />

      {/* Avatar Stack */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Avatar Stack</h2>
        <p className="text-sm text-muted-foreground">
          Overlapping avatars with an optional +N indicator.
        </p>
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Default Stack</h3>
            <AvatarStack>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>RX</AvatarFallback>
              </Avatar>
            </AvatarStack>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">With Max (max=3, 5 total)</h3>
            <AvatarStack max={3}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>RX</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
            </AvatarStack>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Small Size</h3>
            <AvatarStack size="sm">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">A</AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">B</AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">C</AvatarFallback>
              </Avatar>
            </AvatarStack>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Large Size</h3>
            <AvatarStack size="lg">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback>RX</AvatarFallback>
              </Avatar>
            </AvatarStack>
          </div>
        </div>
      </section>

      <Toaster />
    </div>
  )
}
