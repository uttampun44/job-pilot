import axiosInstance from "@/lib/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export default function useFetch<T = any>(url: string, customHeaders:Record<string, string> = {}) {

    const fetchData = async ():Promise<T> => {
        const response = await axiosInstance.get(url, {
            headers: customHeaders
        });
        return response.data;
    };

   
    const { isPending, isSuccess, isError, data } = useQuery<T>({
        queryKey: ["fetchData", url, customHeaders],
        queryFn: fetchData,
    
    })
    
    return { data, isError, isPending, isSuccess };
}