import { Button } from "components/form";
import { Modal } from "components/modal";
import { FiEdit2 } from "solid-icons/fi";
import { createSignal } from "solid-js";
import { UpdateForm } from "./update-form";

type Props = {
  examId: string;
};

export function UpdateButton(props: Props) {
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button size="small" icon={FiEdit2} onClick={openModal}>
        更新
      </Button>
      <Modal isOpen={isModalOpen()} onClose={closeModal}>
        <UpdateForm examId={props.examId} onClose={closeModal} />
      </Modal>
    </>
  );
}
