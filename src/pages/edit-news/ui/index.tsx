import { PageWrapper } from "shared/components"
import { NewsItemForm } from "widgets/news-item-form"
import { NewsItemPayload } from "widgets/news-item-form/lib"



export const EditNewsPage = () => {
  const initialValues: NewsItemPayload = {
    imageId: "",
    title: "",
    link: ""
  }

  return (
    <PageWrapper>
      <NewsItemForm initialValues={initialValues} />
    </PageWrapper>
  )
}
