import { gql } from 'apollo-boost';

const getCompaniesQuery = gql`
  {
    companies {
      id
      name
    }
  }
`;

const addCompanyMutation = gql`
  mutation($name: String!) {
    addCompany(name: $name) {
      id
      name
    }
  }
`;

export { getCompaniesQuery, addCompanyMutation };
