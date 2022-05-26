import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export const headerNavigationArray = [
  {
    linkTo: "/create-marker",
    icon: <AddLocationAltOutlinedIcon />,
    name: "Add place"
  },
  { linkTo: "/map", icon: <MapOutlinedIcon />, name: "Map" },
  { linkTo: "/list", icon: <FormatListBulletedOutlinedIcon />, name: "List" },
  {
    linkTo: "/favorites",
    icon: <FavoriteBorderOutlinedIcon />,
    name: "Favorites"
  }
];
