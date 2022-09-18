import request from "@/utils/request";

export const getComment = (params) => {
  return request({
    url: "/comment/music",
    params,
  });
};
