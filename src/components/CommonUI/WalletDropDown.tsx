import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function WalletDropDown() {
  return (
    <Menu>
      <MenuButton className='bg-[#1a1d2d] text-white justify-center p-2 rounded-md truncate w-48 mr-2'>
        Wallet
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
            Documentation
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
