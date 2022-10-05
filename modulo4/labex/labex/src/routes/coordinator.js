export const goToHomePage = (navigator) =>{
    navigator('/');
}

export const goToListTripsPage = (navigator) =>{
    navigator('/trips/list');
}
export const goToApplicationFormPage = (navigator) =>{
    navigator('/trips/application');
}
export const goToLoginPage = (navigator) =>{
    navigator('/login');
}
export const goToAdminHomePage = (navigator) =>{
    navigator('/admin/trips/list');
}
export const goToTripDetailsPage = (navigator) =>{
    navigator('/admin/trips/create');
}
export const goToCreateTripPage = (navigator, id) =>{
    navigator(`/admin/trips/${id}`);
}
