import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import axios from '../common/axios';

const {width} = Dimensions.get('window');
const cols = 2;
const vMargin = 10;
const hMargin = 15;
const cellWH = (width - 2 * vMargin - 15) / cols;

const AboutImgList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = () => {
    axios
      .get('/v1/jp/hashtag?result_limit=20&page=1&ie_cache_fix=1605685192594')
      .then((response) => {
        setData(response.data.hashtag_list);
      })
      .catch((error) => {
        console.log(error.messages);
      });
  };

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
      <Text style={{ fontSize: 30 }}>PoPular Outfits</Text>
      <FlatList
        numColumns={2}
        data={data}
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
    backgroundColor: Colors.white,
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

export default AboutImgList;
