import { gql } from "@apollo/client";

export const BRAND_MUTATION = gql`
    mutation create($date: String) {
        createBrand(data: $data) {
            id
        }
    }
`;

export const GET_BRANDS = gql`
    query getAllBrands {
        getAllBrands {
            id,
            name,
            description,
            metaTags,
            metaTagsDescription
        }
    }
`;
