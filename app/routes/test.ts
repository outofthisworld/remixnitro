import { ActionFunctionArgs, json } from "~/runtime.server";


export async function action({ request, params }: ActionFunctionArgs) {
  return json(
    {},
    {
      status: 200,
      headers: {
        Location: "/?_data=routes/_base._index",
        'Content-Location': "/?_data=routes/_base._index",
      },
    }
  );
}
