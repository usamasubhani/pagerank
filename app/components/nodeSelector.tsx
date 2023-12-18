import { Menu } from "@headlessui/react";
import classNames from "classnames";
import React from "react";

type DropdownProps = {
  label: string;
  nodesCount: number;
  value: number;
  onChange: (e: any) => void;
};

const NodeSelector = ({
  label,
  nodesCount,
  value,
  onChange,
}: DropdownProps) => {
  return (
    <div className="w-32">
      <label className="flex flex-col">
        <span className="mb-1">{label}:</span>
        <Menu as="div" className="relative inline-block text-left ">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ">
              {value}
            </Menu.Button>
          </div>
          <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {[...Array(nodesCount)].map((_, index) => (
                <Menu.Item key={index}>
                  <a
                    onClick={() => onChange(index)}
                    href="#"
                    className=" text-gray-900 block px-4 py-2"
                  >
                    {index}
                  </a>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Menu>
      </label>
    </div>
  );
};

export default NodeSelector;
