import { createSlice } from "@reduxjs/toolkit";
import { tCourseDetailsType } from "../types/courseDetailsType";

interface ViewCourseDetailsState {
    courseDetails: tCourseDetailsType;
}
const course  = localStorage.getItem("courseDetails")
const viewCourseDetailsStore = createSlice({
    name: "courseDetails",
    initialState: {
        courseDetails: course ? JSON.parse(course) : {
            id: 0,
            title: "",
            short_description: "",
            course_details: "",
            career_outcomes: "",
            price: 0,
            duration: "",
            course_type: "",
            carrer_outcomes: "",
        }
    } as ViewCourseDetailsState,
    reducers: {
        setCourseDetails : (state, action) => {
            state.courseDetails = action.payload;
            localStorage.setItem("courseDetails", JSON.stringify(state.courseDetails))
        },
    }
})

export const {setCourseDetails} = viewCourseDetailsStore.actions
export default viewCourseDetailsStore