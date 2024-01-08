import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function ImageSelect() {
  let [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "/src/assets/youareinvited.webp"
  );
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleImageSelect = (image) => {
    setSelectedImage(image);
    closeModal();
  };
  return (
    <>
      <button type="button" onClick={openModal}>
        <img
          src={selectedImage}
          alt="Selected Image"
          className="w-full rounded-lg cursor-pointer"
        />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    Choose Image
                  </Dialog.Title>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <img
                      className="w-36 rounded cursor-pointer"
                      src="/src/assets/goodvibes.webp"
                      alt="you are invited"
                      onClick={() =>
                        handleImageSelect("/src/assets/goodvibes.webp")
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src="/src/assets/youareinvited.webp"
                      alt="you are invited"
                      onClick={() =>
                        handleImageSelect("/src/assets/youareinvited.webp")
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src="/src/assets/hpnyb.webp"
                      alt="you are invited"
                      onClick={() =>
                        handleImageSelect("/src/assets/hpnyb.webp")
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src="/src/assets/veryimportant.webp"
                      alt="you are invited"
                      onClick={() =>
                        handleImageSelect("/src/assets/veryimportant.webp")
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src="/src/assets/zerorule.webp"
                      alt="happy new year"
                      onClick={() =>
                        handleImageSelect("/src/assets/zerorule.webp")
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src="/src/assets/happynewyear.webp"
                      alt="happy new year"
                      onClick={() =>
                        handleImageSelect("/src/assets/happynewyear.webp")
                      }
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
