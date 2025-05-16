import axiosInstance from "@/lib/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export default function useFetch<T = any>(url: string, customHeaders:Record<string, string> = {}, id?:string) {

    const fetchData = async ():Promise<T> => {
        const response = await axiosInstance.get(url, {
            params: id ? {id} : undefined,
            headers: customHeaders
        });
        return response.data;
    };
 
    const { isPending, isSuccess, isError, data, isLoading } = useQuery<T>({
        queryKey: ["fetchData", url, customHeaders, id],
        queryFn: fetchData,  
        staleTime: Infinity,
        refetchOnWindowFocus: false,  
    })
    
    return { data, isError, isPending, isSuccess, isLoading };
}