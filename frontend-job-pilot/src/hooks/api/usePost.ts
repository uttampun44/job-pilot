import axiosInstance from "@/lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { error } from "console";


// custom request config for the post request
// data is the request body
interface RequestConfig {
    data?: any;
    status?: number;
    params?: Record<string, any>;
    headers?: Record<string, string>;
}

// response type for the post request
interface ApiResponse<Type> {
    status: number;
    data: Type;
    error?: string | null;
    token?: string;
}

export default function usePost<Type = {}>(url: string, customHeaders: Record<string, string> = {}, method?: string, id?: string) {
    
    const mutation = useMutation<ApiResponse<Type>, unknown, RequestConfig>({
        // data is the request body
        // headers is the custom headers
        mutationFn: async({data, headers}) => {
            // custom headers will be added to the request
            const response = await axiosInstance.post(url, data, {
                method: method,
                params: id ? {id} : undefined,
                headers: {
                    'Accept': 'application/json',
                    ...customHeaders,
                    ...headers,
                }
                
            });
            return {
                status: response.status,
                data: response.data,
                token: response.data.token,
                error: null,
            };
        },   
    })

  return mutation;
}