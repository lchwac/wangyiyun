import request from "@/utils/request";

export const getNewest = (params) => {
  return request({
    url: "/personalized/newsong",
    params,
  });
};
