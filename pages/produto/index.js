import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Container,
  Content,
  CenterLayourt,
  ContentFixed,
  ContainerNonFixed,
} from "../../styles/styles";
import {
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
  ControlBox,
  VisuallyHidden,
  Icon,
  Radio,
  RadioGroup,
  Badge,
  Input,
  Stat,
  StatLabel,
  StatNumber,
  Tooltip,
  ListIcon,
  ListItem,
  List,
} from "@chakra-ui/react";
import {
  AiOutlineZoomIn,
  AiFillLock,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineCalculator,
} from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import HeaderApp from "../../components/headerApp";
import FooterApp from "../../components/footer";
import configs from "../../configs/configs";
import BeautyStars from "beauty-stars";

export default function Produto() {
  const [imageShow, setImageShow] = useState(
    "https://www.portotheme.com/magento2/porto/pub/media/catalog/product/cache/5ca921a7315f0241599b65aff8770523/p/r/product-18-grey_2.jpg"
  );

  const [modal, setModal] = useState(false);

  return (
    <CenterLayourt>
      <ContainerNonFixed>
        <HeaderApp />
      </ContainerNonFixed>
      <Container id="fixed-menu">
        <Content>
          <ContentFixed>
            <Box>
              <Breadcrumb fontWeight="medium" fontSize="sm">
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
              templateColumns={"400px 1fr"}
              justifyContent="center"
              mt={10}
              gap={"30px"}
            >
              <Box w={"400px"}>
                <Box
                  w="400px"
                  h="400px"
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
                    icon={AiOutlineZoomIn}
                    pos="relative"
                    mt={"-750px"}
                    ml={"330px"}
                    size="lg"
                    fontSize="35px"
                    variant="ghost"
                    onClick={() => setModal(true)}
                  />
                </Box>
                <Grid
                  gap="10px"
                  templateColumns="repeat(5, 65px)"
                  justifyContent="center"
                  mt={"5px"}
                >
                  <Box
                    w="65px"
                    h="65px"
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
                    w="65px"
                    h="65px"
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
                    Deixe seu comentário sobre este produto!
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
                  borderTopWidth="1px"
                  borderBottomWidth="1px"
                  pt={5}
                  pb={5}
                  mt={5}
                  templateColumns="repeat(auto-fit, minmax(200px, 200px))"
                  gap={"30px"}
                  justifyContent="center"
                >
                  <Flex align="center" color="gray.600">
                    <Box as={FaTruck} fontSize="3xl" mr={3} />
                    <Text fontSize="sm" textAlign="center">
                      Entrega 100% garantida!
                    </Text>
                  </Flex>
                  <Flex align="center" color="gray.600">
                    <Box as={AiFillLock} fontSize="3xl" mr={3} />
                    <Text fontSize="sm" textAlign="center">
                      Sua compra segura!
                    </Text>
                  </Flex>
                  <Flex align="center" color="gray.600">
                    <Box as={BiSupport} fontSize="3xl" mr={3} />
                    <Text fontSize="sm" textAlign="center">
                      Suporte online!
                    </Text>
                  </Flex>
                </Grid>

                <Grid templateColumns={"600px 1fr"} gap="20px">
                  <Box>
                    <Text mt={5} color="gray.600" fontSize="sm">
                      Selecione uma cor:
                    </Text>
                    <Grid
                      templateColumns="repeat(auto-fit, minmax(65px, 65px))"
                      gap={2}
                      mt={2}
                    >
                      <label>
                        <VisuallyHidden
                          as="input"
                          type="checkbox"
                          defaultChecked
                        />
                        <ControlBox
                          borderWidth="1px"
                          bg="green.500"
                          size="65px"
                          h="30px"
                          rounded="sm"
                          _checked={{
                            color: "white",
                            borderColor: "green.500",
                          }}
                          _focus={{
                            borderColor: "green.600",
                          }}
                          cursor="pointer"
                        >
                          <Icon name="check" size="16px" />
                        </ControlBox>
                      </label>

                      <label>
                        <VisuallyHidden
                          as="input"
                          type="checkbox"
                          defaultChecked
                        />
                        <ControlBox
                          borderWidth="1px"
                          bg="red.500"
                          size="65px"
                          h="30px"
                          rounded="sm"
                          _checked={{
                            color: "white",
                            borderColor: "red.500",
                          }}
                          _focus={{
                            borderColor: "red.600",
                          }}
                          cursor="pointer"
                        >
                          <Icon name="check" size="16px" />
                        </ControlBox>
                      </label>

                      <label>
                        <VisuallyHidden
                          as="input"
                          type="checkbox"
                          defaultChecked
                        />
                        <ControlBox
                          borderWidth="1px"
                          bg="blue.500"
                          size="65px"
                          h="30px"
                          rounded="sm"
                          _checked={{
                            color: "white",
                            borderColor: "blue.500",
                          }}
                          _focus={{
                            borderColor: "blue.600",
                          }}
                          cursor="pointer"
                        >
                          <Icon name="check" size="16px" />
                        </ControlBox>
                      </label>
                    </Grid>

                    <Text mt={5} color="gray.600" fontSize="sm">
                      Selecione um tamanho:
                    </Text>

                    <RadioGroup defaultValue="2" spacing={5} isInline mt={1}>
                      <Radio
                        colorScheme={configs.template.product.radiogroup}
                        value="1"
                        size="lg"
                      >
                        P
                      </Radio>
                      <Radio
                        colorScheme={configs.template.product.radiogroup}
                        value="2"
                        size="lg"
                      >
                        M
                      </Radio>
                      <Radio
                        colorScheme={configs.template.product.radiogroup}
                        value="3"
                        size="lg"
                      >
                        G
                      </Radio>
                      <Radio
                        colorScheme={configs.template.product.radiogroup}
                        value="4"
                        size="lg"
                      >
                        XG
                      </Radio>
                    </RadioGroup>
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
                  <Flex>
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
                  <Flex>
                    <IconButton aria-label="Search database" icon="minus" />
                    <Input
                      type="number"
                      value={1}
                      w="70px"
                      _focus={{ borderColor: "yellow.400" }}
                      isReadOnly
                    />
                    <IconButton aria-label="Search database" icon="add" />

                    <Button
                      colorScheme={configs.template.product.btnCart}
                      leftIcon={AiOutlineShoppingCart}
                      ml={3}
                    >
                      Add ao Carrinho
                    </Button>

                    <Input
                      type={"number"}
                      placeholder="Seu CEP"
                      _focus={{ borderColor: "yellow.400" }}
                      w={"110px"}
                      ml={3}
                    />
                    <Tooltip label="Calcular Frete" placement="top" hasArrow>
                      <IconButton
                        aria-label="Search database"
                        icon={AiOutlineCalculator}
                        fontSize="3xl"
                        colorScheme="gray"
                      />
                    </Tooltip>
                  </Flex>
                </Flex>
              </Box>
            </Grid>
          </ContentFixed>
        </Content>
      </Container>

      <ContainerNonFixed>
        <Flex
          bg="gray.100"
          mt={10}
          align="center"
          justify="center"
          pb={20}
          pt={20}
        >
          <Container>
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
                <ListIcon icon="check-circle" color="green.500" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon icon="check-circle" color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon icon="check-circle" color="green.500" />
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
    </CenterLayourt>
  );
}
