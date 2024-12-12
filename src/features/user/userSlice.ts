import { createSlice, payloadAction } from "@reduxjs/toolkit";
import { toast } from "../../hooks/use-toast";

type User = {
	name: string;
	jwt: string;
};
type UserState = {
	user: User | null;
};

function getUserFromLocalStorage(): UserState {
	const user = localStorage.getItem("user");
	return user ? JSON.parse(user) : null;
}

const userSlice = createSlice({
	name: "user",
	initialState: getUserFromLocalStorage(),
	reducers: {
		loginUser: (state, action: payloadAction<User>) => {
			const user = action.payload;
			state.user = user;
			localStorage.setItem("user", JSON.stringify(user));
			if (user.userName === "demo user") {
				toast({ description: "Welcome demo user" });
				return;
			}
			toast({ description: "Login successful" });
		},
		logoutUser: state => {
			state.user = null;
			localStorage.removeItem("user");
		}
	}
});
export default userSlice.reducer;
