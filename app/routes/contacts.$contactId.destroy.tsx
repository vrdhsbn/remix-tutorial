import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { deleteContact } from "../data";

// ファイルベースのルーティングが作られているけどページ遷移とかは起こっていない？
// Formからこのactionが呼び出されて実行されるだけ。
// export default でJSXが返らなければactionやloaderだけが実行されると考えたら良いのかな。
// NextのServer Actionsみたいなことが実現されてるんだろうな。
// Nextでは関数だけどRemixではルーティングと構造が同じになっているからなんだか混乱する。

export const action = async ({
  params,
}: ActionFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  await deleteContact(params.contactId);
  return redirect("/");
};
