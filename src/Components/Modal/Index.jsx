import {useState} from "react";
import Modal from "./Modal.jsx";

export default function Index(){
    const [showModal, setShowModal] = useState(false)

    function handleOpenModal(){
        setShowModal(true)
    }
    function handleCloseModal(){
        setShowModal(false)
    }
    return (
        <>
            <div className="flex  justify-center items-center h-screen w-screen ">

                <button type="button" className="bg-blue-700 text-white rounded-md py-2 px-4" onClick={handleOpenModal}>
                    Open Modal
                </button>

                {showModal &&  <Modal ModalId="first-modal" closeModal={handleCloseModal} ModalHeader={null} ModalBody={null} ModalFooter={null} />}
            </div>
        </>
    )
}