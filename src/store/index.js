import {configure} from 'mobx';
import OutfitStore from './OutfitStore';

configure({enforceActions: 'always'});

const store = {
  outfitStore: new OutfitStore(),
};
export default store;
