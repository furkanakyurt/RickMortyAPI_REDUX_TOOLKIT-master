import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import charactersSlice from "./slices/charactersSlice";
import locationsSlice from "./slices/locationsSlice";

export const store = configureStore({
    reducer: {
        charactersSlice,
        
        locationsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;