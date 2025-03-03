export const useAuth = ()=>{
    const token = localStorage.getItem("token");
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");

    return [!!token, userData];
}