import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "@/Redux/features/counter/counterSlice";
import {ProjectApiSlice} from "@/services/Projects/Store/ProjectApiSlice";
// import { AuthorizeManagerApiSlice } from "@/services/Authorization/Store/RolePermissionApiSlice";
// import { UserManagerApiSlice } from "@/services/UserManager/Store/UserManagerApiSlice";
// import { UserManagerSlice } from "@/services/UserManager/Store/UserManagerSlice";

export const reduxStore = configureStore({
  reducer: {
    counterReducer,
    [ProjectApiSlice.reducerPath]: ProjectApiSlice.reducer,
    // [UserManagerSlice.name]: UserManagerSlice.reducer,
    // [AuthorizeManagerApiSlice.reducerPath]: AuthorizeManagerApiSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
        .concat([ProjectApiSlice.middleware]),
});

setupListeners(reduxStore.dispatch);

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
