import { useAuth } from "@/context/features/AuthContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router-dom";
import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import usePost from "@/hooks/api/usePost";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTheme } from "@/context/features/ThemeContext";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";

export default function TopNav() {
    
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const { token, user, setToken, setUser, setIsTogglePin } = useAuth();
    const { setTheme } = useTheme();
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
                localStorage.removeItem("role");
                setToken("");
                setUser(null);
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

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="w-full border-b bg-gray-50 dark:bg-gray-900 py-4 flex justify-between items-center shadow-sm">

            <div className="row pl-4">
               <Icon iconName="dashboard" 
               className="h-8 w-8" 
                 onClick={() => setIsTogglePin(prev => !prev)}
               />
            </div>
            <div className="flex items-center gap-6">
                 <Link to="/" className="text-base font-medium">Visit Home Page</Link>
                <Label>{new Date().toLocaleDateString()} {time}</Label>
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
                        <div className="theme">
                            <Icon iconName="sun" className="h-6 w-6" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={() => {
                            setTheme("light")
                            document.documentElement.classList.remove("dark")
                        }}>
                            Light Mode
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600" onClick={() => {
                            setTheme("dark")
                            document.documentElement.classList.add("dark")
                        }}>
                            Dark Mode
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-3 px-2.5 cursor-pointer">
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="/avatar.png" alt={user?.name as string} />
                                <AvatarFallback></AvatarFallback>
                            </Avatar>
                            <Label>{user?.name as string}</Label>
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
