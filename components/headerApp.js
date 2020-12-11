import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  HeaderApp,
  Container,
  Content,
  CenterLayourt,
  ContainerMenu,
  MenuApp,
  MenuItens,
  MenuLogo,
  ContainerLogo,
  Label,
  FixedPanel,
  LogoContainerPanel,
  MenuItensPanel,
  GridFixedPanel,
  LabelThree,
  LabelTwo,
} from "../styles/styles";
import {
  Icon,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  IconButton,
  Divider,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BsBag, BsBagFill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";

import configs from "../configs/configs";
import { FaSearch } from "react-icons/fa";

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

  function routing(event, href) {
    event.preventDefault();
    router.push(href);
  }

  return (
    <CenterLayourt>
      <Head>
        <title>Dolce Encanto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <FixedPanel display={display} bg={configs.template.index.fixedPanel.bg}>
        <GridFixedPanel>
          <LogoContainerPanel>
            <LogoContainerPanel>
              <Image
                src="/img/icon-black.png"
                width={50}
                height={50}
                quality={100}
              />
              <div style={{ width: 20 }} />
              <Image
                src="/img/name-slug.png"
                width={130}
                height={30}
                quality={100}
              />
            </LogoContainerPanel>
            <LogoContainerPanel style={{ marginLeft: 20 }}>
              <MenuApp>
                <MenuItensPanel
                  color={configs.template.index.fixedPanel.color}
                  onClick={(e) => routing(e, "/")}
                >
                  INÍCIO
                </MenuItensPanel>
                <MenuItensPanel color={configs.template.index.fixedPanel.color}>
                  CATEGORIAS <Icon as={RiArrowDownSLine} />
                </MenuItensPanel>
                <MenuItensPanel color={configs.template.index.fixedPanel.color}>
                  PRODUTOS <Icon as={RiArrowDownSLine} />
                </MenuItensPanel>
                <MenuItensPanel color={configs.template.index.fixedPanel.color}>
                  SOBRE NÓS
                </MenuItensPanel>
              </MenuApp>
            </LogoContainerPanel>
          </LogoContainerPanel>
          <Flex display={["none", "none", "flex", "flex", "flex", "flex"]}>
            <IconButton
              variant="link"
              color={configs.template.index.fixedPanel.color}
              icon={<AiOutlineHeart />}
              size="md"
              fontSize={35}
              mr={4}
            />
            <LabelTwo>2</LabelTwo>
            <IconButton
              variant="link"
              icon={<BsBag />}
              size="md"
              fontSize={30}
              color={configs.template.index.fixedPanel.color}
            />
            <LabelThree>3</LabelThree>
          </Flex>
        </GridFixedPanel>
      </FixedPanel>
      <HeaderApp>
        <ContainerMenu>
          <div>
            <Heading
              size="xs"
              color={configs.template.index.panel.color}
              display={["none", "none", "none", "none", "block", "block"]}
            >
              Tudo o que você precisa, aqui tem!
            </Heading>
            <Flex display={["flex", "flex", "flex", "flex", "none", "none"]}>
              <Flex w={"50%"} justify="flex-start" align="center">
                <Image
                  src="/img/icon-black.png"
                  width={"43px"}
                  height={"43px"}
                  quality={100}
                />
                <div style={{ width: 20 }} />
                <Image
                  src="/img/name-slug.png"
                  width={"130px"}
                  height={"25px"}
                  quality={100}
                />
              </Flex>
              <Flex w={"50%"} justify="flex-end" align="center">
                <IconButton
                  variant="ghost"
                  colorScheme={configs.template.index.fixedPanel.hamburgerMenu}
                  aria-label="Call Sage"
                  fontSize="30px"
                  icon={
                    menuOpen === false ? <AiOutlineMenu /> : <AiOutlineClose />
                  }
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              </Flex>
            </Flex>
          </div>
          <MenuApp>
            <MenuItens
              onClick={(e) => routing(e, "/")}
              color={configs.template.index.panel.color}
            >
              INÍCIO
            </MenuItens>
            <MenuItens color={configs.template.index.panel.color}>
              CATEGORIAS <Icon as={RiArrowDownSLine} />
            </MenuItens>
            <MenuItens color={configs.template.index.panel.color}>
              PRODUTOS <Icon as={RiArrowDownSLine} />
            </MenuItens>
            <MenuItens color={configs.template.index.panel.color}>
              SOBRE NÓS
            </MenuItens>
          </MenuApp>
        </ContainerMenu>
      </HeaderApp>
      <Content>
        <Image
          src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/14/slider/slide1.jpg"
          width={1356}
          height={567}
          layout="responsive"
          alt="Banner Dolce Encanto"
        />
        <MenuLogo>
          <ContainerLogo>
            <Image
              src="/img/icon-black.png"
              width={50}
              height={50}
              quality={100}
            />
            <div style={{ width: 20 }} />
            <Image
              src="/img/name-slug.png"
              width={130}
              height={30}
              quality={100}
            />
          </ContainerLogo>
          <Flex
            justify="flex-end"
            height={10}
            display={["none", "none", "none", "none", "flex", "flex"]}
          >
            <InputGroup
              style={{ width: 350 }}
              display={["none", "none", "none", "none", "flex", "flex"]}
            >
              <InputLeftElement children={<Icon as={FaSearch} />} />
              <Input
                type="text"
                placeholder="Buscar"
                bg="transparent"
                variant="outline"
                borderColor={configs.template.index.headerBanner.color}
                focusBorderColor={
                  configs.template.index.headerBanner.activeInput
                }
                _placeholder={{
                  color: `${configs.template.index.headerBanner.placeholder}`,
                }}
              />
              <InputRightElement w={"80px"}>
                <Button
                  size="sm"
                  colorScheme={configs.template.index.headerBanner.bannerBtn}
                  h="1.8rem"
                  variant="solid"
                  _focus={{
                    borderColor: configs.template.index.headerBanner.btnColor,
                  }}
                >
                  Buscar
                </Button>
              </InputRightElement>
            </InputGroup>

            <IconButton
              variant="link"
              color={configs.template.index.headerBanner.color}
              icon={<AiOutlineUser />}
              size="md"
              fontSize={30}
            />
            <Divider
              orientation="vertical"
              borderColor={configs.template.index.headerBanner.color}
              mr={1}
              ml={1}
            />
            <IconButton
              variant="link"
              color={configs.template.index.headerBanner.color}
              icon={<AiOutlineHeart />}
              size="md"
              fontSize={30}
            />
            <Label style={{ right: 100 }}>1</Label>
            <Divider
              orientation="vertical"
              borderColor={configs.template.index.headerBanner.color}
              mr={1}
              ml={1}
            />
            <IconButton
              variant="link"
              icon={<BsBag />}
              size="md"
              fontSize={30}
              color={configs.template.index.headerBanner.color}
            />
            <Label>1</Label>
          </Flex>
        </MenuLogo>
      </Content>

      <Drawer
        isOpen={menuOpen}
        placement="left"
        onClose={() => setMenuOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
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

          <DrawerFooter borderWidth="1px" p={2}>
            <Button
              onClick={() => setMenuOpen(false)}
              colorScheme={configs.template.index.drawer.btnClose}
              size="sm"
            >
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </CenterLayourt>
  );
}
