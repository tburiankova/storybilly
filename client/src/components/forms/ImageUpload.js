import React, { useRef, useState, useEffect } from 'react';

import Button from './Button';

const ImageUpload = ({ id, onInput, errorMessage }) => {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [valid, setValid] = useState(true);
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreview(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const onChangeHandler = (e) => {
    let pickedFile;
    let fileIsValid = valid;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      setValid(true);
      fileIsValid = true;
    } else {
      setValid(false);
      fileIsValid = false;
    }
    onInput(id, pickedFile, true);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        id={id}
        style={{ display: 'none' }}
        accept=".jpg, .jpeg, .png"
        ref={filePickerRef}
        onChange={onChangeHandler}
      />
      <div>
        <div>{preview && <img src={preview} alt="Preview" />}</div>
        <Button type="button" onClick={pickImageHandler}>
          Pick Image
        </Button>
      </div>
      {!valid && <p>{errorMessage}</p>}
    </div>
  );
};

export default ImageUpload;
