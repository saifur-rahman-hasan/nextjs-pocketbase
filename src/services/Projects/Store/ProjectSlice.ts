import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthUserDataInterface = {
	id: string,
	name: string,
	email: string,
	emailVerified: Date,
	userVerified: boolean
}

type AuthUserAuthorizationData = {
	roles: string[],
	permissions: string[],
}

export type UserManagerSliceDataInterface = {
	isLoggedIn?: boolean;
	authUser?: AuthUserDataInterface | null,
	authorization: AuthUserAuthorizationData
};


const authUserData: AuthUserDataInterface = {
	id: '1234567',
	name: 'S R Hasan',
	email: 'srhasan@gmail.com',
	emailVerified: new Date,
	userVerified: true
}

const testData = {
	isLoggedIn: true,
	authUser: authUserData,
	authorization: {
		roles: ["BUSINESS_USER"],
		permissions: ["ACCESS_MANAGE_ADS_POST", "ACCESS_MANAGE_SUBSCRIPTION", "ACCESS_OWN_PROFILE", "ACCESS_MANAGE_ACL"]
	}
}

const initialState = {
	isLoggedIn: false,
	authUser: null,
	authorization: {
		roles: [],
		permissions: []
	}
} as UserManagerSliceDataInterface;

export const ProjectSlice = createSlice({
	name: "userManagerSlice",
	initialState,
	reducers: {
		setAuthUserData: (state, action) => {
			state.isLoggedIn = action?.payload?.isLoggedIn || true;
			state.authUser = action?.payload?.authUser || null
		},

		setAuthUserAuthorizationData: (state, action) => {
			state.authorization.roles = action?.payload?.authorization.roles || true;
			state.authorization.permissions = action?.payload?.authorization.permissions || true;
		},
	},
});

export const {
	setAuthUserData,
	setAuthUserAuthorizationData
} = ProjectSlice.actions;

export default ProjectSlice.reducer;
