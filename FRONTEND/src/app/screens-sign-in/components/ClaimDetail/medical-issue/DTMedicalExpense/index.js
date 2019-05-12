// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, Text, Image } from '../../../../../../components';
import { ExpandableView } from '../../../../../components';
import styles from './styles';
// Import internal logics
import i18n from '../../../../../../i18n';
import theme from '../../../../../../theme';


class DTMedicalExpense extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {

    };
    this._renderImage = this._renderImage.bind(this);
  }

  _renderImage(expenseImg, count) {
    const contentImg = [];

    let j = 0;
    for (let i = 0; i < count; i++) {
      const childrenArr = [];
      for (let k = 0; k < 4; k++) {
        if (j < expenseImg.length) {
          const source = require('../../../../../../assets/images/background/AirPlane.png');
          childrenArr.push(
            <View style={styles.ctnImage}>
              <Image
                style={styles.imgContent}
                source={source}
              />
            </View>,
          );
        } else {
          childrenArr.push(
            <View style={[styles.ctnImage, styles.ctnDashedBorder]}>
              <Image
                style={styles.imgContent}
              />
            </View>,
          );
        }
        j++;
      }
      contentImg.push(
        <View style={styles.ctnImageItem}>
          {childrenArr}
        </View>,
      );
    }
    return contentImg;
  }

  render() {
    const { claim } = this.props;


    return (
      <View style={styles.container}>

        {/* Incident Details */}
        <Text style={styles.txtTitleItem}>
          {i18n.t('CMMC.IncidentDetail')}
        </Text>
        <Text style={styles.txtContent}>
          {claim.incidentDetail}
        </Text>

        {/* Loop Expenses */}
        {claim.expenseList.map((expense, index) => (
          <ExpandableView
            key={expense.number}
            style={styles.expenseItems}
            titleStyle={styles.txtExpense}
            title={`${i18n.t('CMMC.Expense')} ${index + 1}`}
            titleContainerStyle={styles.epvExpense}
          >
            <Text style={styles.txtTitleItem}>
              {i18n.t('CMMC.ExpenseType')}
            </Text>
            <Text style={styles.txtContent}>
              {expense.expenseType}
            </Text>
            <Text style={styles.txtTitleItem}>
              {i18n.t('CMMC.ExpenseTotal')}
            </Text>
            <Text style={styles.txtContent}>
              {`${expense.currency} ${expense.totalExpensesIncurred}${'.00'}`}
            </Text>

            {/* Render image of expense */}
            <Text style={styles.txtTitleItem}>
              {i18n.t('CMMC.BillsImage')}
            </Text>
            {this._renderImage(expense.billsImage, 2)}
            <Text style={styles.txtTitleItem}>
              {i18n.t('CMMC.ReportImage')}
            </Text>
            {this._renderImage(expense.reportImage, 1)}
          </ExpandableView>

        ))}
      </View>
    );
  }
}

export default DTMedicalExpense;
