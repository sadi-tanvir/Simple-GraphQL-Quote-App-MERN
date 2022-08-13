import { gql } from "@apollo/client"

export const SIGNUP_USER = gql`
mutation signUpUser($userData:UserSignUpInput!){
    user:signupUser(userData:$userData){
      firstName
    }
  }
`