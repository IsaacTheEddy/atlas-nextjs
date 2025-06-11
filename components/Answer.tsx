import Link from "next/link";
import Checked from "./Checked";

interface AnswerProps {
  id: string;
  answer: string;
  question_id: string;
}

export function Answer({ answer, id, question_id }: AnswerProps) {
  return (
    <div className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b">
      <p className="text w-full text-left font-semibold">{answer}</p>
      <Checked question_id={question_id} answer_id={id} />
    </div>
  );
}
