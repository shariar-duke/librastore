import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Logo() {
  return (
    <div className="flex flex-row items-center leading-none">
      <SparklesIcon className="w-6 h-6 text-white animate-spin-slow" />
      <p className="text-3xl font-semibold text-white ml-1">LitLoop</p>
    </div>
  );
}
