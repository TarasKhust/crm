import { gql } from "@apollo/client";

export const CATEGORY_MUTATION = gql`
    mutation create($input: CreateCategoryInput!) {
        createCategory(createCategoryInput: $input) {
            id
        }
    }
`;
