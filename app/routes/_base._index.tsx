import {
  LoaderFunction,
  LoaderFunctionArgs,
  defer,
  type MetaFunction
} from "~/runtime.server";

import { Await, Link, useFetcher, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import Button from "~/components/button";
import Component from "~/components/component";


export const meta: MetaFunction = () => {
  return [{ title: "ProxyList - Home" }];
};

/*
export const headers: HeadersFunction = (headers: HeadersArgs) => {
  return {
    "Cache-Control": headers.loaderHeaders.get("Cache-Control")!,
    ETag: headers.loaderHeaders.get("ETag")!,
  };
};*/

export const loader: LoaderFunction = ({
  request,
  context,
  params,
}: LoaderFunctionArgs) => {
  return defer(
    {
      myData: new Promise((res) => {
        setTimeout(
          () =>
            res({
              myData: [1, 2, 3, 4, 5, 6],
            }),
          800
        );
      }),
    }
  );
};

export default function Index() {
  const { myData } = useLoaderData();
  const fetcher = useFetcher();

  return (
    <>
      <Component>Hello</Component>
      <Suspense fallback={<p>...Loading</p>}>
        <Await resolve={myData}>
          {(myData) => <p>{JSON.stringify(myData)}</p>}
        </Await>
      </Suspense>
      <Link to="/">Self</Link>
      <a href="/">Refresh</a>
      <fetcher.Form method="post" action="/test">
        <Button type="submit" width="200px" backgroundColor="red" mt={4}>
          Invalidate Cache
        </Button>
      </fetcher.Form>
    </>
  );
}
