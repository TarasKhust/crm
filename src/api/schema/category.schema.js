import { gql } from "@apollo/client";

export const CATEGORY_MUTATION = gql`
    mutation create($input: createCategoryInput!) {
        createBrand(createCategoryInput: $input) {
            id
        }
    }
`;
