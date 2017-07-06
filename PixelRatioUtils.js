import {
  PixelRatio,
  TouchableWithoutFeedback,
  Platform,
  processColor,
  Dimensions,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const toPixels = PixelRatio.getPixelSizeForLayoutSize.bind(PixelRatio);

// Convert pixels back to dips
/*function toDips(px) {
  return px / PixelRatio.get();
}*/

function toDips(px) {
  return (px / 750) * width;
}
function toDipsWidth(px) {
  return (px / 750) * width;
}
function toDipsHeight(px) {
  return (px / 1334) * height;
}

export {
  toDips,
    toDipsWidth,
    toDipsHeight
};