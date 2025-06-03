import CreateTopicForm from "@/components/CreateTopicForm";

export default function Page() {
  return (
    <div>
      <h1 className={`mb-4 text-4xl md:text-2xl`}>New Topic</h1>
      <CreateTopicForm />
    </div>
  );
}
