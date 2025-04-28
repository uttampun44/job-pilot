import axiosInstance from "@/lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";

interface RequestConfig {
    data?: any;
    headers?: Record<string, string>;
}

export default function usePost<T = any>(url: string, customHeaders:Record<string, string> = {}, method?:string, id?:string) {
    
    const mutation = useMutation<T, unknown, RequestConfig>({
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
                    ...headers
                }
                
            });
            return response.data;
        },   
    })

  return mutation;
}