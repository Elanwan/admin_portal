import clsx from "clsx";
import { FiCheck } from "solid-icons/fi";
import { JSX, createUniqueId, splitProps } from "solid-js";

type Props = JSX.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Checkbox(props: Props) {
  const [local, rest] = splitProps(props, ["label", "class"]);

  const id = createUniqueId();

  return (
    <div class="flex items-center gap-2 relative">
      <input
        {...rest}
        type="checkbox"
        id={id}
        class={clsx(
          "peer appearance-none w-4 h-4 rounded border border-gray-400 dark:border-gray-600 outline-none focus:outline-indigo-600 dark:focus:outline-indigo-400 focus:-outline-offset-1 bg-transparent",
          local.class
        )}
      />
      <FiCheck class="hidden peer-checked:inline absolute left-0 top-1/2 -translate-y-1/2 peer-disabled:stroke-gray-600 dark:peer-disabled:stroke-gray-400 pointer-events-none" />
      <label for={id}>{local.label}</label>
    </div>
  );
}
