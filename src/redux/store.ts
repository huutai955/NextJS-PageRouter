import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter";
import contacts from "./reducers/contacts";

export const store = configureStore({
  reducer: {
    counter: counter,
    contacts: contacts
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
