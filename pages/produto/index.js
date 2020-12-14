import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { ContainerApp, Fixed, ContainerNonFixed } from "../../styles/styles";
import {
  Container,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Grid,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
  Flex,
  Divider,
  Text,
  Wrap,
  WrapItem,
  Badge,
  Input,
  Stat,
  StatLabel,
  StatNumber,
  Tooltip,
  ListIcon,
  ListItem,
  List,
  Stack,
  useRadio,
  useRadioGroup,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  AiOutlineZoomIn,
  AiFillLock,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineCalculator,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineCheck,
} from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";
import HeaderApp from "../../components/headerApp";
import FooterApp from "../../components/footer";
import configs from "../../configs/configs";
import BeautyStars from "beauty-stars";

export default function Produto() {
  const [qtd, setQtd] = useState(1);

  useEffect(() => {
    if (qtd < 1) {
      setQtd(1);
    }
  }, [qtd]);

  const [imageShow, setImageShow] = useState(
    "https://www.portotheme.com/magento2/porto/pub/media/catalog/product/cache/5ca921a7315f0241599b65aff8770523/p/r/product-18-grey_2.jpg"
  );

  const [modal, setModal] = useState(false);

  function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
          bg={input.value}
          w="35px"
          h="35px"
          mt={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {input.checked === true ? (
            <Icon
              as={AiOutlineCheck}
              fontSize="xl"
              style={{ color: "#fff", mixBlendMode: "difference" }}
            />
          ) : (
            ""
          )}
        </Box>
      </Box>
    );
  }

  function RadioCardSize(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: configs.template.product.radiogroup.bg,
            color: configs.template.product.radiogroup.color,
            borderColor: configs.template.product.radiogroup.border,
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
          w="45px"
          h="35px"
          mt={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {props.children}
        </Box>
      </Box>
    );
  }

  function ColorsRadio() {
    const options = [
      "yellow.400",
      "green.400",
      "red.400",
      "blue.400",
      "#fff",
      "#000",
      "pink.400",
      "teal.400",
    ];

    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "framework",
      defaultValue: "react",
      onChange: console.log,
    });

    const group = getRootProps();

    return (
      <Wrap {...group} spacing="15px">
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <WrapItem key={value}>
              <RadioCard {...radio}>{value}</RadioCard>
            </WrapItem>
          );
        })}
      </Wrap>
    );
  }

  function SizeRadio() {
    const options = ["P", "M", "G", "XG", "XXG"];

    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "framework",
      defaultValue: "react",
      onChange: console.log,
    });

    const group = getRootProps();

    return (
      <Wrap {...group} spacing="15px">
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <WrapItem key={value}>
              <RadioCardSize {...radio}>{value}</RadioCardSize>
            </WrapItem>
          );
        })}
      </Wrap>
    );
  }

  return (
    <ContainerApp>
      <ContainerNonFixed>
        <HeaderApp />
      </ContainerNonFixed>

      <Fixed>
        <Container maxW={["4xl", "4xl", "4xl", "4xl", "6xl"]}>
          <Box>
            <Breadcrumb mt={10} mb={10}>
              <BreadcrumbItem>
                <Link href="/" passHref>
                  <BreadcrumbLink>Início</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link href="/produtos" passHref>
                  <BreadcrumbLink>Produtos</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Blusa Feminina Preta</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          <Grid
            templateColumns={["100%", "100%", "100%", "100%", "400px 1fr"]}
            justifyContent="center"
            gap={"30px"}
            justifyItems="center"
          >
            <Box w={["300px", "300px", "400px", "400px", "400px"]}>
              <Box
                w={["300px", "300px", "400px", "400px", "400px"]}
                h={["300px", "300px", "400px", "400px", "400px"]}
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  src={imageShow}
                  width={400}
                  height={400}
                  layout="intrinsic"
                />
                <IconButton
                  aria-label="Search database"
                  icon={<AiOutlineZoomIn />}
                  pos="relative"
                  mt={["-570px", "-570px", "-750px", "-750px", "-750px"]}
                  ml={["240px", "240px", "330px", "330px", "330px"]}
                  size="lg"
                  fontSize="35px"
                  variant="ghost"
                  onClick={() => setModal(true)}
                />
              </Box>
              <Grid
                gap="10px"
                templateColumns={[
                  "repeat(5, 50px)",
                  "repeat(5, 50px)",
                  "repeat(5, 65px)",
                  "repeat(5, 65px)",
                  "repeat(5, 65px)",
                ]}
                justifyContent="center"
                mt={"5px"}
              >
                <Box
                  w={["50px", "50px", "65px", "65px", "65px"]}
                  h={["50px", "50px", "65px", "65px", "65px"]}
                  borderWidth="1px"
                  borderRadius="md"
                  overflow="hidden"
                  as={Button}
                  bg="transparent"
                  p={0}
                  onClick={() =>
                    setImageShow(
                      "https://www.portotheme.com/magento2/porto/pub/media/catalog/product/cache/5ca921a7315f0241599b65aff8770523/p/r/product-18-grey_2.jpg"
                    )
                  }
                >
                  <Image
                    src={
                      "https://www.portotheme.com/magento2/porto/pub/media/catalog/product/cache/5ca921a7315f0241599b65aff8770523/p/r/product-18-grey_2.jpg"
                    }
                    width={65}
                    height={65}
                    layout="intrinsic"
                  />
                </Box>
                <Box
                  w={["50px", "50px", "65px", "65px", "65px"]}
                  h={["50px", "50px", "65px", "65px", "65px"]}
                  borderWidth="1px"
                  borderRadius="md"
                  overflow="hidden"
                  as={Button}
                  bg="transparent"
                  p={0}
                  onClick={() =>
                    setImageShow(
                      "https://www.portotheme.com/magento2/porto/pub/media/catalog/product/cache/5ca921a7315f0241599b65aff8770523/s/h/shoes-3-grey.jpg"
                    )
                  }
                >
                  <Image
                    src={
                      "https://www.portotheme.com/magento2/porto/pub/media/catalog/product/cache/5ca921a7315f0241599b65aff8770523/s/h/shoes-3-grey.jpg"
                    }
                    width={65}
                    height={65}
                    layout="intrinsic"
                  />
                </Box>
              </Grid>
            </Box>
            <Box>
              <Heading>Men Glasses</Heading>
              <Flex p={2} mt={3} mb={3}>
                <BeautyStars
                  value={4}
                  maxStars={5}
                  size="10px"
                  activeColor={"#2D3748"}
                  inactiveColor={"#CBD5E0"}
                />
                <Divider orientation="vertical" ml={3} mr={3} />
                <Button variant="link" size="sm">
                  Avalie este produto!
                </Button>
              </Flex>
              <Text textAlign="justify">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
              </Text>

              <Grid
                templateColumns={[
                  "100%",
                  "100%",
                  "1fr 130px",
                  "1fr 130px",
                  "1fr 130px",
                ]}
                gap="20px"
                borderTopWidth="1px"
                mt={5}
              >
                <Box maxW={["100%", "100%", "100%", "100%", "100%"]}>
                  <Text mt={3} color="gray.600" fontSize="sm">
                    Selecione uma cor:
                  </Text>
                  <ColorsRadio />

                  <Text mt={5} color="gray.600" fontSize="sm">
                    Selecione um tamanho:
                  </Text>

                  <SizeRadio />
                </Box>

                <Box>
                  <Text mt={5} color="gray.600" fontSize="sm">
                    Disponibilidade:
                  </Text>
                  <Badge colorScheme="green" fontSize="lg" mt={1}>
                    Em Estoque
                  </Badge>
                  <Stat mt={3}>
                    <StatLabel color="gray.600">Quantidade:</StatLabel>
                    <StatNumber color="gray.600">100</StatNumber>
                  </Stat>
                </Box>
              </Grid>

              <Flex
                borderTopWidth="1px"
                pt={5}
                mt={5}
                align="center"
                justify="space-between"
              >
                <Flex mt={-3} mb={2}>
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    textDecor="line-through"
                    color={"gray.400"}
                    mr={5}
                  >
                    R$ 250,00
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    R$ 250,00
                  </Text>
                </Flex>
              </Flex>
              <Flex
                justify="center"
                align="center"
                direction={["column", "column", "row", "row", "row"]}
              >
                <Flex mb={[5, 5, 0, 0, 0]}>
                  <IconButton
                    aria-label="Search database"
                    icon={<AiOutlineMinus />}
                    onClick={() => setQtd(qtd - 1)}
                  />
                  <Input
                    type="number"
                    value={qtd}
                    w={["150px", "150px", "70px", "70px", "70px"]}
                    _focus={{ borderColor: "yellow.400" }}
                    isReadOnly
                  />
                  <IconButton
                    aria-label="Search database"
                    icon={<AiOutlinePlus />}
                    onClick={() => setQtd(qtd + 1)}
                  />
                </Flex>

                <Button
                  colorScheme={configs.template.product.btnCart}
                  leftIcon={<AiOutlineShoppingCart />}
                  ml={3}
                  mb={[5, 5, 0, 0, 0]}
                >
                  Adicionar ao Carrinho
                </Button>

                <Flex>
                  <Input
                    type={"number"}
                    placeholder="Seu CEP"
                    _focus={{ borderColor: "yellow.400" }}
                    w={"150px"}
                    ml={3}
                  />
                  <Tooltip label="Calcular Frete" placement="top" hasArrow>
                    <IconButton
                      aria-label="Search database"
                      icon={<AiOutlineCalculator />}
                      fontSize="3xl"
                      colorScheme="gray"
                    />
                  </Tooltip>
                </Flex>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Fixed>

      <ContainerNonFixed>
        <Flex
          bg={configs.template.product.descBg}
          mt={20}
          align="center"
          justify="center"
          pb={20}
          pt={20}
        >
          <Container maxW="6xl">
            <Heading size="lg">Detalhes</Heading>
            <Text
              mt={5}
              ml={5}
              style={{ textIndent: "40px" }}
              textAlign="justify"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat.
            </Text>
            <List spacing={3} mt={5} ml={20}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
            <Text
              mt={5}
              ml={5}
              style={{ textIndent: "40px" }}
              textAlign="justify"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat.
            </Text>
          </Container>
        </Flex>

        <FooterApp />
      </ContainerNonFixed>

      {/** MODAL */}

      <Modal isOpen={modal} onClose={() => setModal(false)} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Visualizar Imagem</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={imageShow}
              width={300}
              height={300}
              layout="responsive"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </ContainerApp>
  );
}
