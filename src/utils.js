import React, { Fragment } from 'react';
import moment from 'moment';
import 'moment/locale/ru';

moment.updateLocale('ru', {
  relativeTime: {
       s:  "1 минуту",
       m:  "1 минуту",
 }
});

export const RUB_SYMBOL = String.fromCharCode(0x20BD);

export const addLineBreak = (line, separator) => {
  return <Fragment>{separator}<br/>{line.split(separator)[1]}</Fragment>
}

export const formatSum = (sum) => {
  return new Intl.NumberFormat('ru-RU').format(sum);
};

export const formatDate = (date) => {
  return moment(date).fromNow()
};

export const validateFields = (username, comment) => {
  return {
    username: username.length === 0,
    comment: comment.length === 0,
  };
};
