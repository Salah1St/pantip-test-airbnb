import { createSlice } from "@reduxjs/toolkit";

const mediaSlice = createSlice({
  name: "media",
  initialState: { isDesktop: false, isTablet: false, isMobile: false, viewport: 0, dashboardSize: 0 },
  reducers: {
    setDesktop: (state, action) => {
      state.isDesktop = true;
      state.isTablet = false;
      state.isMobile = false;
    },
    setTablet: (state, action) => {
      state.isDesktop = false;
      state.isTablet = true;
      state.isMobile = false;
    },
    setMobile: (state, action) => {
      state.isDesktop = false;
      state.isTablet = false;
      state.isMobile = true;
    },
    setDashboardSize: (state, action) => {
      state.dashboardSize = action.payload;
    },
    setViewport: (state, action) => {
      state.viewport = action.payload;
    },
  },
});

export default mediaSlice.reducer;
const { setDesktop, setTablet, setMobile, setDashboardSize, setViewport } = mediaSlice.actions;
export { setDesktop, setTablet, setMobile, setDashboardSize, setViewport };
