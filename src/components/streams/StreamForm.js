import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component {

  renderInput = ({input,label,meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input}/>
        {this.renderErr(meta)}
      </div>);
  }

  renderErr({error, touched}){
    if (touched && error){
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render(){
    return (
      <div>
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} label="Enter title"/>
          <Field name="description" component={this.renderInput} label="Enter description"/>
          <button className="ui button primary">Submit</button>
        </form>
      </div>);
  }
}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title){
    errors.title = 'You must enter a title'
  }

  if(!formValues.description){
    errors.description = 'You must enter a description'
  }

  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);