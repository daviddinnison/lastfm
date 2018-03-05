//react
import React from 'react';

//react native
import { Spinner } from 'native-base';

export default class Loader extends React.Component {
  render() {
    return <Spinner color="#F9F8EB" />;
  }
}
