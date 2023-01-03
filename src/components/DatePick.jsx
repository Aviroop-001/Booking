import React, { useState, useEffect, button, forwardRef, useRef } from "react";
import { Box, Text, Button, useDisclosure, Input } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePick() {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [startSelected, setstartSelected] = useState(false);
  const [endSelected, setendSelected] = useState(false);
  const [children, setchildren] = useState(0);
  const [adults, setadults] = useState(1);
  const [rooms, setrooms] = useState(1);

  const ExampleCustomInputStart = forwardRef(({ value, onClick }, ref) => (
    <button
      style={{
        width: "100%",
        backgroundColor: "white",
        height: "3rem",
        border: "1px solid blue",
      }}
      onClick={onClick}
      ref={ref}
    >
      {startSelected ? value : "Check-in"}
    </button>
  ));
  const ExampleCustomInputEnd = forwardRef(({ value, onClick }, ref) => (
    <button
      style={{
        width: "100%",
        backgroundColor: "white",
        height: "3rem",
        border: "1px solid blue",
      }}
      onClick={onClick}
      ref={ref}
    >
      {endSelected ? value : "Check-out"}
    </button>
  ));

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="50%"
        bg="wheat"
        height="3.5rem"
        display="flex"
        justifyContent="space-around"
      >
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setstartDate(date);
            setstartSelected(true);
          }}
          customInput={<ExampleCustomInputStart />}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => {
            setendDate(date);
            setendSelected(true);
          }}
          customInput={<ExampleCustomInputEnd />}
        />
        <Popover>
          <PopoverTrigger>
            <Button
              width="200%"
              height="3rem"
              margin="0"
              borderRadius="0"
            >
              {adults} Adults, {children} Child, {rooms} Rooms
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Select Guests</PopoverHeader>
            <PopoverBody>
              <Box>
                Adult
                <NumberInput defaultValue={1} min={1} max={10}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper onClick={() => setadults(adults+1)} />
                    <NumberDecrementStepper onClick={() => setadults(adults-1)}/>
                  </NumberInputStepper>
                </NumberInput>
              </Box>
              <Box>
                Children
                <NumberInput defaultValue={0} min={0} max={7}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper onClick={() => setchildren(children+1)}/>
                    <NumberDecrementStepper onClick={() => setchildren(children-1)}/>
                  </NumberInputStepper>
                </NumberInput>
              </Box>
              <Box>
                Rooms
                <NumberInput defaultValue={1} min={1} max={10}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper onClick={() => setrooms(rooms+1)}/>
                    <NumberDecrementStepper onClick={() => setrooms(rooms-1)}/>
                  </NumberInputStepper>
                </NumberInput>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      <Button height="3rem" marginLeft="2rem" backgroundColor="yellow">
        Check Availability
      </Button>
    </Box>
  );
}

export default DatePick;
