import { Formik } from "formik";
import { FormikSubmit } from "shared/types";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneCollectionItem, useUpdateCollectionItem } from "shared/api";
import { AppLinks } from "shared/enums";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { CollectionItemPayload } from "entities/collection";
import { EditCollectionItemView } from "./edit-view";
import { collectionItemSchema } from "widgets/collection-items/forms/lib";
import { queryClient } from "shared/providers";
import { ContentLoader } from "widgets/content-loader";

export const EditCollectionItemForm = () => {
  const { id: itemId } = useParams();
  const { data: collectionItem, isLoading } = useGetOneCollectionItem(itemId!);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutateAsync: update } = useUpdateCollectionItem(itemId!);

  const onSubmit: FormikSubmit<CollectionItemPayload> = (values, helpers) => {
    update(values, {
      onSuccess: () => {
        toast.success(t("collections.items.successUpdate"));
        navigate(AppLinks.COLLECTIONS, { replace: true });
        queryClient.refetchQueries({
          queryKey: ["collection-items/" + itemId],
        });
      },
      onSettled: () => {
        helpers.setSubmitting(false);
      },
      onError: () => {
        toast.error(t("collections.items.errorUpdate"));
      },
    });
  };

  if (isLoading || !collectionItem) {
    return <ContentLoader />;
  }

  const initialValues: CollectionItemPayload = {
    imageId: collectionItem.imageId,
    name: collectionItem.name,
    author: collectionItem.author,
    year: collectionItem.year,
    collectionName: collectionItem.collectionName._id,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={collectionItemSchema}
      component={EditCollectionItemView}
    />
  );
};
