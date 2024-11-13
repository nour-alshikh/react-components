export default function Modal({ModalId ,closeModal , ModalHeader,ModalBody , ModalFooter}) {
    return (
        <div id={ModalId || 'Modal'} className="h-screen w-screen overflow-y-auto bg-gray-800  fixed top-0 left-0 flex justify-center items-center">
            <div className="bg-white rounded-lg w-5/6 m-auto">
                <div className="modal-header py-3 px-2 border-b border-gray-200 flex justify-between items-center">
                    <p>
                        {ModalHeader || "Modal header"}
                    </p>
                    <span className="close bg-red-500 rounded-full text-white w-[35px] h-[35px] flex items-center justify-center cursor-pointer" onClick={closeModal}>&times;</span>
                </div>
                <div className="modal-body min-h-[500px]">
                    {ModalBody || "Modal body"}
                </div>
                <div className="modal-footer py-3 px-2 border-t border-gray-200">
                    {ModalFooter || "Modal footer"}
                </div>
            </div>
        </ div>
    )
}