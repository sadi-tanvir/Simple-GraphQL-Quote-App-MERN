import { gql } from "@apollo/client"

export const GET_ALL_QUOTES = gql`
query getAllQuotes{
    quotes{
      name
      by{
        _id
        firstName
        lastName
      }
    }
  }
`


export const GET_USER_INFO = gql`
query userInfo{
  user(_id:""){
    _id
    firstName
    lastName
    email
    quotes{
      name
      by
    }
  }
}
`