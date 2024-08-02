import { configureStore, createSlice } from '@reduxjs/toolkit';

const leadsSlice = createSlice({
  name: 'leads',
  initialState: [],
  reducers: {
    addLead: (state, action) => {
      state.push({ ...action.payload, id: state.length + 1 });
    },
    updateLead: (state, action) => {
      const index = state.findIndex(lead => lead.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteLead: (state, action) => {
      return state.filter(lead => lead.id !== action.payload);
    }
  }
});

export const { addLead, updateLead, deleteLead } = leadsSlice.actions;

const store = configureStore({
  reducer: {
    leads: leadsSlice.reducer
  }
});

export default store;
