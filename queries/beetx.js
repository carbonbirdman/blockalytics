const POOLS = gql`
  query {
    pools(where: first: 5, orderBy: "totalSwapVolume", orderDirection: desc) {
      id
      totalSwapVolume
      tokens {
        symbol
        address
        balance
      }
    }
  }
`;

query {
  pools(where: 
    {tokensList_contains: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83"})
  { 
    id
    tokens {
      id
    }
    tokensList
    }
  }


//json = {'query': '{tokenPrices(where:
//  {poolId: "0x03c6b3f09d2504606936b1a4decefad204687890000200000000000000000015"},
//  orderDirection: desc, orderBy: "block", first: 1) {price}}'}

"0x03c6b3f09d2504606936b1a4decefad204687890000200000000000000000015"},
// 