import React, { useEffect, useRef, useState } from "react";
import {
  Flex,
  Box,
  Text,
  Icon,
  Image,
  IconButton,
  Collapse,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineDollarCircle,
  AiOutlineSwap,
  AiOutlineHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import logo from "../images/fox.jpg";
import "../../src/App.css";
import { useNavigate } from "react-router-dom";
import AuthModal from "../Authentication/AuthModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const menuRef = useRef(null);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToCrypto = () => {
    navigate("/cryptocurrency");
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToExchanges = () => {
    navigate("/exchange");
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToWishlist = () => {
    navigate("/wishlist");
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate("/login");
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Flex
      ref={menuRef}
      direction="column"
      align="center"
      bg="black"
      w={{ base: "100%", md: "300px" }}
      p="2"
      h={{ base: "auto", md: "100vh" }}
      color="white"
      alignItems="left"
      justify="space-between"
      position="fixed"
      zIndex={1}
    >
      <Flex
        direction={{ base: "row", md: "column" }}
        alignItems="center"
        mb="2"
      >
        <Image
          src={logo}
          alt="Crypto"
          boxSize="70px"
          mr={{ base: 2, md: 0 }}
          mb={{ base: 0, md: 2 }}
        />
        <Text
          fontSize={{ base: "4xl", md: "4xl" }}
          fontWeight="bold"
          mt={{ base: 2, md: 0 }}
          // fontFamily="monospace"
          textAlign={{ base: "center", md: "left" }}
          fontFamily="Akronim, system-ui"
        >
          Fox Fortune
        </Text>
        {isMobile && (
          <IconButton
            icon={<AiOutlineMenu />}
            display={{ base: "flex", md: "none" }}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            ml="auto"
            colorScheme="whiteAlpha"
            borderRadius="full"
            bg="blue.500"
            _hover={{ bg: "blue.600" }}
            _focus={{ outline: "none" }}
            size="md"
          />
        )}
      </Flex>

      {isMobile && (
        <Collapse in={isMenuOpen} animateOpacity>
          <Box>
            <Box
              cursor="pointer"
              onClick={navigateToHome}
              color="white"
              mb="5"
              display="flex"
              alignItems="center"
              fontSize={{ base: "md", md: "lg" }}
              _hover={{
                color: "blue.500",
              }}
            >
              <Icon as={AiOutlineHome} boxSize="6" mr="2" />
              Home
            </Box>
            <Box
              cursor="pointer"
              onClick={navigateToCrypto}
              color="white"
              mb="5"
              display="flex"
              alignItems="center"
              fontSize={{ base: "md", md: "lg" }}
              _hover={{
                color: "blue.500",
              }}
            >
              <Icon as={AiOutlineDollarCircle} boxSize="6" mr="2" />
              Cryptocurrencies
            </Box>
            <Box
              cursor="pointer"
              onClick={navigateToExchanges}
              color="white"
              mb="5"
              display="flex"
              alignItems="center"
              fontSize={{ base: "md", md: "lg" }}
              _hover={{
                color: "blue.500",
              }}
            >
              <Icon as={AiOutlineSwap} boxSize="6" mr="2" />
              Exchange
            </Box>
            <Box
              cursor="pointer"
              onClick={navigateToWishlist}
              color="white"
              mb="5"
              display="flex"
              alignItems="center"
              fontSize={{ base: "md", md: "lg" }}
              _hover={{
                color: "blue.500",
              }}
            >
              <Icon as={AiOutlineHeart} boxSize="6" mr="2" />
              Wishlist
            </Box>
            <Flex mt="auto" justify="center">
              <Box
                cursor="pointer"
                color="white"
                fontSize={{ base: "md", md: "lg" }}
                _hover={{
                  color: "blue.500",
                }}
              >
                <AuthModal
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
              </Box>
            </Flex>
          </Box>
        </Collapse>
      )}

      {!isMobile && (
        <Collapse in={true} animateOpacity>
          <Box>
            <Box
              onClick={navigateToHome}
              cursor="pointer"
              color="white"
              mb="5"
              display="flex"
              alignItems="center"
              fontSize={{ base: "md", md: "lg" }}
              _hover={{
                color: "orange.500",
              }}
            >
              <Icon as={AiOutlineHome} boxSize="6" mr="2" />
              Home
            </Box>
            <Box
              cursor="pointer"
              onClick={navigateToCrypto}
              color="white"
              mb="5"
              display="flex"
              alignItems="center"
              fontSize={{ base: "md", md: "lg" }}
              _hover={{
                color: "orange.500",
              }}
            >
              <Icon as={AiOutlineDollarCircle} boxSize="6" mr="2" />
              Cryptocurrencies
            </Box>
            <Box
              cursor="pointer"
              onClick={navigateToExchanges}
              color="white"
              mb="5"
              display="flex"
              alignItems="center"
              fontSize={{ base: "md", md: "lg" }}
              _hover={{
                color: "orange.500",
              }}
            >
              <Icon as={AiOutlineSwap} boxSize="6" mr="2" />
              Exchange
            </Box>
            <Box
              cursor="pointer"
              onClick={navigateToWishlist}
              color="white"
              mb="5"
              display="flex"
              alignItems="center"
              fontSize={{ base: "md", md: "lg" }}
              _hover={{
                color: "orange.500",
              }}
            >
              <Icon as={AiOutlineHeart} boxSize="6" mr="2" />
              Wishlist
            </Box>
          </Box>
        </Collapse>
      )}

      {!isMobile && (
        <Flex mt="auto" justify="center">
          <Box
            cursor="pointer"
            color="white"
            fontSize={{ base: "md", md: "lg" }}
            _hover={{
              color: "orange.500",
            }}
          >
            <AuthModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Box>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
