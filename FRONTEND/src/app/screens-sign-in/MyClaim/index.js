// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, Button, TouchableOpacity, Image, ScrollView,
} from '../../../components';
import { MainFrame } from '../../components';
import { ClaimOverView } from '../components';
import styles from './styles';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';
import navigator from '../../../navigator';

// TODO: wil be remove
import claimData from './fakeData';

class MyClaim extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {
      filter: 'All',
    };
  }

  _openTapSubmit() {
    navigator.navigate('SubmitClaim');
  }

  _openTapViewDetail(index) {
    navigator.navigate(
      'MyClaimDetail',
      { key: index },
    );
  }

  _openTapFilter(status) {
    this.setState({ filter: status });
  }

  render() {
    const { filter } = this.state;
    return (
      <View style={styles.container}>
        <MainFrame
          titleImage={theme.Image.Ic.MyClaim}
          title={i18n.t('MC.Title')}
          headerColor={theme.Color.MainFrameHeaderYellow}
        >
          <View style={styles.container}>
            {/* Filter button follow claim status */}
            <View style={styles.ctnFilter}>
              <Text style={styles.txtFilter}>
                {i18n.t('MC.ViewBy')}
              </Text>
              <Button
                style={styles.btnFilter}
                text={i18n.t('MC.All')}
                onPress={() => this._openTapFilter(i18n.t('MC.All'))}
              />
              <Button
                style={styles.btnFilter}
                text={i18n.t('MC.Approved')}
                onPress={() => this._openTapFilter(i18n.t('MC.Approved'))}
              />
              <Button
                style={styles.btnFilter}
                text={i18n.t('MC.Pending')}
                onPress={() => this._openTapFilter(i18n.t('MC.Pending'))}
              />
              <Button
                style={styles.btnFilter}
                text={i18n.t('MC.Rejected')}
                onPress={() => this._openTapFilter(i18n.t('MC.Rejected'))}
              />
            </View>

            {/* Get component ClaimOverView for all Claim */}
            {claimData.map((claim, index) => (
              filter === 'All' ? (
                <TouchableOpacity onPress={() => this._openTapViewDetail(index)}>
                  <ClaimOverView claim={claim} />
                </TouchableOpacity>
              ) : (
                claim.status === filter && (
                <TouchableOpacity onPress={() => this._openTapViewDetail(index)}>
                  <ClaimOverView claim={claim} />
                </TouchableOpacity>
                )
              )
            ))}
          </View>
        </MainFrame>

        {/* Button to navigate Submit claim screen */}
        <TouchableOpacity style={styles.btnSubmit} onPress={this._openTapSubmit}>
          <View style={styles.ctnSubmit}>
            <Text style={styles.txtSubmit}>{i18n.t('MC.SubmitClaim')}</Text>
            <Image
              style={[styles.imgSubmit]}
              source={theme.Image.Ic.ArrowForward}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MyClaim;
