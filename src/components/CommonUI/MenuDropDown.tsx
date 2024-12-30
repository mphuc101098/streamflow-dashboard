import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function MenuDropDown() {
  return (
    <Menu>
      <MenuButton
        data-active
        className='inline-flex bg-[#1a1d2d] text-white p-2 rounded-md truncate w-48 justify-center'
      >
        Wallet
        <ChevronDownIcon className='h-5 w-5' />
      </MenuButton>

      <MenuItems
        anchor='bottom end'
        className='border-2 w-52 p-6 bg-[#1a1d2d] text-white rounded-md space-y-4'
      >
        <MenuItem>
          <button className='block w-full text-left data-[focus]:text-gray-400'>
            Documentation
          </button>
        </MenuItem>
        <MenuItem>
          <a
            className='block data-[focus]:text-gray-400'
            href='/support'
          >
            Discord
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className='block data-[focus]:text-gray-400'
            href='/license'
          >
            Twitter
          </a>
        </MenuItem>

        <MenuItem>
          <button
            type='submit'
            className='block w-full text-left data-[focus]:text-gray-400'
          >
            Devnet
          </button>
        </MenuItem>
        <MenuItem>
          <button
            type='submit'
            className='block w-full text-left data-[focus]:text-gray-400'
          >
            Disconnect Wallet
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
