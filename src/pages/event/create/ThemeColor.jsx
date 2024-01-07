import React from "react";
import { Col, ColorPicker, Divider, Row, Space } from "antd";
const ThemeColor = () => (
  <ColorPicker
    styles={{
      popupOverlayInner: {
        width: 468 + 24,
      },
    }}
    presets={[
      {
        label: "Recommended",
        colors: [
          "#000000",
          "#F5222D",
          "#FA8C16",
          "#FADB14",
          "#8BBB11",
          "#52C41A",
          "#13A8A8",
          "#1677FF",
          "#2F54EB",
          "#722ED1",
          "#EB2F96",
        ],
      },
    ]}
    panelRender={(_, { components: { Picker, Presets } }) => (
      <div
        className="custom-panel"
        style={{
          display: "flex",
          width: 468,
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <Presets />
        </div>
        <Divider
          type="vertical"
          style={{
            height: "auto",
          }}
        />
        <div
          style={{
            width: 234,
          }}
        >
          <Picker />
        </div>
      </div>
    )}
  >
    <div className="flex gap-4 m-2 justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className=" rounded bg-black w-6 h-6"></div>
        <div>Color</div>
      </div>
      <div>Gray</div>
    </div>
  </ColorPicker>
);
export default ThemeColor;
