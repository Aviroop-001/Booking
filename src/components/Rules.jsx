import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function Rules() {
  return (
    <Box width='100vw' borderTop='1px solid grey' margin="2rem 4rem">
      <Box>
        <Box>
          <Text fontSize='1.4rem' fontWeight='bold'>Property Rules</Text>
          <Text fontWeight='bold'>Check-in: 10AM, Check-out: 12AM</Text>
        </Box>
        <Box>
          <UnorderedList
            display="flex"
            flexWrap='wrap'
            justifyContent="space-evenly"
          >
            <ListItem width='40%'>&#9830;Lorem ipsum dolor sit amet.</ListItem>
            <ListItem width='40%'>&#9830;Lorem ipsum dolor sit, amet consectetur adipisicing.</ListItem>
            <ListItem width='40%'>&#9830;Lorem, ipsum dolor.</ListItem>
            <ListItem width='40%'>&#9830;Lorem ipsum dolor sit amet.</ListItem>
            <ListItem width='40%'>&#9830;Lorem ipsum dolor sit amet.</ListItem>
            <ListItem width='40%'>&#9830;Lorem ipsum dolor sit, amet consectetur adipisicing.</ListItem>
            <ListItem width='40%'>&#9830;Lorem, ipsum dolor.</ListItem>
            <ListItem width='40%'>&#9830;Lorem ipsum dolor sit amet.</ListItem>
            <ListItem width='40%'>&#9830;Lorem ipsum dolor sit amet.</ListItem>
            <ListItem width='40%'>&#9830;Lorem ipsum dolor sit, amet consectetur adipisicing.</ListItem>
            <ListItem width='40%'>&#9830;Lorem, ipsum dolor.</ListItem>
            <ListItem width='40%'>&#9830;Lorem ipsum dolor sit amet.</ListItem>
            <ListItem width='40%'>&#9830;Lorem ipsum dolor sit amet.</ListItem>
            <ListItem width='40%'>&#9830;Lorem ipsum dolor sit, amet consectetur adipisicing.</ListItem>
            <ListItem width='40%'>&#9830;Lorem, ipsum dolor.</ListItem>
            <ListItem width='40%'>&#9830;Lorem ipsum dolor sit amet.</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}

export default Rules;
