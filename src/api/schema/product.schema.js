import { gql } from "@apollo/client";

export const PRODUCT_MUTATION = gql`
    mutation createProduct($input: Product!) {
        createProduct(data: $input) {
           name
        }
    }
`;
