import { CheckIcon } from "@heroicons/react/24/outline";
import { markCorrect } from "@/lib/actions";

export default function Checked({
  question_id,
  answer_id,
}: {
  question_id: string;
  answer_id: string;
}) {
  return (
    <form action={markCorrect}>
      <input type="hidden" name="answer_id" value={answer_id} />
      <input type="hidden" name="question_id" value={question_id} />
      <button
        type="submit"
        className="h-8 w-8 min-w-[2rem] rounded-full ring-gray-200 hover:text-atlas-teal active:bg-primary active:text-white active:outline-hidden active:ring-2 active:ring-primary"
      >
        <CheckIcon />
      </button>
    </form>
  );
}
