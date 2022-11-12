import * as yup from 'yup';

import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from '../FormikTextInput';

import Button from '../Button';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    padding: 20,
    zIndex: 10,
    backgroundColor: theme.colors.containerBackground,
    elevation: 5,
  },
  reviewTextInput: {
    padding: 10,
    marginVertical: theme.gaps.formInputsGap / 2,
  },
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Rating cannot be lower than 0')
    .max(100, 'Rating cannot be higher than 100')
    .required('Rating is required'),
  text: yup
    .string()
    .min(3, 'Review must be longer than 3 characters or nothing')
    .notRequired(),
});

const ReviewForm = ({ onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => 
      <View style={styles.container}>
        <FormikTextInput name="ownerName" placeholder="Repository owner name" style={styles.reviewTextInput}/>
        <FormikTextInput name="repositoryName" placeholder="Repository name" style={styles.reviewTextInput}/>
        <FormikTextInput name="rating" placeholder="Rating between 0 and 100" style={styles.reviewTextInput}/>
        <FormikTextInput name="text" placeholder="Review" style={styles.reviewTextInput} multiline={true}/>
        <Button onPress={handleSubmit} label={'Create a review'} />
      </View>
    }
  </Formik>
);

export default ReviewForm;