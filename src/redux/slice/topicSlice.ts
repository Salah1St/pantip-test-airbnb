import { Topic } from "@/model/dto";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { store } from "../store";
import { loading } from "./loadingSlice";
import { getTopicapi } from "@/api/topic";
import { innerAxios } from "@/config/axios";
import { GetTopicByIdResponseApi } from "@/model/response";

export const fetchPosts = createAsyncThunk<Topic[], string>("posts/fetch", async (payload, { rejectWithValue, getState, dispatch }) => {
  try {
    console.log("createAsyncThunk");
    const res = await innerAxios.get<GetTopicByIdResponseApi>(`/api/topic/${payload}`);
    return res.data.topic;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});

interface Initial {
  currentTopic: Topic[] | null;
}
const initialState: Initial = { currentTopic: null };

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    createTopic: (state, action) => {
      state.currentTopic = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      console.log("pending");
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.currentTopic = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export const { createTopic } = topicSlice.actions;
const topicReducer = topicSlice.reducer;

export default topicReducer;
