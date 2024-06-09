
import { Button, Modal, Select } from "flowbite-react";
import { useState } from "react";
import { ImCart } from "react-icons/im";
import { useDispatchCart,useCart } from './ContextReducer';
import { Badge } from "flowbite-react";
import { HiCheck, HiClock } from "react-icons/hi";

export default function Cart() {
  const [openModal, setOpenModal] = useState(true);
  const [modalPlacement, setModalPlacement] = useState('center')

  return (
    <>
      <div className=" flex flex-wrap gap-4">
        <Button onClick={() => setOpenModal(true)}><ImCart>
        </ImCart><Badge color="gray" icon={HiCheck} /> </Button>
      </div>
      <Modal
        show={openModal}
        position={modalPlacement}
        onClose={() => setOpenModal(false)}
        className=""
      >
        <Modal.Header>Small modal</Modal.Header>
        <Modal.Body className="bg-white">
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
           
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false) } className="text-[black]">Checkout</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
