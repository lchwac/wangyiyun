import request from "@/utils/request";

export const getHotSearchWords = () => {
  return request({
    url: "/search/hot",
  });
};
