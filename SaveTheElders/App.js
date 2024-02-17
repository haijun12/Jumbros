import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Home from './screens/Home.js'
import Settings from './screens/Settings.js'
import ManageMeds from './screens/ManageMeds.js'

const renderScene = SceneMap({
  first: Home,
  second: Settings,
  third: ManageMeds
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Home' },
    { key: 'second', title: 'Settings' },
    { key: 'third', title: 'Manage'}
  ]);

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width, height: layout.height - 300 }} // Adjust height to accommodate the tab bar
        tabBarPosition="bottom"
      />
    </View>
  );
}
