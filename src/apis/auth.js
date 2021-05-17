import { get, post } from "utils/FetchAPI";

export const register = (data) = post("/auth/register", data);
export const login = (data) = post("/auth/login", data);
