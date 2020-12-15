import { ContainerApp, Fixed, ContainerNonFixed } from "../../styles/styles";
import {
  Container,
  Flex,
  Icon,
  Heading,
  Box,
  Wrap,
  WrapItem,
  Tooltip,
  Divider,
  IconButton,
  Text,
  Input,
  Stat,
  StatLabel,
  StatNumber,
  Button,
} from "@chakra-ui/react";
import HeaderApp from "../../components/headerApp";
import FooterApp from "../../components/footer";
import configs from "../../configs/configs";
import {
  AiOutlineHeart,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function ListaDeDesejos() {
  return (
    <ContainerApp>
      <ContainerNonFixed>
        <HeaderApp />
      </ContainerNonFixed>
      <Fixed>
        <Container maxW="6xl" mt={10} mb={10}>
          <Flex
            bg={configs.template.chart.bgBanner}
            p={3}
            shadow="md"
            borderRadius="md"
            mb={5}
            align="center"
          >
            <Icon as={AiOutlineHeart} fontSize="2xl" mr={10} />
            <Heading size="md" color={configs.template.chart.colorBanner}>
              Minha Lista de Desejos
            </Heading>
          </Flex>

          <Box borderWidth="1px" p={3} borderRadius="md" shadow="md">
            <Wrap spacing="20px" justify="center">
              <WrapItem>
                <Flex
                  direction={["column", "row", "row", "row", "row"]}
                  justify="center"
                  align="center"
                  mb={[5, 0, 0, 0, 0]}
                >
                  <Tooltip label="Remover Item" placement="top" hasArrow>
                    <IconButton
                      colorScheme="red"
                      aria-label="Search database"
                      icon={<FaTimes />}
                      size="md"
                      variant="link"
                    />
                  </Tooltip>
                  <Box
                    w="100px"
                    h="100px"
                    borderRadius="50%"
                    overflow="hidden"
                    mt={[5, 0, 0, 0, 0]}
                    mb={[5, 0, 0, 0, 0]}
                  >
                    <Image
                      src="https://static.hering.com.br//sys_master/images/h2b/h08/9750885761054.jpg?name=4EYV-AV2EN-C1"
                      width={200}
                      height={200}
                      layout="responsive"
                    />
                  </Box>
                  <Box ml={10} w="250px">
                    <Heading size="md" isTruncated noOfLines={1}>
                      Men Glasses Men Glasses Men Glasses
                    </Heading>
                    <Flex align="center" mt={2}>
                      <Text fontSize="sm" mr={3}>
                        Cor:
                      </Text>
                      <Box
                        w="50px"
                        h="30px"
                        bg="red.400"
                        borderRadius="sm"
                        shadow="md"
                      />
                    </Flex>
                    <Flex align="center" mt={2}>
                      <Text fontSize="sm" mr={3}>
                        Tamanho:
                      </Text>
                      <Flex
                        w="50px"
                        h="30px"
                        borderWidth="1px"
                        borderRadius="sm"
                        shadow="md"
                        align="center"
                        justify="center"
                        fontSize="sm"
                      >
                        P
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </WrapItem>

              <WrapItem>
                <Divider
                  orientation="vertical"
                  display={["none", "block", "block", "block", "block"]}
                />
              </WrapItem>

              <WrapItem>
                <Flex
                  h="100%"
                  align="center"
                  direction={["column", "row", "row", "row", "row"]}
                >
                  <Flex>
                    <IconButton
                      aria-label="Search database"
                      icon={<AiOutlineMinus />}
                      onClick={() => {}}
                    />
                    <Input
                      type="number"
                      value={""}
                      w={"70px"}
                      _focus={{ borderColor: "yellow.400" }}
                      isReadOnly
                    />
                    <IconButton
                      aria-label="Search database"
                      icon={<AiOutlinePlus />}
                      onClick={() => {}}
                    />
                  </Flex>
                  <Flex mt={[3, 0, 0, 0, 0]} align="center">
                    <Box w="20px" />
                    <Stat>
                      <StatLabel>Valor</StatLabel>
                      <StatNumber>R$ 250,00</StatNumber>
                    </Stat>
                    <Box w="20px" />
                    <Button
                      colorScheme={configs.template.chart.btnCalc}
                      leftIcon={<AiOutlineShoppingCart />}
                    >
                      Adicionar ao Carrinho
                    </Button>
                  </Flex>
                </Flex>
              </WrapItem>
            </Wrap>

            <Divider mt={5} mb={5} />
          </Box>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
    </ContainerApp>
  );
}
