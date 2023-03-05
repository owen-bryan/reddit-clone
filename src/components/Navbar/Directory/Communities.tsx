import CreateCommunityModal from "@/components/Modal/CreateCommunity/CreateCommunityModal";
import { Flex, MenuItem } from "@chakra-ui/react";
import React from "react";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  return (
    <>
      <CreateCommunityModal />
      <MenuItem>
        <Flex>
            Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
