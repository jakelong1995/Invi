import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import youareinvited from "../../../assets/youareinvited.webp";
import goodvibes from "../../../assets/goodvibes.webp";
import hpnyb from "../../../assets/hpnyb.webp";
import veryimportant from "../../../assets/veryimportant.webp";
import zerorule from "../../../assets/zerorule.webp";
import happynewyear from "../../../assets/happynewyear.webp";

export default function ImageSelect({selectedImg}) {
  let [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(youareinvited);
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
                      src={goodvibes}
                      alt="goodvibes"
                      onClick={() =>
                        handleImageSelect(goodvibes)
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src={youareinvited}
                      alt="you are invited"
                      onClick={() =>
                        handleImageSelect(youareinvited)
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src={hpnyb}
                      alt="you are invited"
                      onClick={() =>
                        handleImageSelect(hpnyb)
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src={veryimportant}
                      alt="you are invited"
                      onClick={() =>
                        handleImageSelect(veryimportant)
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src={zerorule}
                      alt="happy new year"
                      onClick={() =>
                        handleImageSelect(zerorule)
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src={happynewyear}
                      alt="happy new year"
                      onClick={() =>
                        handleImageSelect(happynewyear)
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