import React from "react";

export function BrandLogo({ className }: { className?: string }) {
	return (
		<img
			className={className || "mx-auto h-10 w-auto"}
			src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
			alt="Your Company"
		/>
	);
}
