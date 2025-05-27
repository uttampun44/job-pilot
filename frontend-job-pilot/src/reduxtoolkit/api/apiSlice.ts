
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tDashboardData } from './types/types'

const baseUrl = "http://localhost:8000/api/v1/"

export const dashboarApi = createApi({
   reducerPath: 'dashbaordApi',
   baseQuery: fetchBaseQuery({ baseUrl, 
       prepareHeaders: (headers) => {
    const token = localStorage.getItem('token')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
   }),
   endpoints: (builder) => ({
       getDashboard: builder.query<tDashboardData, void>({
        query: () => '/dashboard-data',
     })
   }),
})

export const { useGetDashboardQuery } = dashboarApi

