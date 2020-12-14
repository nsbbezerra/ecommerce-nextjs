import { useState, useEffect } from "react";
import {
  Heading,
  Container,
  Box,
  Flex,
  Text,
  IconButton,
  Divider,
  Input,
  Wrap,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  Icon,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { ContainerApp, ContainerNonFixed, Fixed } from "../../styles/styles";
import HeaderApp from "../../components/headerApp";
import FooterApp from "../../components/footer";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
  AiOutlineCalculator,
  AiOutlineCheck,
} from "react-icons/ai";
import configs from "../../configs/configs";

export default function Carrinho() {
  const [qtd, setQtd] = useState(1);

  useEffect(() => {
    if (qtd < 1) {
      setQtd(1);
    }
  }, [qtd]);

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
            <Icon as={AiOutlineShoppingCart} fontSize="2xl" mr={10} />
            <Heading size="md">Meu Carrinho</Heading>
          </Flex>

          {/** ITENS DO CARRINHO */}

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
                      onClick={() => setQtd(qtd - 1)}
                    />
                    <Input
                      type="number"
                      value={qtd}
                      w={"70px"}
                      _focus={{ borderColor: "yellow.400" }}
                      isReadOnly
                    />
                    <IconButton
                      aria-label="Search database"
                      icon={<AiOutlinePlus />}
                      onClick={() => setQtd(qtd + 1)}
                    />
                  </Flex>
                  <Flex mt={[3, 0, 0, 0, 0]}>
                    <Box w="20px" />
                    <Stat>
                      <StatLabel>Valor Unitário</StatLabel>
                      <StatNumber>R$ 250,00</StatNumber>
                    </Stat>
                    <Box w="20px" />
                    <Stat>
                      <StatLabel>Valor Total</StatLabel>
                      <StatNumber>R$ 250,00</StatNumber>
                    </Stat>
                  </Flex>
                </Flex>
              </WrapItem>
            </Wrap>

            <Divider mt={5} mb={5} />

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
                      onClick={() => setQtd(qtd - 1)}
                    />
                    <Input
                      type="number"
                      value={qtd}
                      w={"70px"}
                      _focus={{ borderColor: "yellow.400" }}
                      isReadOnly
                    />
                    <IconButton
                      aria-label="Search database"
                      icon={<AiOutlinePlus />}
                      onClick={() => setQtd(qtd + 1)}
                    />
                  </Flex>
                  <Flex mt={[3, 0, 0, 0, 0]}>
                    <Box w="20px" />
                    <Stat>
                      <StatLabel>Valor Unitário</StatLabel>
                      <StatNumber>R$ 250,00</StatNumber>
                    </Stat>
                    <Box w="20px" />
                    <Stat>
                      <StatLabel>Valor Total</StatLabel>
                      <StatNumber>R$ 250,00</StatNumber>
                    </Stat>
                  </Flex>
                </Flex>
              </WrapItem>
            </Wrap>
          </Box>

          {/** CALCULO FRETE */}

          <Flex
            align={"center"}
            mt={10}
            borderWidth="1px"
            borderRadius="md"
            shadow="md"
            p={2}
            justify="flex-end"
            direction={["column", "row", "row", "row", "row"]}
          >
            <Input
              type={"number"}
              placeholder="Seu CEP"
              _focus={{ borderColor: "yellow.400" }}
              w={"200px"}
              mr={3}
            />

            <Button
              leftIcon={<AiOutlineCalculator />}
              colorScheme="yellow"
              mt={[5, 0, 0, 0, 0]}
            >
              Calcular Frete
            </Button>
          </Flex>

          {/** CARD TOTAL DOS PRODUTOS */}

          <Flex justify="flex-end" mt={10}>
            <Box
              w="450px"
              p={5}
              borderWidth="1px"
              shadow="md"
              borderRadius="md"
            >
              <Flex justify="space-between">
                <Text>SUBTOTAL</Text>
                <Text fontWeight="700">R$ 250,00</Text>
              </Flex>
              <Divider mt={5} mb={5} />
              <Flex justify="space-between">
                <Text>FRETE</Text>
                <Text fontWeight="700">R$ 250,00</Text>
              </Flex>
              <Divider mt={5} mb={5} />
              <Flex justify="space-between">
                <Text>TOTAL</Text>
                <Text fontWeight="700">R$ 250,00</Text>
              </Flex>
            </Box>
          </Flex>

          {/** BOTÕES DE AÇÃO */}

          <Flex
            mt={10}
            justify="space-between"
            direction={["column", "row", "row", "row", "row"]}
          >
            <Button
              size="lg"
              leftIcon={<AiOutlineShoppingCart />}
              mr={[0, 1, 0, 0, 0]}
              mb={[5, 0, 0, 0, 0]}
            >
              Continuar Comprando
            </Button>

            <Button size="lg" colorScheme="green" leftIcon={<AiOutlineCheck />}>
              Finalizar Compra
            </Button>
          </Flex>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
    </ContainerApp>
  );
}
