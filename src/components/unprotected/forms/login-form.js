import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { Text, ActivityIndicator, TextInput, TouchableOpacity, View } from "react-native";

import { Button, Card, CardSection, Input, Spinner } from "../reusable/index";

import { login } from "../../../actions/auth";

/**
 * Automatically adds the dashes required by the specified phone format and limits the input to ten characters
 */
const userFormatter = (number) => {
  if (!number) return '';
  // NNN-NNN-NNNN
  const splitter = /.{1,3}/g;
  number = number.substring(0, 10);
  return number.substring(0, 7).match(splitter).join('-') + number.substring(7);
};

// remove dashes added by the formatter
const phoneParser = (number) => number ? number.replace(/-/g, '') : '';


/**
 * Force before max date
 */
const minDateNormalize = (value, previousValue, values) => {
  const momentMaxDate = moment(values.maxDate, 'MM-DD-YYYY', true);
  const momentMinDate = moment(value, 'MM-DD-YYYY', true);
  if (!momentMinDate.isValid() || !momentMaxDate.isValid()) {
    return value;
  }
  if (!momentMinDate.isBefore(momentMaxDate)) {
    return momentMaxDate.subtract(1, 'd').format('MM-DD-YYYY');
  }
  return value;
};

const LoginForm = props => {
  return (
    <View keyboardShouldPersistTaps={'handled'}>
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Phone number</Text>
      <Field
        name={'username'}
        component={Input}
        placeholder={'NNN-NNN-NNNN'}
        format={userFormatter}
        parse={phoneParser}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Min date</Text>
      <Field
        name={'password'}
        component={Input}
        placeholder={'MM-DD-YYYY'}
        normalize={minDateNormalize}
      />
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text>Submit!</Text>
      </TouchableOpacity>
    </View>
  );
}


export default reduxForm({
  form: 'signIn'
})(LoginForm);