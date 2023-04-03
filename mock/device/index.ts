import { config } from "@/utils/axios/config";
import { MockMethod } from "vite-plugin-mock";

const { result_code } = config;

export default [
  // 列表接口
  {
    url: "/local/iot/device/page",
    method: "get",
    response: ({ query }) => {
      const pageStartIndex = query.size * (query.current - 1);
      return {
        code: result_code,
        data: {
          total: 34,
          records: new Array(Number(query.size || 10))
            .fill({})
            .map((_, index) => {
              return {
                id: `device_${pageStartIndex + index + 1}`,
                name: "设备名称" + (pageStartIndex + index + 1),
                productName: "产品名称" + (pageStartIndex + index + 1),
                status: Math.round(Math.random()),
                point: Math.round(Math.random() * 50),
                point2: Math.round(Math.random() * 50),
                point3: Math.round(Math.random() * 50),
              };
            }),
        },
        msg: "",
      };
    },
  },
  {
    url: "/local/device/deleteDeviceById",
    method: "delete",
    response: () => {
      return {
        code: result_code,
        data: {},
        msg: "删除成功",
      };
    },
  },
] as MockMethod[];
