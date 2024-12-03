import { Theme } from "../features/theme/themeSlice";

export function applyTheme(theme: Theme) {
	const root = window.document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(theme);
}
