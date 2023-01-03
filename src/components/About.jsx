import React from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function About() {
  const images = [
    "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1541971875076-8f970d573be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  ];
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        padding="3rem"
      >
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          height="20rem"
          width="40%"
          borderRadius="1rem"
          marginLeft="10%"
        ></Image>
        <Box
          maxWidth="40%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          marginRight="10%"
        >
          {images.map((i) => (
            <Image
              src={i}
              height="9.5rem"
              width="43%"
              marginLeft="1rem"
              marginTop="5px"
              borderRadius="1rem"
            ></Image>
          ))}
        </Box>
      </Box>
      <Box marginLeft="4rem" marginRight="4rem">
        <Box display='flex' justifyContent='space-between'>
          <Box>
            <Text fontSize="1.3rem" fontWeight="bold">
              Hotel Vishal @Airport
            </Text>
            <Text>
              104/2/2 New Highway, MaheshPlace, New Delhi, 110037, Delhi, India. <Link color='blue'>see in map</Link>
            </Text>
            <Text fontWeight="bold">+91-0987654321, 033-1212 3434</Text>
            <br/>
            <UnorderedList
              display="flex"
              justifyContent="space-evenly"
            >
              <ListItem>&#9830;Free Parking</ListItem>
              <ListItem>&#9830;Conference Room</ListItem>
              <ListItem>&#9830;ATM</ListItem>
              <ListItem>&#9830;Gym</ListItem>
            </UnorderedList>
          </Box>
          <Box>
          <iframe width="300" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Delhi&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </Box>
        </Box>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non
          necessitatibus iste? Tempore voluptatum officia nobis minus at unde,
          voluptate aperiam totam officiis placeat fugit odio suscipit
          repellendus vel voluptatem, ia nobis minus at unde, voluptate aperiam
          totam officiis placeat fugit odio suscipit repellendus vel
          volupexpedita molestiae! Nisi, omnis.
        </Box>
      </Box>
    </Box>
  );
}

export default About;
