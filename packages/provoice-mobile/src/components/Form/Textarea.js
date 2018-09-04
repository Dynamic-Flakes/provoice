import React from 'react';
import { Textarea } from 'native-base';

export default ({ input, ...rest }) =>
  <Textarea {...rest}  {...input} />;
