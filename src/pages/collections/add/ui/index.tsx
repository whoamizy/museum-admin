import { useParams } from "react-router-dom";
import { PageWrapper } from "shared/components";
import { AddCollectionItemForm } from "widgets/collection-items/forms/add";

export const AddCollectionItemPage = () => {
  const { id } = useParams();

  return (
    <PageWrapper>
      <AddCollectionItemForm id={id!} />
    </PageWrapper>
  );
};
