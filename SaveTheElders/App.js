import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Home from './screens/Home.js'
import Settings from './screens/Settings.js'
import View from './screens/View.js'


// const FirstRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
// );

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: < Home />,
  second: < Settings />,
  third: < View />
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Home' },
    { key: 'second', title: 'Settings' },
    { key: 'third', title: 'View'}
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
