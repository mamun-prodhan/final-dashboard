import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import DashBord from "../Component/DashBord/DashBord";
import ContractorCart from "../Component/ContractorsCart/ContractorCart";
import ContracorsCartDetails from "../Component/ContractorsCart/ContracorsCartDetails";
import Trades from "../Component/Trades/Trades";
import User from "../Component/User/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <DashBord></DashBord>,
      },
      {
        path: "/dashbord",
        element: <DashBord></DashBord>,
      },
      {
        path: "/contractors",
        element: <ContractorCart></ContractorCart>,
      },
      {
        path: "/contractorCart-details",
        element: <ContracorsCartDetails></ContracorsCartDetails>,
      },
      {
        path: "/trades",
        element: <Trades></Trades>,
      },
      {
        path: "/user",
        element: <User></User>,
      },
    ],
  },
]);
