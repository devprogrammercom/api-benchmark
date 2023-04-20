import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "@/data/gql-types";
import { data } from '../../data/example';
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse, IncomingMessage } from "http";

const resolvers = {
  Query: {
    fetch: () => data,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default async function handler(req: MicroRequest, res: ServerResponse<IncomingMessage>) {

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};