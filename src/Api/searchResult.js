import request from "@/utils/request";

export const searchResult = (params) => {
  return request({
    url: "/cloudsearch",
    params,
  });
};
