import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function MuiButton() {
  return (
    <>
      <Button
        sx={{
          borderRadius: 2,
          mr: 2,
          textTransform: "capitalize",
          background: `radial-gradient(231.94% 231.94% at 50% 100%, #8a6cff 0%, rgba(53, 41, 128, 0) 25.24%), 
                linear-gradient(180deg, rgba(243, 238, 255, 0), rgba(243, 238, 255, 0.04)), 
                rgba(147, 130, 255, 0.01)`, // Gradient background
          color: "white", // Set text color if needed
          boxShadow: `
     0 0 0 0 rgba(16, 0, 51, 0.4),
     0 2px 5px 0 rgba(16, 0, 51, 0.39),
     0 8px 8px 0 rgba(16, 0, 51, 0.34),
     0 19px 11px 0 rgba(16, 0, 51, 0.2),
     0 34px 14px 0 rgba(16, 0, 51, 0.06),
     0 53px 15px 0 rgba(16, 0, 51, 0.01),
     inset 0 0 12px 0 hsla(0, 0%, 100%, 0.08),
     inset 0 -8px 32px 0 #1e0d49`,
          "&:hover": {
            background: "#8a6cff", // Adjust for hover effect if desired
            boxShadow: `
        0 0 0 0 rgba(16, 0, 51, 0.5),
        0 3px 7px 0 rgba(16, 0, 51, 0.44),
        0 10px 10px 0 rgba(16, 0, 51, 0.39),
        0 22px 14px 0 rgba(16, 0, 51, 0.25),
        0 40px 18px 0 rgba(16, 0, 51, 0.1),
        0 60px 20px 0 rgba(16, 0, 51, 0.03),
        inset 0 0 14px 0 hsla(0, 0%, 100%, 0.1),
        inset 0 -10px 36px 0 #1e0d49`,
          },
        }}
        variant="contained"
        endIcon={<ArrowRightAltIcon />}
      >
        Book a Demo
      </Button>
    </>
  );
}
