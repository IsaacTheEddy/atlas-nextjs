import { answerQuestion } from "@/lib/actions";

export function AnswerQuestion({ question }: { question: string }) {
  return (
    <form className="relative my-8" action={answerQuestion}>
      <input
        type="hidden"
        name="question_id"
        value={question}
        className="hidden"
      />
      <input
        type="text"
        name="title"
        placeholder="Awnser question"
        className="mt-1 block w-full rounded-md border border-atlas-white-300 bg-inherit py-3 pl-3 pr-28 text-lg text-gray-900 placeholder-gray-400 focus:outline-hidden focus:ring-3 focus:ring-atlas-teal"
      />
      <button className="absolute right-2 top-2 flex h-10 w-24 items-center justify-center rounded-md border bg-secondary px-4 text-lg text-white focus:bg-secondary">
        Awnser
      </button>
    </form>
  );
}
