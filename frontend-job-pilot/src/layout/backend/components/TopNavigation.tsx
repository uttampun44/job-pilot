import { useAuth } from "@/context/features/AuthContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import usePost from "@/hooks/api/usePost";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function TopNav() {
    const {token, user, setToken, setUser } = useAuth();
    const navigate = useNavigate();

    const { handleSubmit } = useForm();

    const logout = usePost("/api/v1/logout")

    const onSubmit = async (): Promise<void> => {
        try {
            const response = await logout.mutateAsync({
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                setToken("");
                setUser("");
                navigate("/login");
            }
        } catch (error) {

            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Something went wrong");
            }
        }
    };

    return (
        <header className="w-full border-b bg-muted/50 py-4 flex justify-between items-center shadow-sm">
            
             <div className="row pl-4">
             <h1 className="text-xl font-semibold">Dashboard</h1>
             </div>
            <div className="flex items-center gap-6">
                <Button
                    type="button"
                    className="relative text-gray-600 hover:text-black cursor-pointer"
                    variant="secondary"
                >
                    <Icon iconName="bell" className="h-6 w-6" />
                    <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="/avatar.png" alt={user as string} />
                                <AvatarFallback>{user?.charAt(0)?.toUpperCase() as string}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-gray-800">{user as string}</span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={() => navigate("/profile")}>
                            Update Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600" onClick={handleSubmit(onSubmit)}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
