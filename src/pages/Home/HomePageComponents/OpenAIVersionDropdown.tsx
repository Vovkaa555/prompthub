import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useStore } from '../../../store/useStore';
import DropdownWrapper from '../../../components/dropdowns/DropdownWrapper';

const OpenAIVersionDropdown: React.FC = () => {
  const { openAIVersion, setOpenAIVersion } = useStore();
  const versions = ['gpt-3.5-turbo', 'gpt-4', 'gpt-4-32k']; // example versions

  return (
    <DropdownWrapper triggerLabel={openAIVersion}>
      {versions.map((version) => (
        <DropdownMenu.Item
          key={version}
          onSelect={() => setOpenAIVersion(version)}
          className="px-3 py-2 cursor-pointer hover:bg-gray-700 rounded-md text-white"
        >
          {version}
        </DropdownMenu.Item>
      ))}
    </DropdownWrapper>
  );
};

export default OpenAIVersionDropdown;
