"use client";

import { reduxStore } from "@/Redux/ReduxStore";
import { Provider } from "react-redux";

export function ReduxStoreProvider({ children }: { children: React.ReactNode }) {
	return <Provider store={reduxStore}>{children}</Provider>;
}
