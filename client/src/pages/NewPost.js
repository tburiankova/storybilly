import React from 'react';

import Input from '../components/forms/Input';
import Button from '../components/forms/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../utils/validators';
import { useForm } from '../hooks/useForm';

const NewPost = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      content: {
        value: '',
        isValid: false,
      },
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();

    //TODO: send to backend
    console.log(formState.inputs);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <Input
          id="title"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorMessage="Please enter a valid title"
          onInput={inputHandler}
        />
        <Input
          inputType="textarea"
          id="content"
          label="Your story"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
          errorMessage="A story must have at least 10 characters"
          onInput={inputHandler}
        />
        <Input
          id="image"
          label="Image"
          onInput={inputHandler}
          validators={[]}
          valid
        />
        <Button type="submit" disabled={!formState.isFormValid}>
          Post Story
        </Button>
      </form>
    </div>
  );
};

export default NewPost;
