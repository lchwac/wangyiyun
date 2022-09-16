import request from "@/utils/request.js";

export const getCommendList = (params) => {
  return request({
    url: "/personalized",
    params,
  });
};
