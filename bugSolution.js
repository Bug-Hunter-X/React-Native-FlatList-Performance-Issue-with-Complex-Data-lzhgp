The solution involves using `useMemo` and `React.memo` to optimize the rendering process:

```javascript
import React, { useMemo, memo } from 'react';
import { FlatList, View, Text } from 'react-native';

const Item = memo(({ item, toggleItem }) => (
  <View>
    <Text onPress={() => toggleItem(item.id)}>{item.id}</Text>
    {item.expanded && <Text>Expanded Content</Text>}
  </View>
));

const MyComponent = () => {
  const [items, setItems] = React.useState(Array.from({ length: 100 }, (_, i) => ({ id: i, expanded: false })));

  const memoizedItems = useMemo(() => items, [items]);

  const toggleItem = (id) => {
    setItems((prevState) =>
      prevState.map((item) => (item.id === id ? { ...item, expanded: !item.expanded } : item))
    );
  };

  return (
    <FlatList
      data={memoizedItems}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Item item={item} toggleItem={toggleItem} />}
    />
  );
};

export default MyComponent;
```

By using `useMemo`, we ensure that the `items` array is only recalculated when it actually changes.  `React.memo` prevents unnecessary re-renders of individual list items. This combination significantly improves the performance and stability of the `FlatList` component, especially when dealing with complex data and frequent updates.