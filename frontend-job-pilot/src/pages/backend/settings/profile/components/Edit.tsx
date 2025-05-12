import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Save, X } from "lucide-react"
import { Link } from "react-router-dom"
import CandidateInformation from "./CandidateInformation"
import CandidateWorkExperience from "./CandidateWorkExperience"
import { FormProvider, useForm } from "react-hook-form"
import { tProfileType } from "../types/profile"
import usePost from "@/hooks/api/usePost"
import { toast } from "sonner"

export default function CandidateEdit() {

  const methods = useForm<tProfileType>()
  const post = usePost("/api/v1/profie");

  const onSubmit = async (data: tProfileType) => {
    try {
      const response = await post.mutateAsync({ data: data });
      if (response.status === 200) {
        toast.success("Profile updated successfully");
      } else {
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header with progress indicator */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Candidate Profile</h1>
          <p className="text-slate-500 max-w-2xl mx-auto mb-8">
            Complete your profile information to help employers find you for relevant positions.
          </p>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
            <Tabs defaultValue="personal"  className="w-full">
              <div className="w-full max-w-md mx-auto mb-8">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger
                    value="personal"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Personal Information
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Work Experience
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden transition-all duration-300">
                <TabsContent value="personal" className="m-0 focus-visible:outline-none focus-visible:ring-0">
                  <CandidateInformation />
                </TabsContent>

                <TabsContent value="experience" className="m-0 focus-visible:outline-none focus-visible:ring-0">
                  <CandidateWorkExperience />
                </TabsContent>

                <div className="bg-slate-50 p-6 border-t border-slate-100">

                  <div className="flex gap-3 w-full sm:w-auto">
                    <Link
                      to="/settings/candidate-profile/"
                      className="flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 w-full sm:w-auto"
                    >
                      <X className="h-4 w-4" />
                      Cancel
                    </Link>
                    <Button type="submit" className="flex items-center gap-2 w-full sm:w-auto">
                      <Save className="h-4 w-4" />
                      Save Profile
                    </Button>
                  </div>
                </div>
              </div>
            </Tabs>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
