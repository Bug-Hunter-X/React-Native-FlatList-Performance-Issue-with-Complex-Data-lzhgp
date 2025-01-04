# React Native FlatList Performance Issue

This repository demonstrates a common performance issue in React Native's `FlatList` component when dealing with complex data and frequent updates.  The problem arises from inefficient key management and the challenges React's reconciliation process faces when trying to update a large number of components with nested state.

The `bug.js` file contains a simple example that showcases the issue.  The `bugSolution.js` file provides a solution that significantly improves performance.