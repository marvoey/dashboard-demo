import { graphql } from "../../__generated/graphql";

const testQuery = graphql(`
  query Test {
    Data {
       total
       item {
        _json
       }
    }
  }
`);

export default testQuery;