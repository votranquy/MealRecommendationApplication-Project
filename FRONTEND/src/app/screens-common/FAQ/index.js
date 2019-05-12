// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, FlatList,
} from '../../../components';
import { MainFrame } from '../../components';
import theme from '../../../theme';
import styles from './styles';
import ExpandableView from '../../components/ExpandableView';
// Import internal logics
import i18n from '../../../i18n';
import fakeDataFAQ from './fakeData';

class FAQ extends Component {
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
        style={[styles.container, style]}
        titleImage={theme.Image.Ic.Faq}
        headerColor={theme.Color.MainFrameHeaderBlue}
        title={i18n.t('FAQ.Title')}
      >
        <FlatList
          style={[styles.containerForm]}
          data={fakeDataFAQ}
          extraData={this.state}
          renderItem={({ item }) => (
            <ExpandableView
              titleContainerStyle={styles.titleQuestion}
              key={item.id}
              titleStyle={styles.title}
              title={item.faqQuestion}
            >
              <Text style={styles.bodyAnswer}>{item.faqAnswer}</Text>
            </ExpandableView>
          )}
        />
      </MainFrame>
    );
  }
}

export default FAQ;
