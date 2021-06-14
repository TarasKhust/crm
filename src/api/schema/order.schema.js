import { gql } from "@apollo/client";

export const ORDER_QUERY = gql`
    query order {
        orderFindAll{
            order_id
            customer{
                firstName
                lastName
                surName
            }
            orderStatus{
                name
            }
            createdAt
            updatedAt
            total
        }
    }
`;

export const DELETE_MUTATION = gql`
    mutation delete($id: Int!) {
        removeOrder(id: $id) {
            __typename
        }
    }
`;
