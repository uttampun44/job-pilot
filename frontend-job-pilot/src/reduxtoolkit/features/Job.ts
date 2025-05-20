export interface Job {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    userId: number;
}

export interface JobState {
    jobs: Job[];
    isLoading: boolean;
    error: string;
}

const initialState: JobState = {
    jobs: [],
    isLoading: false,
    error: "",
};

export const jobSlice = (set: any) => ({
    jobs: [],
    isLoading: false,
    error: "",
    setJobs: (jobs: Job[]) => {
        set((state: JobState) => ({
            ...state,
            jobs: jobs,
        }));
    },
    setIsLoading: (isLoading: boolean) => {
        set((state: JobState) => ({
            ...state,
            isLoading: isLoading,
        }));
    },
    setError: (error: string) => {
        set((state: JobState) => ({
            ...state,
            error: error,
        }));
    },
});

export const { setJobs, setIsLoading, setError } = jobSlice((state: JobState) => state);

export default jobSlice.reducer;