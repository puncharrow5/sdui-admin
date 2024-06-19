import { ApolloClient, InMemoryCache, createHttpLink, split } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";
import Router from "next/router";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

// 인증 오류 처리
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
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

        // onToast({ type: "error", message: "로그인이 만료되었습니다." });
        return Router.push("/login", undefined, { shallow: true });
      }
    });

    // onToast({ type: "error", message: `${graphQLErrors[0].message}` });
  }

  //   if (networkError) {
  //     onToast({ type: "error", message: `네트워크 에러: ${networkError}` });
  //   }

  //   return getNewAccessToken;
});

// HTTP
const httpLink = createHttpLink({
  uri: "http://10.10.100.57:3000/graphql",
  credentials: "include",
});

const uploadLink = createUploadLink({
  uri: "http://10.10.100.57:3000/graphql",
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
