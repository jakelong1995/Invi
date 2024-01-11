import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { colors } from "../../common/Colors";

export default function ThemeColor({ selected, setSelected }) {
  return (
    <div>
      <Listbox value={selected} onChange={setSelected} horizontal>
        <div className="relative mt-1">
          <Listbox.Button className="flex items-center justify-between gap-2 relative w-full cursor-pointer rounded py-1 pl-2 pr-8 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
            <div className="flex gap-2">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: selected.value }}
              ></div>
              <div className="text-gray-600">Color</div>
            </div>
            <div className="font-medium" style={{ color: selected.value }}>
              {selected.name}
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="flex p-4 justify-between absolute mt-1 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {colors.map((color, colorIdx) => (
                <Listbox.Option
                  key={colorIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none`
                  }
                  value={color}
                >
                  {({ selected }) => (
                    <div
                      className="w-6 h-6 rounded-full p-1"
                      style={{
                        backgroundColor: `${color.value}`,
                        border: selected ? `2px solid ${color.value}` : "none",
                      }}
                    ></div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
