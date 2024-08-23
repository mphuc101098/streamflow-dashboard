"use client";

import { Children, useState } from "react";
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  MoonIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import MenuDropDown from "./MenuDropDown";
import WalletDropDown from "./WalletDropDown";

const navigation = [
  { name: "Vesting", href: "#", icon: HomeIcon, current: true },
  { name: "Token Lock", href: "#", icon: UsersIcon, current: false },
  { name: "Airdrops", href: "#", icon: FolderIcon, current: false },
  { name: "Stalking", href: "#", icon: CalendarIcon, current: false },
  {
    name: "Mint Tokens",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Payment", href: "#", icon: ChartPieIcon, current: false },
  { name: "Project Dashboard", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className='relative z-50 lg:hidden'
        >
          <DialogBackdrop
            transition
            className='fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0'
          />

          <div className='fixed inset-0 flex'>
            <DialogPanel
              transition
              className='relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full'
            >
              <TransitionChild>
                <div className='absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0'>
                  <button
                    type='button'
                    onClick={() => setSidebarOpen(false)}
                    className='-m-2.5 p-2.5'
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <XMarkIcon
                      aria-hidden='true'
                      className='h-6 w-6 text-white'
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2'>
                <div className='flex h-16 shrink-0 items-center'></div>
                <nav className='flex flex-1 flex-col'>
                  <ul
                    role='list'
                    className='flex flex-1 flex-col gap-y-7'
                  >
                    <li>
                      <ul
                        role='list'
                        className='-mx-2 space-y-1'
                      >
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={clsx(
                                item.current
                                  ? "bg-gray-50 text-indigo-600"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                              )}
                            >
                              <item.icon
                                aria-hidden='true'
                                className={clsx(
                                  item.current
                                    ? "text-indigo-600"
                                    : "text-gray-400 group-hover:text-indigo-600",
                                  "h-6 w-6 shrink-0"
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className='text-xs font-semibold leading-6 text-gray-400'>
                        Your teams
                      </div>
                      <ul
                        role='list'
                        className='-mx-2 mt-2 space-y-1'
                      >
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={clsx(
                                team.current
                                  ? "bg-gray-50 text-indigo-600"
                                  : "text-gray-700  hover:text-indigo-600",
                                "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                              )}
                            >
                              <span
                                className={clsx(
                                  team.current
                                    ? "border-indigo-600 text-indigo-600"
                                    : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                                )}
                              >
                                {team.initial}
                              </span>
                              <span className='truncate'>{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg-white dark:bg-black'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-black overflow-hidden'>
            <div className='flex h-16 shrink-0 items-center border-b border-slate-800 px-6 text-black dark:text-white'>
              Streamflow
            </div>

            <nav className='flex flex-1 flex-col px-6 '>
              <ul
                role='list'
                className='flex flex-1 flex-col gap-y-7'
              >
                <li>
                  <ul
                    role='list'
                    className='-mx-2 space-y-1'
                  >
                    <li>{}</li>
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={clsx(
                            item.current
                              ? "text-indigo-600"
                              : "text-gray-700 cursor-pointer",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <item.icon
                            aria-hidden='true'
                            className={clsx(
                              item.current
                                ? "text-indigo-600"
                                : "text-gray-400 ",
                              "h-6 w-6 shrink-0"
                            )}
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className='text-xs font-semibold leading-6 text-gray-400'>
                    Your teams
                  </div>
                  <ul
                    role='list'
                    className='-mx-2 mt-2 space-y-1'
                  >
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={clsx(
                            team.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <span
                            className={clsx(
                              team.current
                                ? "border-indigo-600 text-indigo-600"
                                : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className='truncate'>{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className='-mx-6 mt-auto'>
                  <a
                    href='#'
                    className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50'
                  >
                    <span className='sr-only'>Your profile</span>
                    <span aria-hidden='true'>Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className='sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden'>
          <button
            type='button'
            onClick={() => setSidebarOpen(true)}
            className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
          >
            <span className='sr-only'>Open sidebar</span>
            <Bars3Icon
              aria-hidden='true'
              className='h-6 w-6'
            />
          </button>
          <div className='flex-1 text-sm font-semibold leading-6 text-gray-900'>
            Dashboard
          </div>
          <a href='#'>
            <span className='sr-only'>Your profile</span>
          </a>
        </div>

        <main className='lg:pl-72'>
          <div className='flex h-16 shrink-0 items-center border-b border-slate-800'>
            <div className='mx-4 flex place-content-between w-full'>
              <div className='text-black dark:text-white'>Page name</div>
              <div className='justify-center'>
                <Button
                  className='bg-[#1a1d2d] text-white p-2 rounded-md mr-2  justify-center'
                  onClick={toggleDarkMode}
                >
                  <MoonIcon className='size-6 justify-center mb-0' />
                </Button>
                <WalletDropDown />
                <MenuDropDown />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
