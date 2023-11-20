import DashboardRootLayoutClient from "@/services/Dashboard/Views/Layouts/DashboardRootLayoutClient";
import React from "react";

export default function DashboardRootLayout({children}: {children: React.ReactNode}) {
	return (
		<DashboardRootLayoutClient>
			{children}
		</DashboardRootLayoutClient>
	)
}
