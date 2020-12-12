import { useState } from "react";
import HeaderApp from "../../components/headerApp";
import FooterApp from "../../components/footer";
import Image from "next/image";
import Link from "next/link";
import { ContainerApp, Fixed, ContainerNonFixed } from "../../styles/styles";
import {
  Container,
  Heading,
  Button,
  IconButton,
  Flex,
  Grid,
  Box,
  Text,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Collapse,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import {
  AiOutlineHeart,
  AiOutlineUnorderedList,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import {
  FaShoppingCart,
  FaHeart,
  FaListUl,
  FaSearch,
  FaTags,
  FaTag,
} from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TiStarburst } from "react-icons/ti";
import BeautyStars from "beauty-stars";
import ReactPaginate from "react-paginate";

import configs from "../../configs/configs";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [collapseId, setCollapseId] = useState("");
  const [collapseTwo, setCollapseTwo] = useState(false);
  const [collapseIdTwo, setCollapseIdTwo] = useState("");

  return (
    <ContainerApp>
      <ContainerNonFixed>
        <HeaderApp />
      </ContainerNonFixed>

      {/** MEIO DA PÁGINA */}
      <Fixed>
        <Container maxW="6xl">
          <Breadcrumb mt={10} mb={10}>
            <BreadcrumbItem>
              <Link href="/" passHref>
                <BreadcrumbLink>início</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link href="/produtos" passHref>
                <BreadcrumbLink>produtos</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link href="/produtos" passHref>
                <BreadcrumbLink>camisetas femeninas</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Grid
            templateColumns={["1fr", "1fr", "1fr", "1fr", "250px 1fr"]}
            gap={10}
          >
            {/** MENU LATERAL */}

            <Box display={["none", "none", "none", "none", "block"]}>
              <Heading size="sm" mb={2}>
                <Flex
                  p={3}
                  bg={configs.template.productsPage.allCategory.bg}
                  color={configs.template.productsPage.allCategory.color}
                  borderRadius="md"
                >
                  <Box as={AiOutlineUnorderedList} marginRight={3} /> TODAS AS
                  CATEGORIAS
                </Flex>
              </Heading>
              <Box w="250px" borderWidth="1px" borderRadius="md" p={2}>
                <Button
                  onClick={() => setCollapse(!collapse)}
                  isFullWidth
                  size="sm"
                  leftIcon={<FaTags />}
                >
                  Femeninas
                </Button>
                <Collapse in={collapse} animateOpacity>
                  <Box p={2} mt={2} borderWidth="1px" rounded="md">
                    <Button
                      onClick={() => setCollapseTwo(!collapseTwo)}
                      isFullWidth
                      size="sm"
                      variant="outline"
                      leftIcon={<FaTag />}
                      colorScheme="yellow"
                    >
                      Femeninas
                    </Button>
                    <Collapse in={collapseTwo} animateOpacity>
                      <Flex
                        pt={2}
                        pl={2}
                        pr={2}
                        direction="column"
                        align="flex-start"
                      >
                        <Button
                          onClick={() => setCollapse(!collapse)}
                          size="sm"
                          variant="link"
                          leftIcon={<BsArrowRightShort />}
                          colorScheme="yellow"
                          mb={2}
                        >
                          Femeninas
                        </Button>
                        <Button
                          onClick={() => setCollapse(!collapse)}
                          size="sm"
                          variant="link"
                          leftIcon={<BsArrowRightShort />}
                          colorScheme="yellow"
                          mb={2}
                        >
                          Femeninas
                        </Button>
                        <Button
                          onClick={() => setCollapse(!collapse)}
                          size="sm"
                          variant="link"
                          leftIcon={<BsArrowRightShort />}
                          colorScheme="yellow"
                          mb={2}
                        >
                          Femeninas
                        </Button>
                        <Button
                          onClick={() => setCollapse(!collapse)}
                          size="sm"
                          variant="link"
                          leftIcon={<BsArrowRightShort />}
                          colorScheme="yellow"
                          mb={2}
                        >
                          Femeninas
                        </Button>
                      </Flex>
                    </Collapse>
                  </Box>
                </Collapse>
              </Box>
            </Box>

            {/** GRID DE PRODUTOS */}

            <Box color={configs.template.productsPage.product.color}>
              <Flex
                color={configs.template.productsPage.allCategory.color}
                justify="flex-end"
                display={["flex", "flex", "none", "none", "none"]}
                pl={"20px"}
                pr={"20px"}
              >
                <Menu>
                  <MenuButton
                    as={Button}
                    colorScheme={
                      configs.template.productsPage.product.searchButtom
                    }
                    size="md"
                    variant="solid"
                  >
                    <FaSearch />
                  </MenuButton>
                  <MenuList placement="left-start">
                    <MenuItem>Todos os Produtos</MenuItem>
                    <MenuItem>Mais Novos</MenuItem>
                    <MenuItem>Mais Vendidos</MenuItem>
                    <MenuItem>Mais Avaliados</MenuItem>
                    <MenuItem>Promocionais</MenuItem>
                  </MenuList>
                </Menu>
                <IconButton
                  variant="outline"
                  size="md"
                  colorScheme={
                    configs.template.productsPage.product.searchButtom
                  }
                  aria-label="Call Sage"
                  fontSize="25px"
                  ml={2}
                  icon={
                    menuOpen === false ? <AiOutlineMenu /> : <AiOutlineClose />
                  }
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              </Flex>
              <Box
                borderRadius={"md"}
                borderWidth="1px"
                h={"44px"}
                color={configs.template.productsPage.allCategory.color}
                display={["none", "none", "block", "block", "block"]}
              >
                <Flex align="center" h="44px" p="10px" justify="space-between">
                  <Box
                    display="flex"
                    alignItems="center"
                    w="max-content"
                    display={["none", "none", "flex", "flex", "flex"]}
                  >
                    <Text fontSize="md">Produtos</Text>
                    <Badge
                      colorScheme={
                        configs.template.productsPage.product.activeTagTheme
                      }
                      ml={3}
                      fontSize={"md"}
                      variant="outline"
                    >
                      10
                    </Badge>
                  </Box>
                  <Box w="max-content" display="flex" alignItems="center">
                    <Box display={["none", "none", "block", "block", "block"]}>
                      <Menu>
                        <MenuButton
                          as={Button}
                          colorScheme={
                            configs.template.productsPage.product.searchButtom
                          }
                          size="sm"
                        >
                          <FaSearch />
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Todos os Produtos</MenuItem>
                          <MenuItem>Mais Novos</MenuItem>
                          <MenuItem>Mais Vendidos</MenuItem>
                          <MenuItem>Mais Avaliados</MenuItem>
                          <MenuItem>Promocionais</MenuItem>
                        </MenuList>
                      </Menu>
                    </Box>
                    <Flex>
                      <IconButton
                        variant="outline"
                        size="sm"
                        colorScheme={
                          configs.template.productsPage.product.searchButtom
                        }
                        aria-label="Call Sage"
                        fontSize="25px"
                        ml={2}
                        icon={
                          menuOpen === false ? (
                            <AiOutlineMenu />
                          ) : (
                            <AiOutlineClose />
                          )
                        }
                        onClick={() => setMenuOpen(!menuOpen)}
                        display={["flex", "flex", "flex", "flex", "none"]}
                      />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box p={4}>
                <Grid
                  templateColumns={"repeat(auto-fit, minmax(280px, 280px))"}
                  gap={[3, 3, 3, 8, 8]}
                  justifyContent="center"
                >
                  <Box
                    w={"280px"}
                    borderWidth="1px"
                    rounded="md"
                    overflow="hidden"
                    shadow="lg"
                  >
                    <Image
                      src="https://static.hering.com.br//sys_master/images/h2b/h08/9750885761054.jpg?name=4EYV-AV2EN-C1"
                      width={280}
                      height={310}
                      layout="intrinsic"
                    />
                    <Box pos="absolute" mt={-300} ml={2}>
                      <Box
                        as={TiStarburst}
                        fontSize="60px"
                        color={configs.template.index.body.cards.cardsOffBg}
                      />
                      <Text
                        fontSize="13px"
                        mt={"-41px"}
                        ml={"16px"}
                        fontWeight="600"
                        color={configs.template.index.body.cards.cardsOffColor}
                      >
                        -15%
                      </Text>
                    </Box>
                    <Box
                      p={3}
                      d="grid"
                      gridTemplateColumns="1fr 25px"
                      maxH="48px"
                    >
                      <Heading
                        size="sm"
                        mr={2}
                        as="h6"
                        fontWeight="500"
                        color={configs.template.index.body.cards.primaryColor}
                        w={"200px"}
                        maxW={"200px"}
                        isTruncated
                        noOfLines={2}
                        h={"38px"}
                      >
                        Camiseta Feminina Baby Look Elegance
                      </Heading>
                      <IconButton
                        colorScheme={configs.template.index.body.cards.heart}
                        as={AiOutlineHeart}
                        size="xs"
                        variant="ghost"
                        cursor="pointer"
                      />
                    </Box>
                    <Box p={3}>
                      <Flex>
                        <Text
                          fontSize="lg"
                          mt={-1}
                          mb={3}
                          fontWeight="500"
                          textDecor="line-through"
                          color={
                            configs.template.index.body.cards.discountColor
                          }
                          mr={3}
                        >
                          R$ 500,00
                        </Text>
                        <Text
                          fontSize="lg"
                          mt={-1}
                          mb={3}
                          fontWeight="600"
                          color={configs.template.index.body.cards.primaryColor}
                        >
                          R$ 500,00
                        </Text>
                      </Flex>
                      <BeautyStars
                        value={4}
                        maxStars={5}
                        size="10px"
                        activeColor={"#2D3748"}
                        inactiveColor={"#CBD5E0"}
                      />
                    </Box>
                    <Box p={3} d="flex" justifyContent="space-between" mt={-2}>
                      <Button
                        colorScheme={configs.template.index.body.cards.btns}
                        variant="outline"
                        w={125}
                        leftIcon={<AiOutlineSearch />}
                        size="sm"
                      >
                        Visualizar
                      </Button>
                      <Button
                        colorScheme={configs.template.index.body.cards.btns}
                        variant="solid"
                        w={125}
                        leftIcon={<AiOutlineShoppingCart />}
                        size="sm"
                      >
                        Comprar
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Box>

              <Box mt={"15px"} mb={"15px"} className="pag-large">
                <ReactPaginate
                  previousLabel={"Anterior"}
                  nextLabel={"Próxima"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={30}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={2}
                  onPageChange={() => {}}
                  containerClassName={"pagination-pages"}
                  activeClassName={"active"}
                  pageClassName={"pages"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"prev"}
                  nextClassName={"next"}
                  previousLinkClassName={"prev-link"}
                  nextLinkClassName={"next-link"}
                  breakLinkClassName={"break-link"}
                />
              </Box>
              <Box mt={"15px"} mb={"15px"} className="pag-small">
                <ReactPaginate
                  previousLabel={"Anterior"}
                  nextLabel={"Próxima"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={30}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={1}
                  onPageChange={() => {}}
                  containerClassName={"pagination-pages"}
                  activeClassName={"active"}
                  pageClassName={"pages"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"prev"}
                  nextClassName={"next"}
                  previousLinkClassName={"prev-link"}
                  nextLinkClassName={"next-link"}
                  breakLinkClassName={"break-link"}
                />
              </Box>
            </Box>
          </Grid>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
      <Drawer
        isOpen={menuOpen}
        placement="left"
        onClose={() => setMenuOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex
              p={2}
              bg={configs.template.productsPage.allCategory.bg}
              color={configs.template.productsPage.allCategory.color}
              borderRadius="md"
              align="center"
              fontSize="md"
            >
              <Box as={AiOutlineUnorderedList} marginRight={3} /> TODAS AS
              CATEGORIAS
            </Flex>
          </DrawerHeader>

          <DrawerBody overflow="auto">
            <Button
              onClick={() => setCollapse(!collapse)}
              isFullWidth
              size="sm"
              leftIcon={<FaTags />}
            >
              Femeninas
            </Button>
            <Collapse in={collapse} animateOpacity>
              <Box p={2} mt={2} borderWidth="1px" rounded="md">
                <Button
                  onClick={() => setCollapseTwo(!collapseTwo)}
                  isFullWidth
                  size="sm"
                  variant="outline"
                  leftIcon={<FaTag />}
                  colorScheme="yellow"
                >
                  Femeninas
                </Button>
                <Collapse in={collapseTwo} animateOpacity>
                  <Flex
                    pt={2}
                    pl={2}
                    pr={2}
                    direction="column"
                    align="flex-start"
                  >
                    <Button
                      onClick={() => setCollapse(!collapse)}
                      size="sm"
                      variant="link"
                      leftIcon={<BsArrowRightShort />}
                      colorScheme="yellow"
                      mb={2}
                    >
                      Femeninas
                    </Button>
                    <Button
                      onClick={() => setCollapse(!collapse)}
                      size="sm"
                      variant="link"
                      leftIcon={<BsArrowRightShort />}
                      colorScheme="yellow"
                      mb={2}
                    >
                      Femeninas
                    </Button>
                    <Button
                      onClick={() => setCollapse(!collapse)}
                      size="sm"
                      variant="link"
                      leftIcon={<BsArrowRightShort />}
                      colorScheme="yellow"
                      mb={2}
                    >
                      Femeninas
                    </Button>
                    <Button
                      onClick={() => setCollapse(!collapse)}
                      size="sm"
                      variant="link"
                      leftIcon={<BsArrowRightShort />}
                      colorScheme="yellow"
                      mb={2}
                    >
                      Femeninas
                    </Button>
                  </Flex>
                </Collapse>
              </Box>
            </Collapse>
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
    </ContainerApp>
  );
}
