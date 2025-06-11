import { CheckIcon } from "@heroicons/react/24/outline";

export default function Checked() {
  return (
    <button className="h-8 w-8 min-w-[2rem] rounded-full ring-gray-200 hover:text-atlas-teal toggle:bg-primary toggle:text-white active:outline-hidden toggle:ring-2 toggle:ring-primary">
      <CheckIcon />
    </button>
  );
}
