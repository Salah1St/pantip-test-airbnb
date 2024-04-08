import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slice/loadingSlice";
import languageReducer from "./slice/languageSlice";
import mediaReducer from "./slice/mediaSlice";
import topicReducer from "./slice/topicSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    language: languageReducer,
    media: mediaReducer,
    topic: topicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
