import { useLogoutMutation } from "@/graphql/generated/types";
import { useToastMessage } from "@/hooks";
import { ApolloClient, InMemoryCache, createHttpLink, split } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import Router from "next/router";

// 인증 오류 처리
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  // const [loadLogout] = useLogoutMutation();

  let getNewAccessToken;

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      if (extensions?.code === "UNAUTHENTICATED" || message === "unauthorized") {
        // // 리프레시 토큰으로 엑세스 토큰 재발급
        // getNewAccessToken = new Observable((observer) => {
        //   client
        //     .mutate({
        //       mutation: GET_NEW_ACCESS_TOKEN,
        //     })
        //     .then(({ data }) => {
        //       if (data) {
        //         forward(operation).subscribe({
        //           next: observer.next.bind(observer),
        //           error: observer.error.bind(observer),
        //           complete: observer.complete.bind(observer),
        //         });
        //       } else {
        //         client.mutate({ mutation: LOGOUT_USER });
        //       }
        //     });
        // });
        // ToastMessage("error", "로그인이 만료되었습니다.");
        // loadLogout();
      }
    });
    // ToastMessage("error", `${graphQLErrors[0].message}`);
  }

  // if (networkError) {
  //   ToastMessage("error", `네트워크 에러: ${networkError}`);
  // }

  // return getNewAccessToken;
});

// HTTP
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GQL_URL,
  headers: {
    "Apollo-Require-Preflight": "true",
  },
  fetchOptions: {
    mode: "cors",
  },
  credentials: "include",
});

const uploadLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_GQL_URL,
  credentials: "include",
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "mutation";
  },
  uploadLink,
  httpLink
);

const client = new ApolloClient({
  link: errorLink.concat(splitLink),
  cache: new InMemoryCache(),
});

export default client;
