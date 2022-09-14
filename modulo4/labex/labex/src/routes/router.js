import { BrowserRouter, Routes, Route } from "react-router-dom";
import{
    AdminHomePage,
    ApplicationFormPage,
    CreateTripPage,
    HomePage,
    ListTripsPage,
    LoginPage,
    TripDetailsPage

} from '../pages';

export const Router = () =>{
    return(
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/trips/list" element={<ListTripsPage/>}/>
                <Route path="/trips/application" element={<ApplicationFormPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/admin/trips/list" element={<AdminHomePage/>}/>
                <Route path="/admin/trips/create" element={<TripDetailsPage/>}/>
                <Route path="/admin/trips/:id" element={<CreateTripPage/>}/>
             </Routes>
        </BrowserRouter>
    )
}