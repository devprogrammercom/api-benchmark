import { gql } from "apollo-server-micro";

export const typeDefs = gql`type Dollar {
  congress: Int
  then: String
  doubt: String
  death: String
  spin: Float
  visit: String
  completely: String
  tales: Boolean
  thought: String
  riding: String
  to: Float
  fifty: Boolean
  although: Int
  pass: String
  good: String
  indicate: Float
  captured: Boolean
  rather: Float
  snake: String
  salmon: Int
  music: Int
  suddenly: String
  quickly: Boolean
  construction: Int
  more: String
  work: String
  course: Int
  hang: String
  press: String
  bottle: String
}

type Mission {
  minerals: Boolean
  anywhere: Boolean
  ordinary: Float
  well: Boolean
  driving: Int
  interior: Boolean
  fix: Boolean
  nor: Int
  choose: Boolean
  similar: Float
  upper: Float
  direct: Float
  watch: Boolean
  shelter: String
  sister: Float
  prepare: String
  tea: Float
  someone: Boolean
  ate: String
  bus: Float
  knowledge: String
  getting: Float
  fight: Boolean
  making: Boolean
  house: Float
  worry: Int
  push: String
  myself: Boolean
  follow: Float
  dollar: Dollar
}

type AutogeneratedMainType {
  whole: Boolean
  fourth: Boolean
  pure: String
  as: Float
  doing: Float
  pale: Float
  each: Boolean
  longer: Boolean
  feed: String
  pour: Int
  wood: Float
  huge: Boolean
  ocean: String
  kind: String
  most: Boolean
  farther: String
  coal: Boolean
  evidence: String
  meant: String
  facing: String
  breathe: Int
  movie: String
  television: String
  driven: String
  monkey: String
  foot: Boolean
  writing: Boolean
  yourself: String
  sharp: Int
  mission: Mission
}

type Query {
  fetch: AutogeneratedMainType
}
`