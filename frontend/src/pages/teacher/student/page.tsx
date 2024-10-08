import { Title } from "components/title";
import { FiBookOpen } from "solid-icons/fi";
import { CreateButton } from "./create-button";
import { ExamTable } from "./table";

export function Page() {
  return (
    <div class="space-y-8 px-12 pt-8">
      <Title icon={FiBookOpen}>学生管理</Title>
      <CreateButton />
      <ExamTable />
    </div>
  );
}
