import { ContainerApp, ContainerNonFixed, Fixed } from "../../styles/styles";
import HeaderApp from "../../components/headerApp";
import FooterApp from "../../components/footer";
import {
  Container,
  Heading,
  Flex,
  Icon,
  Box,
  Badge,
  Button,
  Text,
  Grid,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineIdcard } from "react-icons/ai";
import configs from "../../configs/configs";
import { BiDetail } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
import { BsBag } from "react-icons/bs";
import Link from "next/link";

export default function MinhasCompras() {
  return (
    <ContainerApp>
      <ContainerNonFixed>
        <HeaderApp />
      </ContainerNonFixed>
      <Fixed>
        <Container maxW="6xl" mt={10} mb={10}>
          <Grid
            templateColumns={["1fr", "1fr", "1fr", "1fr", "200px 1fr"]}
            gap={10}
          >
            <Box
              borderRadius="md"
              borderWidth="1px"
              p={3}
              h="min-content"
              display={["none", "none", "none", "none", "block"]}
            >
              <Flex fontWeight="700" align="center">
                <Icon as={AiOutlineMenu} mr={5} />
                Menu
              </Flex>

              <Link href="/meusdados" passHref>
                <a>
                  <Button
                    leftIcon={<AiOutlineIdcard />}
                    variant="solid"
                    isFullWidth
                    mt={5}
                  >
                    Meus Dados
                  </Button>
                </a>
              </Link>

              <Link href="/minhascompras" passHref>
                <a>
                  <Button
                    leftIcon={<BsBag />}
                    variant="solid"
                    mt={5}
                    isFullWidth
                  >
                    Minhas Compras
                  </Button>
                </a>
              </Link>
            </Box>

            <Box>
              <Flex
                bg={configs.template.chart.bgBanner}
                p={3}
                shadow="md"
                borderRadius="md"
                mb={5}
                align="center"
              >
                <Icon as={BsBag} fontSize="2xl" mr={10} />
                <Heading size="md" color={configs.template.chart.colorBanner}>
                  Minhas Compras
                </Heading>
              </Flex>

              <Flex
                wrap="wrap"
                shadow="md"
                borderRadius="md"
                borderWidth="1px"
                p={5}
                align="center"
                justify="space-between"
                mb={5}
              >
                <Flex
                  h={"60px"}
                  w="60px"
                  bg="gray.100"
                  align="center"
                  justify="center"
                  color="gray.700"
                  borderRadius="50%"
                  mr={2}
                >
                  <Icon as={GoPackage} fontSize="4xl" />
                </Flex>
                <Box mr={2}>
                  <Heading size="md">Número:</Heading>
                  <Text>1293813</Text>
                </Box>
                <Box mr={2}>
                  <Heading size="md">Data:</Heading>
                  <Text>21/20/1929</Text>
                </Box>
                <Box mr={2}>
                  <Heading size="md">Status:</Heading>
                  <Badge fontSize="lg" variant="solid" colorScheme="green">
                    Em Preparação
                  </Badge>
                </Box>
                <Box mr={2}>
                  <Heading size="md">Valor:</Heading>
                  <Text>R$ 250,00</Text>
                </Box>
                <Box mr={2}>
                  <Heading size="md" color="white" userSelect="none">
                    Data:
                  </Heading>
                  <Button w="200px" leftIcon={<BiDetail />}>
                    Detalhes
                  </Button>
                </Box>
              </Flex>

              <Flex
                wrap="wrap"
                shadow="md"
                borderRadius="md"
                borderWidth="1px"
                p={5}
                align="center"
                justify="space-between"
                mb={5}
              >
                <Flex
                  h={"60px"}
                  w="60px"
                  bg="gray.100"
                  align="center"
                  justify="center"
                  color="gray.700"
                  borderRadius="50%"
                  mr={2}
                >
                  <Icon as={GoPackage} fontSize="4xl" />
                </Flex>
                <Box mr={2}>
                  <Heading size="md">Número:</Heading>
                  <Text>1293813</Text>
                </Box>
                <Box mr={2}>
                  <Heading size="md">Data:</Heading>
                  <Text>21/20/1929</Text>
                </Box>
                <Box mr={2}>
                  <Heading size="md">Status:</Heading>
                  <Badge fontSize="lg" variant="solid" colorScheme="green">
                    Em Preparação
                  </Badge>
                </Box>
                <Box mr={2}>
                  <Heading size="md">Valor:</Heading>
                  <Text>R$ 250,00</Text>
                </Box>
                <Box mr={2}>
                  <Heading size="md" color="white" userSelect="none">
                    Data:
                  </Heading>
                  <Button w="200px" leftIcon={<BiDetail />}>
                    Detalhes
                  </Button>
                </Box>
              </Flex>

              <Flex
                wrap="wrap"
                shadow="md"
                borderRadius="md"
                borderWidth="1px"
                p={5}
                align="center"
                justify="space-between"
                mb={5}
              >
                <Flex
                  h={"60px"}
                  w="60px"
                  bg="gray.100"
                  align="center"
                  justify="center"
                  color="gray.700"
                  borderRadius="50%"
                  mr={2}
                >
                  <Icon as={GoPackage} fontSize="4xl" />
                </Flex>
                <Box mr={2}>
                  <Heading size="md">Número:</Heading>
                  <Text>1293813</Text>
                </Box>
                <Box mr={2}>
                  <Heading size="md">Data:</Heading>
                  <Text>21/20/1929</Text>
                </Box>
                <Box mr={2}>
                  <Heading size="md">Status:</Heading>
                  <Badge fontSize="lg" variant="solid" colorScheme="green">
                    Em Preparação
                  </Badge>
                </Box>
                <Box mr={2}>
                  <Heading size="md">Valor:</Heading>
                  <Text>R$ 250,00</Text>
                </Box>
                <Box mr={2}>
                  <Heading size="md" color="white" userSelect="none">
                    Data:
                  </Heading>
                  <Button w="200px" leftIcon={<BiDetail />}>
                    Detalhes
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
    </ContainerApp>
  );
}
