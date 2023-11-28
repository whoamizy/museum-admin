import { FormikProps } from "formik";
import { SaveBar } from "widgets/save-bar";
import { useTranslation } from "react-i18next";
import { TextField } from "@consta/uikit/TextField";
import { DragNDropField } from "@consta/uikit/DragNDropField";
import styles from "widgets/collection-items/forms/lib/styles.module.scss";
import { Button } from "@consta/uikit/Button";
import { useDeleteImage, useUploadImage } from "shared/api";
import { Image } from "entities/image";
import { toast } from "react-toastify";
import { env } from "shared/utils";
import { Path } from "shared/enums";
import { DeleteIcon } from "shared/assets/icons";
import cn from "classnames";
import { CollectionItemPayload } from "entities/collection";

export const AddCollectionItemView = ({
  values,
  errors,
  touched,
  submitForm,
  isSubmitting,
  isValid,
  setFieldValue,
}: FormikProps<CollectionItemPayload>) => {
  const { t } = useTranslation();
  const { mutateAsync: uploadImage } = useUploadImage();
  const { mutateAsync: deleteImage } = useDeleteImage();
  const { imageId, name, author, year } = values;
  const {
    imageId: imageError,
    name: nameError,
    author: authorError,
    year: yearError,
  } = errors;

  const isDisabled = isSubmitting || !isValid;

  const shouldDisplayError = !!touched && !!errors;

  const uploadHandler = (files: File[]) => {
    const file = files[0];
    uploadImage(file, {
      onSuccess: (data: Image) => {
        setFieldValue("imageId", data.id);
      },
      onError: () => {
        toast.error(t("errors.uploadImage"));
      },
    });
  };

  const imageUrl = `${env.apiUrl}${Path.GET_IMAGE}${imageId}`;

  const deleteHandler = async () => {
    await deleteImage(imageId, {
      onSuccess: () => {
        setFieldValue("imageId", undefined);
      },
      onError: () => {
        toast.error(t("errors.deleteImage"));
      },
    });
  };

  return (
    <>
      <SaveBar
        isSubmitting={isSubmitting}
        isDisabled={isDisabled}
        onSave={submitForm}
      />
      <div className={styles.formWrapper}>
        <div className={cn(styles.imageBlock, { [styles.error]: imageError })}>
          {!!imageId && (
            <div className={styles.previewBack}>
              <div className={styles.removeImage} onClick={deleteHandler}>
                <DeleteIcon />
              </div>
              <img
                className={styles.previewImage}
                src={imageUrl}
                alt="превью"
              />
            </div>
          )}
          {!imageId && (
            <DragNDropField
              multiple={false}
              accept={["image/jpeg", "image/png"]}
              onDropFiles={uploadHandler}
            >
              {({ openFileDialog }) => (
                <>
                  <div className={styles.imageDescription}>
                    {t("form.pickImage.description")}
                  </div>
                  <br />
                  <Button
                    label={t("form.pickImage.button")}
                    onClick={openFileDialog}
                  />
                </>
              )}
            </DragNDropField>
          )}
        </div>
        <div className={styles.inputsBlock}>
          <div>
            <TextField
              id="name"
              width="full"
              type="text"
              value={name}
              onChange={(e) => setFieldValue("name", e.value)}
              caption={shouldDisplayError ? nameError : undefined}
              status={nameError ? "alert" : undefined}
              placeholder={t("collections.items.form.namePlaceholder")}
              label={t("collections.items.form.name")}
              labelPosition="top"
            />
          </div>
          <div>
            <TextField
              id="author"
              width="full"
              type="text"
              value={author}
              onChange={(e) => setFieldValue("author", e.value)}
              caption={shouldDisplayError ? authorError : undefined}
              status={authorError ? "alert" : undefined}
              placeholder={t("collections.items.form.authorPlaceholder")}
              label={t("collections.items.form.author")}
              labelPosition="top"
            />
          </div>
          <div>
            <TextField
              id="year"
              width="full"
              type="text"
              value={year}
              onChange={(e) => setFieldValue("year", e.value)}
              caption={shouldDisplayError ? yearError : undefined}
              status={yearError ? "alert" : undefined}
              placeholder={t("collections.items.form.yearPlaceholder")}
              label={t("collections.items.form.year")}
              labelPosition="top"
            />
          </div>
        </div>
      </div>
    </>
  );
};
