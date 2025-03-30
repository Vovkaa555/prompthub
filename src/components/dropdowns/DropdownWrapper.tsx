// components/DropdownWrapper.tsx
import { DropdownMenu } from 'radix-ui';
import React from 'react';

interface DropdownWrapperProps {
  triggerLabel: string;
  children: React.ReactNode;
}

const DropdownWrapper: React.FC<DropdownWrapperProps> = ({
  triggerLabel,
  children,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="px-4 py-2 bg-gray-700 text-white rounded-md">
          {triggerLabel}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="min-w-[150px] bg-gray-800 rounded-md p-2 shadow-lg shadow-gray-900/100">
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DropdownWrapper;
