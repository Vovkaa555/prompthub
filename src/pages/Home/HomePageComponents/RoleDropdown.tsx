// components/RoleDropdown.tsx
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import DropdownWrapper from '../../../components/dropdowns/DropdownWrapper';
import { useStore, Role } from '../../../store/useStore';

const RoleDropdown: React.FC = () => {
  const { selectedRole, setSelectedRole } = useStore();
  const roles: Role[] = [
    'user',
    'system',
    'assistant',
    'developer',
    'tool',
    'function',
  ];

  return (
    <DropdownWrapper triggerLabel={selectedRole}>
      {roles.map((role) => (
        <DropdownMenu.Item
          key={role}
          onSelect={() => setSelectedRole(role)}
          className="px-3 py-2 cursor-pointer hover:bg-gray-700 rounded-md text-white"
        >
          {role}
        </DropdownMenu.Item>
      ))}
    </DropdownWrapper>
  );
};

export default RoleDropdown;
