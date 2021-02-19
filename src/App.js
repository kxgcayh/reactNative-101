import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import ClassFlexBox from './pages/FlexBox/ClassFlexBox';
import ArrowFlexBox from './pages/FlexBox/ArrowFlexBox';
import Positioning from './pages/Positioning';
import DynamicProps from './pages/DynamicProps';
import DynamicState from './pages/DynamicState';
import Communications from './pages/Communications';
import ReactNativeSVG from './pages/ReactNativeSVG';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
  }, []);

  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* {isShow && <ClassFlexBox />} */}
        {/* {isShow && <ArrowFlexBox />} */}
        {/* <DynamicProps /> */}
        {/* <Positioning /> */}
        {/* <DynamicState /> */}
        {/* <Communications /> */}
        {/* <ReactNativeSVG /> */}
        {/* <CallAPIVanilla /> */}
        <CallAPIAxios />
      </ScrollView>
    </View>
  );
};

export default App;
