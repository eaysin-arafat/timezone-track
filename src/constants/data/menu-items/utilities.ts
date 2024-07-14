// assets
import { MenuGroupType } from "@/constants/types/menu-item";
import {
  URLColorThemes,
  URLSamplePage,
  URLShadows,
  URLTypography,
} from "@/routes/router-link";
import {
  BgColorsOutlined,
  BorderOutlined,
  FontSizeOutlined,
} from "@ant-design/icons";

// icons
const utilitiesIcons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BorderOutlined,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities: MenuGroupType = {
  id: "utilities",
  title: "Utilities",
  type: "group",
  children: [
    {
      id: "typography",
      title: "Typography",
      type: "item",
      url: URLTypography(),
      icon: utilitiesIcons.FontSizeOutlined,
    },
    {
      id: "color-themes",
      title: "Color Themes",
      type: "item",
      url: URLColorThemes(),
      icon: utilitiesIcons.BgColorsOutlined,
    },
    {
      id: "shadows",
      title: "Shadows",
      type: "item",
      url: URLShadows(),
      icon: utilitiesIcons.BorderOutlined,
    },
    {
      id: "sample-page",
      title: "Sample Page",
      type: "item",
      url: URLSamplePage(),
      icon: utilitiesIcons.BorderOutlined,
    },
  ],
};

export default utilities;
