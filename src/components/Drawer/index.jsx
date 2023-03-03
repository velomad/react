import React from "react";
import Drawer from "@mui/material/Drawer";

const CustomDrawer = ({
  anchor = "left",
  slideDirection = "down",
  isDrawerOpen,
  setDrawer,
  backgroundColor,
  width,
  height,
  children
}) => {
  return (
    <Drawer
      anchor={anchor}
      open={isDrawerOpen}
      SlideProps={{ direction: slideDirection }}
      PaperProps={{
        style: {
          backgroundColor: backgroundColor && backgroundColor,
          width: width || "100%",
          height: height || "30%",
        },
      }}
      onClose={() => setDrawer(!isDrawerOpen)}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
