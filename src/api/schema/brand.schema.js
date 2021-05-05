import { gql } from "@apollo/client";

export const BRAND_MUTATION = gql`
    mutation create($input: CreateBrandInput!) {
        createBrand(createBrandInput: $input) {
            id
        }
    }
`;

export const GET_BRANDS = gql`
    query getAllBrands {
        getAllBrands {
            id,
            name
        }
    }
`;
