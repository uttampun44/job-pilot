
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tDashboardData } from './types/types'

export const dashboarApi = createApi({
   reducerPath: 'dashbaordApi',
   baseQuery: fetchBaseQuery({ baseUrl: '/ap/v1/' }),
   endpoints: (builder) => ({
       getDashboard: builder.query<tDashboardData, void>({
        query: () => '/dashboard-data',
     })
   }),
})

export const { useGetDashboardQuery } = dashboarApi

