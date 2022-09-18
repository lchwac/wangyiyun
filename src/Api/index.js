import { getCommendList } from "@/Api/getCommend.js";
import { getNewest } from "@/Api/getNewest.js";
import { getHotSearchWords } from "@/Api/getHotSearchWord.js";
import { searchResult } from "@/Api/searchResult.js";
import { getSongById, getLyricById } from "@/Api/Play.js";
import { getComment } from "@/Api/getComment";

export const getCommendListApi = getCommendList;
export const getNewestApi = getNewest;
export const getHotSearchWordsApi = getHotSearchWords;
export const searchResultApi = searchResult;
export const getSongByIdAPI = getSongById;
export const getLyricByIdAPI = getLyricById;
export const getCommentAPI = getComment;
