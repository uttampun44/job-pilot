import { createSlice } from "@reduxjs/toolkit";

interface ViewCourseDetailsState {
    courseDetails: {
        id: number;
        title: string;
        short_description: string;
        course_details: string;
        career_outcomes: string;
        price: number;
        duration: string;
        course_type: string;
        carrer_outcomes: string;
    };
}

const viewCourseDetailsStore = createSlice({
    name: "courseDetails",
    initialState: {
        courseDetails: {
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
        courseDetails : (state, action) => {
            state.courseDetails = action.payload;
        },
    }
})

export const {courseDetails} = viewCourseDetailsStore.actions