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
import { useFormContext } from "react-hook-form"
import { tProfileType } from "../types/profile"
import useFetch from "@/hooks/api/useFetch"
import { Skeleton } from "@/components/ui/skeleton"

export default function CandidateInformation() {
  const [date, setDate] = useState<Date>()

  const {data: data} = useFetch("/api/v1/candidate-profile")
    
  if(data === null) return <Skeleton />
  
  const gender = data?.gender
  const education = data?.education
  const employment = data?.employment

  
  const {register}  = useFormContext<tProfileType>();

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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label className="text-sm font-medium">
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
          <Select {...register("nationality")}>
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
            {
              gender?.map((gender: any) => (
                <SelectItem value={gender.value} key={gender.value}>{gender.label}</SelectItem>
              ))
            }
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
          <Select {...register("education")}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select education" />
            </SelectTrigger>
            <SelectContent>
              {
                education?.map((education: any) => (
                  <SelectItem value={education.value} key={education.value}>{education.label}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-slate-700">
            Phone Number
          </Label>
          <Input type="tel" id="phone_number" 
           placeholder="+1 (555) 000-0000" className="mt-1" 
           {...register("phone_number")}
           />
        </div>


        <div className="md:col-span-2">
          <Label  className="text-sm font-medium text-slate-700">
            Address
          </Label>
          <Input type="text" id="address" 
          placeholder="123 Main St, City, Country" className="mt-1"
          {...register("address")}
          />
        </div>
      </div>
    </div>
  )
}
