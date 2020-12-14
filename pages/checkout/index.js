import { useState } from "react";
import {
  Heading,
  Container,
  Box,
  Flex,
  Text,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  Divider,
  Button,
  Input,
  Select,
  Wrap,
  WrapItem,
  Collapse,
  HStack,
  PinInput,
  PinInputField,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { ContainerApp, ContainerNonFixed, Fixed } from "../../styles/styles";
import HeaderApp from "../../components/headerApp";
import FooterApp from "../../components/footer";
import {
  AiOutlineCheck,
  AiOutlinePlus,
  AiOutlineBarcode,
  AiOutlineMinus,
  AiOutlineSave,
} from "react-icons/ai";
import { FaList, FaCreditCard } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import configs from "../../configs/configs";

export default function Checkout() {
  const [idPayment, setIdPayment] = useState("");
  const [modalCard, setModalCard] = useState(false);
  const [modalAddress, setModalAddress] = useState(false);
  const [modalFinal, setModalFinal] = useState(false);

  return (
    <ContainerApp>
      <ContainerNonFixed>
        <HeaderApp />
      </ContainerNonFixed>
      <Fixed>
        <Container maxW="6xl" mt={10} mb={10}>
          <Flex
            bg={configs.template.checkout.bgBanner}
            p={3}
            shadow="md"
            borderRadius="md"
            mb={5}
            align="center"
          >
            <Icon as={AiOutlineCheck} fontSize="2xl" mr={10} />
            <Heading size="md">Finalizar Compra</Heading>
          </Flex>

          <Grid
            templateColumns={["100%", "100%", "100%", "1fr 300px", "1fr 450px"]}
            gap="30px"
          >
            <Box borderWidth="1px" borderRadius="md" shadow="md" p={5}>
              <Tabs
                variant="enclosed"
                colorScheme={configs.template.checkout.tabsColor}
              >
                <TabList>
                  <Tab fontSize={["xs", "sm", "sm", "md", "md"]}>
                    <Icon as={FaList} mr={3} /> Dados da Compra
                  </Tab>
                  <Tab fontSize={["xs", "sm", "sm", "md", "md"]}>
                    <Icon as={FaCreditCard} mr={3} /> Forma de Pagamento
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel p={1}>
                    {/** DADOS DO CLIENTE */}

                    <Box borderWidth="1px" p={5} borderRadius="md" mt={5}>
                      <Flex align="center">
                        <Icon as={FiMapPin} mr={5} />
                        <Text fontSize="md" fontWeight="700">
                          Cliente
                        </Text>
                      </Flex>
                      <Divider mt={3} mb={3} />

                      <Grid templateColumns="1fr" gap="20px">
                        <Box>
                          <Text fontSize="sm">Nome</Text>
                          <Input
                            type="number"
                            value={""}
                            _focus={{ borderColor: "yellow.400" }}
                            isReadOnly
                          />
                        </Box>
                      </Grid>

                      <Grid
                        templateColumns={[
                          "100%",
                          "100%",
                          "1fr 1fr",
                          "1fr 1fr",
                          "1fr 1fr",
                        ]}
                        gap="20px"
                        mt={3}
                      >
                        <Box>
                          <Text fontSize="sm">Email</Text>
                          <Input
                            type="number"
                            value={""}
                            _focus={{ borderColor: "yellow.400" }}
                            isReadOnly
                          />
                        </Box>
                        <Box>
                          <Text fontSize="sm">Telefone</Text>
                          <Input
                            type="number"
                            value={""}
                            _focus={{ borderColor: "yellow.400" }}
                            isReadOnly
                          />
                        </Box>
                      </Grid>

                      <Grid
                        templateColumns={[
                          "100%",
                          "100%",
                          "1fr 1fr",
                          "1fr 1fr",
                          "1fr 1fr",
                        ]}
                        gap="20px"
                        mt={3}
                      >
                        <Box>
                          <Text fontSize="sm">CPF</Text>
                          <Input
                            type="number"
                            value={""}
                            _focus={{ borderColor: "yellow.400" }}
                            isReadOnly
                          />
                        </Box>
                      </Grid>
                    </Box>

                    {/** DADOS DO ENDEREÇO */}

                    <Box borderWidth="1px" p={5} borderRadius="md" mt={5}>
                      <Flex align="center">
                        <Icon as={FiMapPin} mr={5} />
                        <Text fontSize="md" fontWeight="700">
                          Endereço
                        </Text>
                      </Flex>
                      <Divider mt={3} mb={3} />

                      <RadioGroup
                        colorScheme={configs.template.checkout.radioColor}
                      >
                        <Stack>
                          <Radio value="1">
                            <Box borderWidth="1px" p={3} borderRadius="md">
                              <Grid
                                templateColumns={[
                                  "100%",
                                  "100%",
                                  "1fr 100px",
                                  "1fr 100px",
                                  "1fr 100px",
                                ]}
                                gap="20px"
                              >
                                <Box>
                                  <Text fontSize="sm">Logradouro</Text>
                                  <Input
                                    type="number"
                                    value={""}
                                    _focus={{ borderColor: "yellow.400" }}
                                    isReadOnly
                                  />
                                </Box>
                                <Box>
                                  <Text fontSize="sm">Número</Text>
                                  <Input
                                    type="number"
                                    value={""}
                                    _focus={{ borderColor: "yellow.400" }}
                                    isReadOnly
                                  />
                                </Box>
                              </Grid>
                              <Text fontSize="sm" mt={3}>
                                Complemento
                              </Text>
                              <Input
                                type="number"
                                value={""}
                                _focus={{ borderColor: "yellow.400" }}
                                isReadOnly
                              />

                              <Grid
                                templateColumns={[
                                  "100%",
                                  "100%",
                                  "1fr 1fr 100px",
                                  "1fr 1fr 100px",
                                  "1fr 1fr 100px",
                                ]}
                                gap="20px"
                                mt={3}
                              >
                                <Box>
                                  <Text fontSize="sm">CEP</Text>
                                  <Input
                                    type="number"
                                    value={""}
                                    _focus={{ borderColor: "yellow.400" }}
                                    isReadOnly
                                  />
                                </Box>
                                <Box>
                                  <Text fontSize="sm">Cidade</Text>
                                  <Input
                                    type="number"
                                    value={""}
                                    _focus={{ borderColor: "yellow.400" }}
                                    isReadOnly
                                  />
                                </Box>
                                <Box>
                                  <Text fontSize="sm">Estado</Text>
                                  <Select
                                    placeholder="UF"
                                    focusBorderColor="yellow.400"
                                  >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                  </Select>
                                </Box>
                              </Grid>
                            </Box>
                          </Radio>
                        </Stack>
                      </RadioGroup>

                      <Divider mt={5} mb={5} />

                      <Button
                        leftIcon={<AiOutlinePlus />}
                        onClick={() => setModalAddress(true)}
                      >
                        Adicionar Endereço
                      </Button>
                    </Box>
                  </TabPanel>
                  <TabPanel p={1}>
                    <Wrap mt={5} spacing={"10px"}>
                      <WrapItem></WrapItem>
                      <WrapItem></WrapItem>
                      <WrapItem></WrapItem>
                    </Wrap>

                    <Button
                      size="lg"
                      leftIcon={<AiOutlineBarcode />}
                      onClick={() => setIdPayment("boleto")}
                      isFullWidth
                    >
                      Boleto
                    </Button>

                    <Collapse
                      in={idPayment === "boleto" ? true : false}
                      animateOpacity
                    >
                      <Box p={5} mt={5} rounded="md" borderWidth="1px">
                        <Text fontSize="sm">CPF</Text>
                        <Input
                          type="number"
                          value={""}
                          w="240px"
                          _focus={{ borderColor: "yellow.400" }}
                          isReadOnly
                        />
                      </Box>
                    </Collapse>

                    <Button
                      size="lg"
                      leftIcon={<FaCreditCard />}
                      onClick={() => setIdPayment("cartao")}
                      isFullWidth
                      mt={5}
                    >
                      Cartão de Crédito
                    </Button>

                    <Collapse
                      in={idPayment === "cartao" ? true : false}
                      animateOpacity
                    >
                      <Box p={5} borderWidth="1px" mt={5} borderRadius="md">
                        <RadioGroup
                          colorScheme={configs.template.checkout.radioColor}
                        >
                          <Wrap align="center">
                            <WrapItem>
                              <Radio value={"1"}>
                                <Box
                                  w={[
                                    "200px",
                                    "230px",
                                    "230px",
                                    "230px",
                                    "230px",
                                  ]}
                                  h={[
                                    "100px",
                                    "130px",
                                    "130px",
                                    "130px",
                                    "130px",
                                  ]}
                                  backgroundImage='url("/img/card.png")'
                                  backgroundSize="100%"
                                  backgroundPosition="center"
                                  backgroundRepeat="no-repeat"
                                >
                                  <Text
                                    color="gray.300"
                                    fontSize="xs"
                                    position="absolute"
                                    mt={[
                                      "45px",
                                      "60px",
                                      "60px",
                                      "60px",
                                      "60px",
                                    ]}
                                    ml={[
                                      "30px",
                                      "30px",
                                      "30px",
                                      "30px",
                                      "30px",
                                    ]}
                                  >
                                    **** **** **** 1234
                                  </Text>
                                  <Text
                                    color="gray.300"
                                    fontSize="xs"
                                    position="absolute"
                                    mt={[
                                      "62px",
                                      "80px",
                                      "80px",
                                      "80px",
                                      "80px",
                                    ]}
                                    ml={[
                                      "140px",
                                      "160px",
                                      "160px",
                                      "160px",
                                      "160px",
                                    ]}
                                  >
                                    01/10
                                  </Text>

                                  <Text
                                    color="gray.300"
                                    fontSize="xs"
                                    position="absolute"
                                    mt={[
                                      "80px",
                                      "100px",
                                      "100px",
                                      "100px",
                                      "100px",
                                    ]}
                                    ml={[
                                      "20px",
                                      "30px",
                                      "30px",
                                      "30px",
                                      "30px",
                                    ]}
                                  >
                                    Natanael dos Santos Bezerra
                                  </Text>
                                </Box>
                              </Radio>
                            </WrapItem>
                          </Wrap>
                        </RadioGroup>
                        <Divider mt={5} mb={5} />
                        <Flex
                          justify="space-between"
                          direction={["column", "row", "row", "row", "row"]}
                        >
                          <Flex align="center">
                            <Text fontSize="sm" mr={3}>
                              Cod:
                            </Text>
                            <HStack>
                              <PinInput size="sm" focusBorderColor="yellow.400">
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                              </PinInput>
                            </HStack>
                          </Flex>
                          <Button
                            leftIcon={<AiOutlinePlus />}
                            onClick={() => setModalCard(true)}
                            mt={[3, 3, 0, 0, 0]}
                          >
                            Adicionar Cartão
                          </Button>
                        </Flex>
                      </Box>
                    </Collapse>

                    <Button
                      size="lg"
                      leftIcon={<RiMoneyDollarCircleFill />}
                      onClick={() => setIdPayment("transfer")}
                      isFullWidth
                      mt={5}
                    >
                      Transferência
                    </Button>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>

            <Box>
              <Box borderRadius="md" shadow="md" p={5} bg="gray.100">
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
              <Button
                size="lg"
                colorScheme="green"
                leftIcon={<AiOutlineCheck />}
                isFullWidth
                mt={10}
                onClick={() => setModalFinal(true)}
              >
                Finalizar
              </Button>
            </Box>
          </Grid>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>

      <Modal
        isOpen={modalCard}
        size="xl"
        onClose={() => setModalCard(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Cartão de Crédito</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={3} borderRadius="md">
              <Grid templateColumns={"1fr"}>
                <Box p={3} rounded="md">
                  <Text fontSize="sm">Número</Text>
                  <HStack>
                    <Input
                      w="20%"
                      _focus={{ borderColor: "yellow.400" }}
                      isReadOnly
                    />
                    <Icon as={AiOutlineMinus} />
                    <Input
                      w="20%"
                      _focus={{ borderColor: "yellow.400" }}
                      isReadOnly
                    />
                    <Icon as={AiOutlineMinus} />
                    <Input
                      w="20%"
                      _focus={{ borderColor: "yellow.400" }}
                      isReadOnly
                    />
                    <Icon as={AiOutlineMinus} />
                    <Input
                      type="number"
                      w="20%"
                      _focus={{ borderColor: "yellow.400" }}
                      isReadOnly
                    />
                  </HStack>
                </Box>
              </Grid>

              <Grid templateColumns={"1fr 120px 120px"}>
                <Box p={3} rounded="md">
                  <Text fontSize="sm">Nome</Text>
                  <Input
                    type="number"
                    value={""}
                    _focus={{ borderColor: "yellow.400" }}
                    isReadOnly
                  />
                </Box>
                <Box p={3} rounded="md">
                  <Text fontSize="sm">Mês</Text>
                  <Input
                    type="number"
                    value={""}
                    _focus={{ borderColor: "yellow.400" }}
                    isReadOnly
                  />
                </Box>
                <Box p={3} rounded="md">
                  <Text fontSize="sm">Ano</Text>
                  <Input
                    type="number"
                    value={""}
                    _focus={{ borderColor: "yellow.400" }}
                    isReadOnly
                  />
                </Box>
              </Grid>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="solid"
              leftIcon={<AiOutlineSave />}
              colorScheme="yellow"
            >
              Cadastrar Cartão
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={modalAddress}
        size="xl"
        onClose={() => setModalAddress(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Endereço de Entrega</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              templateColumns={[
                "100%",
                "100%",
                "1fr 100px",
                "1fr 100px",
                "1fr 100px",
              ]}
              gap="20px"
            >
              <Box>
                <Text fontSize="sm">Logradouro</Text>
                <Input
                  type="number"
                  value={""}
                  _focus={{ borderColor: "yellow.400" }}
                  isReadOnly
                />
              </Box>
              <Box>
                <Text fontSize="sm">Número</Text>
                <Input
                  type="number"
                  value={""}
                  _focus={{ borderColor: "yellow.400" }}
                  isReadOnly
                />
              </Box>
            </Grid>
            <Text fontSize="sm" mt={3}>
              Complemento
            </Text>
            <Input
              type="number"
              value={""}
              _focus={{ borderColor: "yellow.400" }}
              isReadOnly
            />

            <Grid
              templateColumns={[
                "100%",
                "100%",
                "1fr 1fr 100px",
                "1fr 1fr 100px",
                "1fr 1fr 100px",
              ]}
              gap="20px"
              mt={3}
            >
              <Box>
                <Text fontSize="sm">CEP</Text>
                <Input
                  type="number"
                  value={""}
                  _focus={{ borderColor: "yellow.400" }}
                  isReadOnly
                />
              </Box>
              <Box>
                <Text fontSize="sm">Cidade</Text>
                <Input
                  type="number"
                  value={""}
                  _focus={{ borderColor: "yellow.400" }}
                  isReadOnly
                />
              </Box>
              <Box>
                <Text fontSize="sm">Estado</Text>
                <Select placeholder="UF" focusBorderColor="yellow.400">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="solid"
              leftIcon={<AiOutlineSave />}
              colorScheme="yellow"
            >
              Cadastrar Endereço
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={modalFinal}
        size="xl"
        onClose={() => setModalFinal(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resumo da Compra</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box borderWidth="1px" p={3} borderRadius="md">
              <Flex align="center" mb={3}>
                <Icon as={FiMapPin} mr={5} />
                <Text fontSize="md" fontWeight="700">
                  Endereço de Entrega
                </Text>
              </Flex>
              <Divider mb={3} />
              <Grid
                templateColumns={[
                  "100%",
                  "100%",
                  "1fr 100px",
                  "1fr 100px",
                  "1fr 100px",
                ]}
                gap="20px"
              >
                <Box>
                  <Text fontSize="sm">Logradouro</Text>
                  <Input
                    type="number"
                    value={""}
                    _focus={{ borderColor: "yellow.400" }}
                    isReadOnly
                  />
                </Box>
                <Box>
                  <Text fontSize="sm">Número</Text>
                  <Input
                    type="number"
                    value={""}
                    _focus={{ borderColor: "yellow.400" }}
                    isReadOnly
                  />
                </Box>
              </Grid>
              <Text fontSize="sm" mt={3}>
                Complemento
              </Text>
              <Input
                type="number"
                value={""}
                _focus={{ borderColor: "yellow.400" }}
                isReadOnly
              />

              <Grid
                templateColumns={[
                  "100%",
                  "100%",
                  "1fr 1fr 100px",
                  "1fr 1fr 100px",
                  "1fr 1fr 100px",
                ]}
                gap="20px"
                mt={3}
              >
                <Box>
                  <Text fontSize="sm">CEP</Text>
                  <Input
                    type="number"
                    value={""}
                    _focus={{ borderColor: "yellow.400" }}
                    isReadOnly
                  />
                </Box>
                <Box>
                  <Text fontSize="sm">Cidade</Text>
                  <Input
                    type="number"
                    value={""}
                    _focus={{ borderColor: "yellow.400" }}
                    isReadOnly
                  />
                </Box>
                <Box>
                  <Text fontSize="sm">Estado</Text>
                  <Select placeholder="UF" focusBorderColor="yellow.400">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
              </Grid>
            </Box>

            <Box borderWidth="1px" p={3} borderRadius="md" mt={5}>
              <Flex align="center" mb={3}>
                <Icon as={FaCreditCard} mr={5} />
                <Text fontSize="md" fontWeight="700">
                  Forma de Pagamento
                </Text>
              </Flex>
              <Divider mb={3} />

              <Text>
                <strong>Cartão de Crédito</strong> em <strong>6x</strong> de{" "}
                <strong>R$ 120,00</strong>
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="solid"
              leftIcon={<AiOutlineCheck />}
              colorScheme="green"
              size="lg"
            >
              Finalizar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ContainerApp>
  );
}
