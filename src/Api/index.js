import { getCommendList } from "@/Api/getCommend.js";
import { getNewest } from "@/Api/getNewest.js";
import { getHotSearchWords } from "@/Api/getHotSearchWord.js";
import { searchResult } from "@/Api/searchResult.js";

export const getCommendListApi = getCommendList;
export const getNewestApi = getNewest;
export const getHotSearchWordsApi = getHotSearchWords;
export const searchResultApi = searchResult;
