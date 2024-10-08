import clsx from "clsx";
import { JSX, Show, createUniqueId, splitProps } from "solid-js";
import { Option } from "./option";

type Props = JSX.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  placeholder?: string | undefined;
};

export function Select(props: Props) {
  const [local, rest] = splitProps(props, [
    "label",
    "placeholder",
    "class",
    "children",
  ]);

  const id = createUniqueId();

  return (
    <div class="space-y-2">
      <label for={id}>{local.label}</label>
      <select
        {...rest}
        id={id}
        class={clsx(
          "block min-w-0 w-full px-3 py-2 rounded border border-gray-400 dark:border-gray-600 outline-none focus:outline-indigo-600 dark:focus:outline-indigo-400 focus:-outline-offset-1 bg-transparent disabled:text-gray-600 dark:disabled:text-gray-400",
          local.class
        )}
      >
        <Show when={local.placeholder}>
          <Option value="" selected disabled>
            {local.placeholder}
          </Option>
        </Show>
        {local.children}
      </select>
    </div>
  );
}
