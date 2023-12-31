import { Formik } from "formik";
import { FormikSubmit } from "shared/types";
import { EditNewsView } from "./edit-view";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneNews, useUpdateNews } from "shared/api";
import { AppLinks } from "shared/enums";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { NewsItemPayload } from "entities/news";
import { ContentLoader } from "widgets/content-loader";
import { newsItemSchema } from "widgets/news/lib";

export const EditNewsForm = () => {
  const { id } = useParams();
  const { data: newsItem, isLoading, refetch } = useGetOneNews(id!);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutateAsync: update } = useUpdateNews(id!);

  const onSubmit: FormikSubmit<NewsItemPayload> = (values, helpers) => {
    update(values, {
      onSuccess: () => {
        toast.success(t("news.successUpdate"));
        navigate(AppLinks.NEWS, { replace: true });
        refetch();
      },
      onSettled: () => {
        helpers.setSubmitting(false);
      },
      onError: () => {
        toast.error(t("news.errorUpdate"));
      },
    });
  };

  if (isLoading || !newsItem) {
    return <ContentLoader />;
  }

  const initialValues: NewsItemPayload = {
    imageId: newsItem.imageId,
    title: newsItem.title,
    link: newsItem.link,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={newsItemSchema}
      component={EditNewsView}
    />
  );
};
