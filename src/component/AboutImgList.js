import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';
import {observer} from 'mobx-react';
import StoreContext from "../context";

const {width} = Dimensions.get('window');
const cols = 2;
const vMargin = 10;
const hMargin = 15;
const cellWH = (width - 2 * vMargin - 15) / cols;

const AboutImgList = () => {
  const {outfitStore} = useContext(StoreContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("hello", outfitStore)
    outfitStore.fetchOutfitList();
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.item}>
          <Image source={{uri: item.source_image_url}} style={styles.img} />
          {/* <Text style={{ marginTop: 5, textAlign: 'center' }} numberOfLines={1}>{item.title}</Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/*<Text>Outfit:{JSON.stringify(outfitStore)}END</Text>*/}
      <Text style={{fontSize: 30}}>Popular Outfits</Text>
      <FlatList
        numColumns={2}
        data={outfitStore.outfitList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  listContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  item: {
    width: cellWH,
    marginTop: hMargin,
    alignItems: 'center',
  },

  img: {
    width: cellWH - 10,
    height: cellWH - 10,
  },
});

export default observer(AboutImgList);
