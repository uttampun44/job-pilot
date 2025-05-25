import { createBrowserRouter } from "react-router-dom";
import CreateAccount from "@pages/frontend/createaccount/CreateAccount";
import Home from "@/pages/frontend/home/Home";
import FrontLayout from "@/layout/frontend/FrontLayout";
import ListingDetails from "@/pages/frontend/listing/ListingDetails";
import Login from "@/pages/frontend/login/Login";
import ForgetPassword from "@/pages/frontend/forgetpassword/forgetpassword";
import ResetPassword from "@/pages/frontend/resetpassword/ResetPassword";
import EmailVerification from "@/pages/frontend/emailverification/EmailVerification";
import Dashboard from "@/pages/backend/dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import Candidate from "@/pages/frontend/candidate/Candidate";
import Employer from "@/pages/frontend/employer/Employer";
import Profile from "@/pages/backend/settings/profile/Profile";
import Permission from "@/pages/backend/settings/permissions/Permission";
import EmployerProfile from "@/pages/backend/settings/employer/EmployerProfile";
import RolePermission from "@/pages/backend/settings/permissions/RolePermission";
import CandidateEdit from "@/pages/backend/settings/profile/components/Edit";
import ProfileView from "@/pages/backend/settings/employer/ProfileView";
import Jobs from "@/pages/backend/jobs/Jobs";
import JobList from "@/pages/frontend/joblist/JobList";
import JobDetail from "@/pages/frontend/jobdetail/JobDetail";
import View from "@/pages/backend/candidate/view/View";
import Applied from "@/pages/backend/candidate/appliedjobs/Applied";
import ErrorPage from "@/pages/frontend/error/Error";
import Favourite from "@/pages/backend/candidate/favourite/Favourite";
import ViewCalendar from "@/pages/backend/calendar/ViewCalendar";

export const router = createBrowserRouter([
  // Frontend Routes
  {
    Component: FrontLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/candidate",
        Component: Candidate,
      },
      {
        path: "/employer",
        Component: Employer,
      },
      {
        path: "/listing-details",
        Component: ListingDetails,
      },
      {
        path: "/job-list",
        Component: JobList,
      },
      {
        path: "/job-detail/:id",
        Component: JobDetail,
      }
    ],
  },
  {
    path: "/register",
    Component: CreateAccount,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/reset-password",
    Component: ResetPassword,
  },
  {
    path: "/email-verification",
    Component: EmailVerification,
  },
  {
    path: "/forget-password",
    Component: ForgetPassword,
  },

  {
    path: "*",
    Component: ErrorPage
  },

  // Backend Routes
  {
    Component: ProtectedRoutes,
    children: [
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "/calendar",
        Component: ViewCalendar,
      },
      {
        path: "/candidates",
        Component: View,
      },
      {
        path: "/jobs",
        Component: Jobs,
      },
      {
        path: "/candidates/applied-jobs",
        Component: Applied
      },
      {
        path: "favourite-jobs",
        Component: Favourite
      },
      {
        path: "/settings/candidate-profile",
        Component: Profile,
      },
      {
        path: "/settings/candidate-profile/edit/:id",
        Component: CandidateEdit,
      },
      {
        path: "/settings/company-information",
        Component: ProfileView,
      },
      {
        path: "/settings/company-information/edit",
        Component: EmployerProfile,
      },
      {
        path: "/settings/permissions",
        Component: Permission,
      },
      {
        path: "/settings/role/:id",
        Component: RolePermission,
      },
    ],
  },
]);
