import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ImageSelect = ({ onImageSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/goodvibes.webp?alt=media&token=05eece16-0515-45c3-a570-aabaa6322fb7"
  );

  const storage = getStorage(); // Initialize Firebase Storage

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleImageSelect = async (imagePath) => {
    try {
      const image = await getDownloadURL(ref(storage, imagePath));
      setSelectedImage(image);
      onImageSelect(image);
      closeModal();
    } catch (error) {
      console.error("Error getting image from Firebase Storage:", error);
    }
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
                      src="https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/goodvibes.webp?alt=media&token=05eece16-0515-45c3-a570-aabaa6322fb7"
                      alt="goodvibes"
                      onClick={() =>
                        handleImageSelect(
                          "https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/goodvibes.webp?alt=media&token=05eece16-0515-45c3-a570-aabaa6322fb7"
                        )
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src="https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/youareinvited.webp?alt=media&token=8fe0bb8b-034d-4e62-bdad-91349be9459b"
                      alt="you are invited"
                      onClick={() =>
                        handleImageSelect(
                          "https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/youareinvited.webp?alt=media&token=8fe0bb8b-034d-4e62-bdad-91349be9459b"
                        )
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src="https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/hpnyb.webp?alt=media&token=ae3cb56a-c9a7-4c8a-9a8d-85d5c57cff1a"
                      alt="happy new year b"
                      onClick={() =>
                        handleImageSelect(
                          "https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/hpnyb.webp?alt=media&token=ae3cb56a-c9a7-4c8a-9a8d-85d5c57cff1a"
                        )
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src="https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/veryimportant.webp?alt=media&token=dbf909d2-e5e4-4884-9c29-a8ade4df54da"
                      alt="very important"
                      onClick={() =>
                        handleImageSelect(
                          "https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/veryimportant.webp?alt=media&token=dbf909d2-e5e4-4884-9c29-a8ade4df54da"
                        )
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src="https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/zerorule.webp?alt=media&token=da7890aa-bff9-4d08-95cf-a39137eff8a5"
                      alt="zero rules"
                      onClick={() =>
                        handleImageSelect(
                          "https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/zerorule.webp?alt=media&token=da7890aa-bff9-4d08-95cf-a39137eff8a5"
                        )
                      }
                    />
                    <img
                      className="w-36 rounded cursor-pointer"
                      src="https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/happynewyear.webp?alt=media&token=7b02649d-f1b5-463a-9435-c2667d32f66d"
                      alt="happy new year"
                      onClick={() =>
                        handleImageSelect(
                          "https://firebasestorage.googleapis.com/v0/b/event-invitation-project.appspot.com/o/happynewyear.webp?alt=media&token=7b02649d-f1b5-463a-9435-c2667d32f66d"
                        )
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
};
export default ImageSelect;
