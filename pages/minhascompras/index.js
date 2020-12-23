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
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import configs from "../../configs/configs";
import { BiDetail } from "react-icons/bi";
import { GoPackage } from "react-icons/go";

export default function MinhasCompras() {
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
          >
            <Flex
              h={"60px"}
              w="60px"
              bg="gray.100"
              align="center"
              justify="center"
              color="gray.700"
              borderRadius="50%"
            >
              <Icon as={GoPackage} fontSize="4xl" />
            </Flex>
            <Box>
              <Heading size="md">Número:</Heading>
              <Text>1293813</Text>
            </Box>
            <Box>
              <Heading size="md">Data:</Heading>
              <Text>21/20/1929</Text>
            </Box>
            <Box>
              <Heading size="md">Status:</Heading>
              <Badge fontSize="lg" variant="solid" colorScheme="green">
                Em Preparação
              </Badge>
            </Box>
            <Box>
              <Heading size="md">Valor:</Heading>
              <Text>R$ 250,00</Text>
            </Box>
            <Box>
              <Heading size="md" color="white" userSelect="none">
                Data:
              </Heading>
              <Button w="200px" leftIcon={<BiDetail />}>
                Detalhes
              </Button>
            </Box>
          </Flex>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
    </ContainerApp>
  );
}
