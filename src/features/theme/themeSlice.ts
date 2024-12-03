import { createSlice, PayloadAction, payloadAction } from "@reduxjs/toolkit";
import { applyTheme } from "../../utils/applyTheme";

export type Theme = "light" | "dark";

type ThemeState = {
	theme: Theme;
};

const initializeTheme = (): Theme => {
	const theme = (localStorage.getItem("theme") as Theme) || null;
	applyTheme(theme);
	return theme;
};

const initialState: ThemeState = {
	theme: initializeTheme()
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload;
			applyTheme(action.payload);
			localStorage.setItem("theme", action.payload);
		}
	}
});
export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
