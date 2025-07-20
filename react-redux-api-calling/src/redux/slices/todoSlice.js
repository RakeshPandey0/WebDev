import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log("Error:", action.payload);
      state.isError = true;
    });
  },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const getTodos = createSelector(
  (state) => state.todo,
  (state) => state
);

export default todoSlice.reducer;
