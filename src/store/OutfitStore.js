import {makeAutoObservable} from 'mobx';
import axios from '../common/axios';

export default class OutfitStore {
  constructor() {
    makeAutoObservable(this);
  }
  outfitList = [];
  setOutfitList = (list) => {
    this.outfitList = list;
  };

  fetchOutfitList = async () => {
    const response = await axios.get(
      '/v1/jp/hashtag?result_limit=20&page=1&ie_cache_fix=1605685192594',
    );
    this.setOutfitList(response.data.hashtag_list);
  };
}
