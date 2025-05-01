import { useAuth } from "@/context/features/AuthContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import usePost from "@/hooks/api/usePost";
import { useForm } from "react-hook-form";


export default function TopNav() {
    const { user, setToken, setUser } = useAuth();
    const navigate = useNavigate();
    
    const {handleSubmit} = useForm();

    const post = usePost("api/v1/logout")

    const onsubmit = async () => {
        console.log("logout")
        try {
            const response = await post.mutateAsync({});
            if (response.status === 200) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                setToken("");
                setUser("");
                navigate("/login");
            }
        } catch (error) {

        }
    };



    return (
        <header className="w-full border-b bg-white px-6 py-4 flex justify-between items-center shadow-sm">
            <h1 className="text-xl font-semibold">Dashboard</h1>

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
                                <AvatarImage src="/avatar.png" alt={user} />
                                <AvatarFallback>{user?.charAt(0)?.toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-gray-800">{user}</span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={() => navigate("/profile")}>
                            Update Profile
                        </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                        <form onSubmit={handleSubmit(onsubmit)}>
                                Logout
                        </form>
                            </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
