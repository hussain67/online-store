import { createSlice, payloadAction } from "@reduxjs/toolkit";
import { toast } from "../../hooks/use-toast";

export type User = {
	userName: string;
	jwt: string;
};
type UserState = {
	user: User | null;
};

function getUserFromLocalStorage(): User | null {
	const user = localStorage.getItem("user");
	if (!user) return null;
	return JSON.parse(user);
}
// This initial state will become state of the store
const initialState: UserState = {
	user: getUserFromLocalStorage()
};

const userSlice = createSlice({
	name: "user",
	initialState,
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
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
