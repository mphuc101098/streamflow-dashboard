import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Menulist = [
  {
    id: 1,
    name: "Option default",
  },
  {
    id: 2,
    name: "Option 2",
  },
  {
    id: 3,
    name: "Option 3",
  },
];

export default function SelectMenu() {
  return (
    <div>
      <label
        htmlFor='Selected'
        className='block text-sm/6 font-medium text-gray-900'
      >
        Selected
      </label>
      <div className='mt-2 grid grid-cols-1'>
        <select
          id='location'
          name='location'
          defaultValue={Menulist[0].id}
          className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
        >
          {Menulist.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden='true'
          className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4'
        />
      </div>
    </div>
  );
}
