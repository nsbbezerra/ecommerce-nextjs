import Image from "next/image";

import HeaderApp from "../components/headerApp";
import FooterApp from "../components/footer";
import {
  Container,
  Content,
  CenterLayourt,
  ContainerNonFixed,
} from "../styles/styles";
import {
  Container as ChakraContainer,
  Heading,
  Flex,
  Grid,
  Box,
  Text,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { AiTwotoneLock } from "react-icons/ai";
import { FaShippingFast, FaPhoneVolume, FaSearch } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";
import {
  AiOutlineHeart,
  AiFillTag,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import BeautyStars from "beauty-stars";
import configs from "../configs/configs";

export default function Home() {
  return (
    <CenterLayourt>
      <ContainerNonFixed>
        <HeaderApp />
        <Flex
          justify="center"
          align="center"
          bg={configs.template.index.body.sendingPanelBg}
          display={["none", "none", "none", "none", "flex", "flex"]}
        >
          <Grid
            templateColumns="repeat(3, 1fr)"
            color={configs.template.index.body.sendingColor}
          >
            <Box padding={3}>
              <Grid templateColumns="50px 1fr" gap={6}>
                <Box as={FaShippingFast} size="45px" />
                <Box>
                  <Heading as="h6" size={["xs", "xs", "xs", "xs", "xs", "sm"]}>
                    Entrega e Segurança
                  </Heading>
                  <Text fontSize={["xs", "xs", "xs", "xs", "xs", "sm"]}>
                    Entregamos para todo o Brasil!
                  </Text>
                </Box>
              </Grid>
            </Box>
            <Box padding={3}>
              <Grid templateColumns="50px 1fr" gap={6}>
                <Box as={AiTwotoneLock} size="45px" />
                <Box>
                  <Heading as="h6" size="sm">
                    Compra Totalmente Segura
                  </Heading>
                  <Text fontSize={["xs", "xs", "xs", "xs", "xs", "sm"]}>
                    Compre sem dor de cabeça!
                  </Text>
                </Box>
              </Grid>
            </Box>
            <Box padding={3}>
              <Grid templateColumns="50px 1fr" gap={6}>
                <Box as={FaPhoneVolume} size="45px" />
                <Box>
                  <Heading as="h6" size="sm">
                    Atendimento Diferenciado
                  </Heading>
                  <Text fontSize={["xs", "xs", "xs", "xs", "xs", "sm"]}>
                    Estamos a disposição quando você Precisar!
                  </Text>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Flex>
      </ContainerNonFixed>

      <Container>
        <Content>
          <Box paddingLeft={80} paddingRight={80} mt={10} mb={10}>
            <Box textAlign="center" mb={50}>
              <Heading
                color={configs.template.index.body.headingColor}
                fontSize={["xl", "2xl", "2xl", "3xl", "4xl", "4xl"]}
              >
                PRODUTOS EM DESTAQUE
              </Heading>
              <Text
                fontSize={["xs", "xs", "xs", "xs", "sm", "sm"]}
                color={configs.template.index.body.headingColor}
              >
                Produtos incríveis adicionados recentemente em nosso catálogo
              </Text>
            </Box>

            <Grid
              gridTemplateColumns={"repeat(auto-fit, minmax(280px, 280px))"}
              gap={"15px"}
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
                <Box p={3} d="grid" gridTemplateColumns="1fr 25px" maxH="48px">
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
                      color={configs.template.index.body.cards.discountColor}
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
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={10}
            >
              <Button
                leftIcon={<FaSearch />}
                colorScheme={configs.template.index.body.seeMore}
                variant="solid"
                size="md"
              >
                VEJA MAIS
              </Button>
            </Box>
          </Box>
        </Content>
      </Container>

      <ContainerNonFixed>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingLeft={80}
          paddingRight={80}
          paddingTop={"45px"}
          paddingBottom={"45px"}
          h={"400px"}
          mt={10}
          mb={10}
          backgroundImage="url(https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/14/slider/parallax_img.jpg)"
          backgroundSize="cover"
          backgroundAttachment="fixed"
          backgroundRepeat="no-repeat"
        >
          <Box textAlign="center" color="gray.100">
            <Heading size="2xl" color={configs.template.index.body.promotion}>
              Promoção de Natal
            </Heading>
            <Heading
              size="xl"
              fontSize={"60px"}
              mt={8}
              mb={8}
              color={configs.template.index.body.promotion}
            >
              40% de Desconto!
            </Heading>
            <Button
              colorScheme={configs.template.index.body.promotionBtn}
              color={configs.template.index.body.promotionBtnColor}
              size={"lg"}
            >
              Confira Aqui!
            </Button>
          </Box>
        </Box>
      </ContainerNonFixed>

      <Container>
        <Content>
          <Box paddingLeft={80} paddingRight={80} mt={10} mb={10}>
            <Box textAlign="center" mb={50}>
              <Heading
                fontSize={["xl", "2xl", "2xl", "3xl", "4xl", "4xl"]}
                color={configs.template.index.body.headingColor}
              >
                PRODUTOS MAIS AVALIADOS
              </Heading>
              <Text
                fontSize={["xs", "xs", "xs", "xs", "sm", "sm"]}
                color={configs.template.index.body.headingColor}
              >
                Produtos incríveis adicionados recentemente em nosso catálogo
              </Text>
            </Box>

            <Grid
              gridTemplateColumns={"repeat(auto-fit, minmax(280px, 280px))"}
              gap={"15px"}
              justifyContent="center"
            >
              <Box
                w={"280px"}
                borderWidth="1px"
                rounded="md"
                overflow="hidden"
                boxShadow="0px 0px 10px rgba(0,0,0,.06)"
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
                  h={"48px"}
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
                      color={configs.template.index.body.cards.discountColor}
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

          <Box
            paddingLeft={70}
            paddingRight={70}
            paddingTop={2}
            paddingBottom={2}
            mt={"30px"}
            mb={"50px"}
          >
            <Grid
              gridTemplateColumns="repeat(auto-fit, minmax(180px, 180px))"
              justifyContent="center"
              gap="15px"
            >
              <Box
                w={180}
                h={100}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={5}
              >
                <Image
                  src="https://media-exp1.licdn.com/dms/image/C4D1BAQFrA1Lz0prZqQ/company-background_10000/0?e=2159024400&v=beta&t=XDYxBP0mh3PZi-PNsgO114hJcYiyAxbeMNoyTqC96-M"
                  width={180}
                  height={100}
                  layout="intrinsic"
                  quality={100}
                />
              </Box>
              <Box
                w={180}
                h={100}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={5}
              >
                <Image
                  src="https://logosmarcas.net/wp-content/uploads/2020/04/Levis-Logo-1969%E2%80%932003.jpg"
                  width={180}
                  height={100}
                  layout="intrinsic"
                  quality={100}
                />
              </Box>
              <Box
                w={180}
                h={100}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={5}
              >
                <Image
                  src="https://logosmarcas.net/wp-content/uploads/2020/04/Adidas-Logo-650x366.png"
                  width={180}
                  height={100}
                  layout="intrinsic"
                  quality={100}
                />
              </Box>
              <Box
                w={180}
                h={100}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={5}
              >
                <Image
                  src="https://logosmarcas.net/wp-content/uploads/2020/09/Hollister-Logo-650x366.png"
                  width={180}
                  height={100}
                  layout="intrinsic"
                  quality={100}
                />
              </Box>
              <Box
                w={180}
                h={100}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={5}
              >
                <Image
                  src="https://logosmarcas.net/wp-content/uploads/2020/09/Lacoste-Logo-650x366.png"
                  width={180}
                  height={100}
                  layout="intrinsic"
                  quality={100}
                />
              </Box>
            </Grid>
          </Box>
        </Content>
      </Container>

      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
    </CenterLayourt>
  );
}
