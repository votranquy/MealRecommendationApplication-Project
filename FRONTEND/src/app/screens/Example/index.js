// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, Text } from '../../../components';
import { MainFrame, LeftRightActionFooter } from '../../components';
import theme from '../../../theme';
import styles from './styles';
// Import internal logics
import i18n from '../../../i18n';

class Example extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { style } = this.props;
    return (
      <MainFrame
        style={styles.container}
        headerColor={theme.Color.MainFrameHeaderGreen}
        titleImage={theme.Image.kpmg.BuyPolicy}
        title={i18n.t('SOBP.Title')}
        message={i18n.t('SOBP.PolicyQuestion')}
        renderIndicator={() => (
          <View style={{ height: 60, backgroundColor: 'yellow' }}>
            <Text>Step indicator</Text>
          </View>
        )}
        editable
        onEdit={() => {}}
        renderFooter={() => (
          <LeftRightActionFooter
            leftText="Back"
            rightText="Sign in"
            onFootLeft={() => {}}
            onFootRight={() => {}}
          />
        )}
      >
        <View style={{ height: 300, backgroundColor: theme.Color.Test2 }}>
          <Text>HELLLLLLLLLO</Text>
        </View>
        <View style={{ height: 300, backgroundColor: theme.Color.Test3 }}>
          <Text>MYAAAAAAAAAAA</Text>
        </View>
        <View style={{ height: 300, backgroundColor: theme.Color.Test4 }}>
          <Text>CUUUUUUUUU</Text>
        </View>
        <View style={{ height: 80, backgroundColor: theme.Color.Test5 }}>
          <Text>VOIIIIIIIII</Text>
        </View>
      </MainFrame>
    );
  }
}

export default Example;
