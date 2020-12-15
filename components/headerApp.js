import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Label, FixedPanel, ContainerApp, Content } from "../styles/styles";
import {
  Input,
  Button,
  IconButton,
  Divider,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Icon,
  Text,
} from "@chakra-ui/react";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineTags,
  AiOutlineInfoCircle,
  AiOutlineExpandAlt,
  AiOutlineLogin,
  AiOutlineSave,
} from "react-icons/ai";
import { BsBag, BsBagFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

import configs from "../configs/configs";

export default function Home() {
  const router = useRouter();

  const [display, setDisplay] = useState(0);
  const [position, setPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (position < 132) {
      setDisplay(0);
    } else {
      setDisplay(1);
    }
  }, [position]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosition(window.scrollY);
    });
  }, []);

  return (
    <ContainerApp>
      <Head>
        <title>Dolce Encanto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/** PAINEL FIXO */}

      <FixedPanel display={display} bg={configs.template.index.fixedPanel.bg}>
        <Grid
          templateColumns={[
            "50px 1fr",
            "50px 1fr",
            "200px 1fr",
            "200px 1fr",
            "200px 1fr",
          ]}
          gap={20}
          h="50px"
          w={"100%"}
          pl={10}
          pr={10}
          alignItems="center"
        >
          <Flex align="center">
            <Box w="45px" h="45px" mr={5}>
              <Image
                src="/img/icon-black.png"
                width={45}
                height={45}
                quality={100}
                layout="fixed"
                objectFit="fill"
                objectPosition="50% 50%"
              />
            </Box>
            <Box
              w="130px"
              h="30px"
              display={["none", "none", "block", "block", "block"]}
            >
              <Image
                src="/img/name-slug.png"
                width={130}
                height={30}
                quality={100}
                layout="fixed"
              />
            </Box>
          </Flex>
          <Flex justify="flex-end">
            <Flex display={["none", "none", "none", "none", "flex"]}>
              <Link href="/" passHref>
                <a>
                  <Button
                    size="lg"
                    borderRadius="sm"
                    variant="ghost"
                    colorScheme="yellow"
                    _focus={{
                      boxShadow: "none",
                      outline: "none",
                    }}
                    color="gray.900"
                    _hover={{
                      bg: configs.template.index.fixedPanel.color,
                      color: configs.template.index.fixedPanel.bg,
                    }}
                    _active={{
                      bg: configs.template.index.fixedPanel.active.bg,
                      color: configs.template.index.fixedPanel.active.color,
                    }}
                    fontSize="sm"
                    onClick={() => {}}
                    leftIcon={<AiOutlineHome />}
                    mr={1}
                  >
                    Início
                  </Button>
                </a>
              </Link>
              <Button
                leftIcon={<AiOutlineTags />}
                size="lg"
                borderRadius="sm"
                variant="ghost"
                colorScheme="yellow"
                _focus={{
                  boxShadow: "none",
                  outline: "none",
                }}
                color="gray.900"
                _hover={{
                  bg: configs.template.index.fixedPanel.color,
                  color: configs.template.index.fixedPanel.bg,
                }}
                _active={{
                  bg: configs.template.index.fixedPanel.active.bg,
                  color: configs.template.index.fixedPanel.active.color,
                }}
                fontSize="sm"
                onClick={() => {}}
                rightIcon={<AiOutlineExpandAlt />}
                mr={1}
              >
                Produtos
              </Button>
              <Link href="/" passHref>
                <a>
                  <Button
                    leftIcon={<AiOutlineInfoCircle />}
                    size="lg"
                    borderRadius="sm"
                    variant="ghost"
                    colorScheme="yellow"
                    _focus={{
                      boxShadow: "none",
                      outline: "none",
                    }}
                    color="gray.900"
                    _hover={{
                      bg: configs.template.index.fixedPanel.color,
                      color: configs.template.index.fixedPanel.bg,
                    }}
                    _active={{
                      bg: configs.template.index.fixedPanel.active.bg,
                      color: configs.template.index.fixedPanel.active.color,
                    }}
                    fontSize="sm"
                    onClick={() => {}}
                    mr={1}
                  >
                    Sobre Nós
                  </Button>
                </a>
              </Link>
              <Link href="/" passHref>
                <a>
                  <Button
                    leftIcon={<FiMapPin />}
                    size="lg"
                    borderRadius="sm"
                    variant="ghost"
                    colorScheme="yellow"
                    _focus={{
                      boxShadow: "none",
                      outline: "none",
                    }}
                    color="gray.900"
                    _hover={{
                      bg: configs.template.index.fixedPanel.color,
                      color: configs.template.index.fixedPanel.bg,
                    }}
                    _active={{
                      bg: configs.template.index.fixedPanel.active.bg,
                      color: configs.template.index.fixedPanel.active.color,
                    }}
                    fontSize="sm"
                    onClick={() => {}}
                    mr={2}
                  >
                    Onde Estamos
                  </Button>
                </a>
              </Link>
              <Menu>
                <MenuButton
                  as={Button}
                  fontSize={30}
                  variant="link"
                  _focus={{ outline: "none" }}
                  color={configs.template.index.fixedPanel.color}
                >
                  <AiOutlineUser />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Icon as={AiOutlineLogin} mr={5} /> Login
                  </MenuItem>
                  <MenuItem>
                    <Icon as={AiOutlineSave} mr={5} /> Cadastre-se
                  </MenuItem>
                </MenuList>
              </Menu>
              <Divider
                orientation="vertical"
                borderColor={configs.template.index.fixedPanel.bg}
                mr={1}
                ml={1}
              />
              <Menu>
                <MenuButton
                  as={Button}
                  fontSize={30}
                  variant="link"
                  _focus={{ outline: "none" }}
                  color={configs.template.index.fixedPanel.color}
                >
                  <AiOutlineHeart />
                </MenuButton>
                <MenuList w="350px">
                  <MenuItem>
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="50%"
                      overflow="hidden"
                      mr={5}
                    >
                      <Image
                        src={
                          "https://www.portotheme.com/magento2/porto/pub/media/catalog/product/cache/5ca921a7315f0241599b65aff8770523/p/r/product-18-grey_2.jpg"
                        }
                        width={65}
                        height={65}
                        layout="intrinsic"
                      />
                    </Box>{" "}
                    <Box>
                      <Text
                        noOfLines={1}
                        maxW="250px"
                        fontSize="md"
                        fontWeight="700"
                      >
                        Men Glasses Men GlassesMen GlassesMen GlassesMen
                        GlassesMen GlassesMen GlassesMen GlassesMen GlassesMen
                        Glasses
                      </Text>
                      <Text noOfLines={1} maxW="250px" fontSize="sm">
                        R$ 250,00
                      </Text>
                    </Box>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link href="/listadedesejos" passHref>
                      <a style={{ width: "100%" }}>
                        <Button isFullWidth variant="link" fontSize="sm">
                          Ver minha lista de desejo
                        </Button>
                      </a>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>

              <Label right={"88px"}>2</Label>
              <Divider
                orientation="vertical"
                borderColor={configs.template.index.fixedPanel.bg}
                mr={1}
                ml={1}
              />
              <Menu>
                <MenuButton
                  as={Button}
                  fontSize={28}
                  variant="link"
                  _focus={{ outline: "none" }}
                  color={configs.template.index.fixedPanel.color}
                >
                  <BsBag />
                </MenuButton>
                <MenuList w="350px">
                  <MenuItem>
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="50%"
                      overflow="hidden"
                      mr={5}
                    >
                      <Image
                        src={
                          "https://www.portotheme.com/magento2/porto/pub/media/catalog/product/cache/5ca921a7315f0241599b65aff8770523/p/r/product-18-grey_2.jpg"
                        }
                        width={65}
                        height={65}
                        layout="intrinsic"
                      />
                    </Box>{" "}
                    <Box>
                      <Text
                        noOfLines={1}
                        maxW="250px"
                        fontSize="md"
                        fontWeight="700"
                      >
                        Men Glasses Men GlassesMen GlassesMen GlassesMen
                        GlassesMen GlassesMen GlassesMen GlassesMen GlassesMen
                        Glasses
                      </Text>
                      <Text noOfLines={1} maxW="250px" fontSize="sm">
                        R$ 250,00
                      </Text>
                    </Box>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link href="/carrinho" passHref>
                      <a style={{ width: "100%" }}>
                        <Button isFullWidth variant="link" fontSize="sm">
                          Ir para o carrinho
                        </Button>
                      </a>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>

              <Label right={"40px"}>1</Label>
            </Flex>
            <Flex display={["none", "none", "flex", "flex", "none"]}>
              <IconButton
                variant="link"
                color={configs.template.index.fixedPanel.color}
                icon={<AiOutlineUser />}
                size="md"
                fontSize={30}
              />
              <Divider
                orientation="vertical"
                borderColor={configs.template.index.fixedPanel.bg}
                mr={1}
                ml={1}
              />
              <IconButton
                variant="link"
                color={configs.template.index.fixedPanel.color}
                icon={<AiOutlineHeart />}
                size="md"
                fontSize={30}
              />
              <Label right={"170px"}>2</Label>
              <Divider
                orientation="vertical"
                borderColor={configs.template.index.fixedPanel.bg}
                mr={1}
                ml={1}
              />
              <IconButton
                variant="link"
                icon={<BsBag />}
                size="md"
                fontSize={30}
                color={configs.template.index.fixedPanel.color}
              />
              <Label right={"120px"}>1</Label>
              <IconButton
                variant="solid"
                icon={<AiOutlineMenu />}
                size="md"
                fontSize={30}
                colorScheme={configs.template.index.fixedPanel.hamburgerMenu}
                onClick={() => setMenuOpen(!menuOpen)}
                ml={10}
              />
            </Flex>
            <Flex display={["flex", "flex", "none", "none", "none"]}>
              <IconButton
                variant="link"
                icon={<BsBag />}
                size="md"
                fontSize={30}
                color={configs.template.index.fixedPanel.color}
              />
              <Label right={"120px"}>1</Label>
              <IconButton
                variant="solid"
                icon={<AiOutlineMenu />}
                size="md"
                fontSize={30}
                colorScheme={configs.template.index.fixedPanel.hamburgerMenu}
                onClick={() => setMenuOpen(!menuOpen)}
                ml={10}
              />
            </Flex>
          </Flex>
        </Grid>
      </FixedPanel>

      {/** MENU PRINCIPAL */}

      <Grid
        templateColumns={[
          "50px 1fr",
          "50px 1fr",
          "200px 1fr",
          "200px 1fr",
          "200px 1fr",
        ]}
        gap={20}
        h="60px"
        bg={configs.template.index.fixedPanel.bg}
        w={"100%"}
        pl={10}
        pr={10}
        alignItems="center"
      >
        <Flex align="center">
          <Box w="50px" h="50px" mr={5}>
            <Image
              src="/img/icon-black.png"
              width={50}
              height={50}
              quality={100}
              layout="fixed"
            />
          </Box>
          <Box
            w="130px"
            h="30px"
            display={["none", "none", "block", "block", "block"]}
          >
            <Image
              src="/img/name-slug.png"
              width={130}
              height={30}
              quality={100}
              layout="fixed"
            />
          </Box>
        </Flex>
        <Flex justify="flex-end">
          <Flex display={["none", "none", "none", "none", "flex"]}>
            <Link href="/" passHref>
              <a>
                <Button
                  size="lg"
                  borderRadius="sm"
                  variant="ghost"
                  colorScheme="yellow"
                  _focus={{
                    boxShadow: "none",
                    outline: "none",
                  }}
                  color="gray.900"
                  _hover={{
                    bg: configs.template.index.fixedPanel.color,
                    color: configs.template.index.fixedPanel.bg,
                  }}
                  _active={{
                    bg: configs.template.index.fixedPanel.active.bg,
                    color: configs.template.index.fixedPanel.active.color,
                  }}
                  fontSize="sm"
                  onClick={() => {}}
                  leftIcon={<AiOutlineHome />}
                  mr={1}
                >
                  Início
                </Button>
              </a>
            </Link>
            <Button
              leftIcon={<AiOutlineTags />}
              size="lg"
              borderRadius="sm"
              variant="ghost"
              colorScheme="yellow"
              _focus={{
                boxShadow: "none",
                outline: "none",
              }}
              color="gray.900"
              _hover={{
                bg: configs.template.index.fixedPanel.color,
                color: configs.template.index.fixedPanel.bg,
              }}
              _active={{
                bg: configs.template.index.fixedPanel.active.bg,
                color: configs.template.index.fixedPanel.active.color,
              }}
              fontSize="sm"
              onClick={() => {}}
              rightIcon={<AiOutlineExpandAlt />}
              mr={1}
            >
              Produtos
            </Button>
            <Link href="/" passHref>
              <a>
                <Button
                  leftIcon={<AiOutlineInfoCircle />}
                  size="lg"
                  borderRadius="sm"
                  variant="ghost"
                  colorScheme="yellow"
                  _focus={{
                    boxShadow: "none",
                    outline: "none",
                  }}
                  color="gray.900"
                  _hover={{
                    bg: configs.template.index.fixedPanel.color,
                    color: configs.template.index.fixedPanel.bg,
                  }}
                  _active={{
                    bg: configs.template.index.fixedPanel.active.bg,
                    color: configs.template.index.fixedPanel.active.color,
                  }}
                  fontSize="sm"
                  onClick={() => {}}
                  mr={1}
                >
                  Sobre Nós
                </Button>
              </a>
            </Link>
            <Link href="/" passHref>
              <a>
                <Button
                  leftIcon={<FiMapPin />}
                  size="lg"
                  borderRadius="sm"
                  variant="ghost"
                  colorScheme="yellow"
                  _focus={{
                    boxShadow: "none",
                    outline: "none",
                  }}
                  color="gray.900"
                  _hover={{
                    bg: configs.template.index.fixedPanel.color,
                    color: configs.template.index.fixedPanel.bg,
                  }}
                  _active={{
                    bg: configs.template.index.fixedPanel.active.bg,
                    color: configs.template.index.fixedPanel.active.color,
                  }}
                  fontSize="sm"
                  onClick={() => {}}
                  mr={2}
                >
                  Onde Estamos
                </Button>
              </a>
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                fontSize={30}
                variant="link"
                _focus={{ outline: "none" }}
                color={configs.template.index.fixedPanel.color}
              >
                <AiOutlineUser />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Icon as={AiOutlineLogin} mr={5} /> Login
                </MenuItem>
                <MenuItem>
                  <Icon as={AiOutlineSave} mr={5} /> Cadastre-se
                </MenuItem>
              </MenuList>
            </Menu>
            <Divider
              orientation="vertical"
              borderColor={configs.template.index.fixedPanel.bg}
              mr={1}
              ml={1}
            />
            <Menu>
              <MenuButton
                as={Button}
                fontSize={30}
                variant="link"
                _focus={{ outline: "none" }}
                color={configs.template.index.fixedPanel.color}
              >
                <AiOutlineHeart />
              </MenuButton>
              <MenuList w="350px">
                <MenuItem>
                  <Box
                    w="40px"
                    h="40px"
                    borderRadius="50%"
                    overflow="hidden"
                    mr={5}
                  >
                    <Image
                      src={
                        "https://www.portotheme.com/magento2/porto/pub/media/catalog/product/cache/5ca921a7315f0241599b65aff8770523/p/r/product-18-grey_2.jpg"
                      }
                      width={65}
                      height={65}
                      layout="intrinsic"
                    />
                  </Box>{" "}
                  <Box>
                    <Text
                      noOfLines={1}
                      maxW="250px"
                      fontSize="md"
                      fontWeight="700"
                    >
                      Men Glasses Men GlassesMen GlassesMen GlassesMen
                      GlassesMen GlassesMen GlassesMen GlassesMen GlassesMen
                      Glasses
                    </Text>
                    <Text noOfLines={1} maxW="250px" fontSize="sm">
                      R$ 250,00
                    </Text>
                  </Box>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Link passHref href="/listadedesejos">
                    <a style={{ width: "100%" }}>
                      <Button isFullWidth variant="link" fontSize="sm">
                        Ver minha lista de desejo
                      </Button>
                    </a>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>

            <Label right={"88px"}>2</Label>
            <Divider
              orientation="vertical"
              borderColor={configs.template.index.fixedPanel.bg}
              mr={1}
              ml={1}
            />
            <Menu>
              <MenuButton
                as={Button}
                fontSize={28}
                variant="link"
                _focus={{ outline: "none" }}
                color={configs.template.index.fixedPanel.color}
              >
                <BsBag />
              </MenuButton>
              <MenuList w="350px">
                <MenuItem>
                  <Box
                    w="40px"
                    h="40px"
                    borderRadius="50%"
                    overflow="hidden"
                    mr={5}
                  >
                    <Image
                      src={
                        "https://www.portotheme.com/magento2/porto/pub/media/catalog/product/cache/5ca921a7315f0241599b65aff8770523/p/r/product-18-grey_2.jpg"
                      }
                      width={65}
                      height={65}
                      layout="intrinsic"
                    />
                  </Box>{" "}
                  <Box>
                    <Text
                      noOfLines={1}
                      maxW="250px"
                      fontSize="md"
                      fontWeight="700"
                    >
                      Men Glasses Men GlassesMen GlassesMen GlassesMen
                      GlassesMen GlassesMen GlassesMen GlassesMen GlassesMen
                      Glasses
                    </Text>
                    <Text noOfLines={1} maxW="250px" fontSize="sm">
                      R$ 250,00
                    </Text>
                  </Box>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Link href="/carrinho" passHref>
                    <a style={{ width: "100%" }}>
                      <Button isFullWidth variant="link" fontSize="sm">
                        Ir para o carrinho
                      </Button>
                    </a>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>

            <Label right={"40px"}>1</Label>
          </Flex>
          <Flex display={["none", "none", "flex", "flex", "none"]}>
            <IconButton
              variant="link"
              color={configs.template.index.fixedPanel.color}
              icon={<AiOutlineUser />}
              size="md"
              fontSize={30}
            />
            <Divider
              orientation="vertical"
              borderColor={configs.template.index.fixedPanel.bg}
              mr={1}
              ml={1}
            />
            <IconButton
              variant="link"
              color={configs.template.index.fixedPanel.color}
              icon={<AiOutlineHeart />}
              size="md"
              fontSize={30}
            />
            <Label right={"170px"}>2</Label>
            <Divider
              orientation="vertical"
              borderColor={configs.template.index.fixedPanel.bg}
              mr={1}
              ml={1}
            />
            <IconButton
              variant="link"
              icon={<BsBag />}
              size="md"
              fontSize={30}
              color={configs.template.index.fixedPanel.color}
            />
            <Label right={"120px"}>1</Label>
            <IconButton
              variant="solid"
              icon={<AiOutlineMenu />}
              size="md"
              fontSize={30}
              colorScheme={configs.template.index.fixedPanel.hamburgerMenu}
              onClick={() => setMenuOpen(!menuOpen)}
              ml={10}
            />
          </Flex>
          <Flex display={["flex", "flex", "none", "none", "none"]}>
            <IconButton
              variant="link"
              icon={<BsBag />}
              size="md"
              fontSize={30}
              color={configs.template.index.fixedPanel.color}
            />
            <Label right={"120px"}>1</Label>
            <IconButton
              variant="solid"
              icon={<AiOutlineMenu />}
              size="md"
              fontSize={30}
              colorScheme={configs.template.index.fixedPanel.hamburgerMenu}
              onClick={() => setMenuOpen(!menuOpen)}
              ml={10}
            />
          </Flex>
        </Flex>
      </Grid>

      <Box w="100%">
        <Image
          src="https://sacada.vteximg.com.br/arquivos/ids/169680/Sacada-Roupas-Femininas-fullbanner_int-RealLife.jpg?v=636503257764370000"
          width={1085}
          height={373}
          layout="responsive"
          alt="Banner Dolce Encanto"
        />
      </Box>

      <Drawer
        isOpen={menuOpen}
        placement="left"
        onClose={() => setMenuOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg={configs.template.index.drawer.header}>
            <Flex justify="flex-start" align="center" mb={"-5px"} mt={"-5px"}>
              <Image
                src="/img/icon-black.png"
                width={"30px"}
                height={"30px"}
                quality={100}
              />
              <div style={{ width: 20 }} />
              <Image
                src="/img/name-slug.png"
                width={"120px"}
                height={"20px"}
                quality={100}
              />
            </Flex>
          </DrawerHeader>

          <DrawerBody overflow="auto">
            <Input placeholder="Type here..." />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </ContainerApp>
  );
}
