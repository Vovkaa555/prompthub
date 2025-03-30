// components/ContentDropdown.tsx
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Tooltip from '@radix-ui/react-tooltip';
import DropdownWrapper from '../../../components/dropdowns/DropdownWrapper';
import { useStore } from '../../../store/useStore';

const ContentDropdown: React.FC = () => {
  const { selectedContent, setSelectedContent, contentDescriptions } =
    useStore();

  const handleContentSelect = (content: string) => {
    setSelectedContent(content); // Set the selected content
  };

  return (
    <DropdownWrapper triggerLabel={selectedContent || 'Select Content'}>
      {Object.keys(contentDescriptions).map((contentKey) => (
        <DropdownMenu.Item
          key={contentKey}
          onSelect={() => handleContentSelect(contentKey)}
          className="px-3 py-2 cursor-pointer hover:bg-gray-700 rounded-md text-white"
        >
          <div className="flex items-center justify-between">
            <span>{contentKey}</span> {/* Show the key as the label */}
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <span
                    className="ml-2 inline-block text-white rounded-full border-2 border-orange-500 p-1 cursor-pointer"
                    style={{
                      fontSize: '16px',
                      width: '20px',
                      height: '20px',
                      textAlign: 'center',
                      lineHeight: '7px',
                    }}
                  >
                    ?
                  </span>
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="top"
                  align="center"
                  className="bg-black text-white p-2 rounded-md shadow-lg"
                >
                  {contentDescriptions[contentKey]}
                  <Tooltip.Arrow className="fill-black" />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </DropdownMenu.Item>
      ))}
    </DropdownWrapper>
  );
};

export default ContentDropdown;
