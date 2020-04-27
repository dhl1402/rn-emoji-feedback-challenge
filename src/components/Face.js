import React, {Component} from 'react';

import TerribleFace from './TerribleFace';
import BadFace from './BadFace';
import NormalFace from './NormalFace';
import GoodFace from './GoodFace';
import GreatFace from './GreatFace';

export default class Face extends Component {
  static defaultProps = {
    backgroundColor: '#d4dadd',
  };

  render() {
    switch (this.props.happiness) {
      case 0:
        return <TerribleFace {...this.props} />;
      case 0.25:
        return <BadFace {...this.props} />;
      case 0.5:
        return <NormalFace {...this.props} />;
      case 0.75:
        return <GoodFace {...this.props} />;
      case 1:
        return <GreatFace {...this.props} />;
      default:
        return null;
    }
  }
}
