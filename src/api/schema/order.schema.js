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
