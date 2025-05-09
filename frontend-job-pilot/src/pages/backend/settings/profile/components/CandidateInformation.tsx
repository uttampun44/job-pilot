import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Upload } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function CandidateInformation() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="p-8 md:p-10">
      <div className="flex flex-col md:flex-row gap-10 mb-10">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="w-32 h-32 border-4 border-slate-100">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile picture" />
            <AvatarFallback className="text-3xl">CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Photo
            </Button>
            <p className="text-xs text-slate-500 mt-2">JPG, PNG or GIF (max. 2MB)</p>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label  className="text-sm font-medium text-slate-700">
                First Name
              </Label>
              <Input type="text" id="first_name" name="first_name" placeholder="John" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm font-medium text-slate-700">
                Last Name
              </Label>
              <Input type="text" id="last_name" name="last_name" placeholder="Doe" className="mt-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label className="text-sm font-medium text-slate-700">
            Date of Birth
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span className="text-slate-500">Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label className="text-sm font-medium text-slate-700">
            Nationality
          </Label>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select nationality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="in">India</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label  className="text-sm font-medium text-slate-700">
            Gender
          </Label>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="non-binary">Non-binary</SelectItem>
              <SelectItem value="prefer-not">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-slate-700">
            Marital Status
          </Label>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="married">Married</SelectItem>
              <SelectItem value="divorced">Divorced</SelectItem>
              <SelectItem value="widowed">Widowed</SelectItem>
              <SelectItem value="prefer-not">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-slate-700">
            Religion (Optional)
          </Label>
          <Input type="text" id="religion" name="religion" placeholder="Optional" className="mt-1" />
        </div>

        <div>
          <Label className="text-sm font-medium text-slate-700">
            Highest Education
          </Label>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select education" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high-school">High School</SelectItem>
              <SelectItem value="associate">Associate Degree</SelectItem>
              <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
              <SelectItem value="master">Master's Degree</SelectItem>
              <SelectItem value="doctorate">Doctorate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-slate-700">
            Phone Number
          </Label>
          <Input type="tel" id="phone_number" name="phone_number" placeholder="+1 (555) 000-0000" className="mt-1" />
        </div>

        <div>
          <Label  className="text-sm font-medium text-slate-700">
            Email Address
          </Label>
          <Input type="email" id="email" name="email" placeholder="your.email@example.com" className="mt-1" />
        </div>

        <div className="md:col-span-2">
          <Label  className="text-sm font-medium text-slate-700">
            Address
          </Label>
          <Input type="text" id="address" name="address" placeholder="123 Main St, City, Country" className="mt-1" />
        </div>
      </div>
    </div>
  )
}
