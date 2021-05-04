import { gql } from "@apollo/client";

export const CATEGORY_MUTATION = gql`
    mutation create($input: CreateCategoryInput!) {
        createCategory(createCategoryInput: $input) {
            id
        }
    }
`;

export const CATEGORY_QUERY = gql`
    query categoryFindAll {
        categoryFindAll{
            title,
            label,
            id,
            disabled,
            value
            children{
                id,
                title,
                disabled,
                value
            }


        }
    }
`;
