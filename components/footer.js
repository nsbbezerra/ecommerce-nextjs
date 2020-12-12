import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import configs from "../configs/configs";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { RiArrowRightSFill, RiSendPlaneFill } from "react-icons/ri";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      bg={configs.template.footer.bg}
      p={["30px", "30px", "64px", "64px", "64px", "64px"]}
    >
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(280px, 280px))"
        color={"gray.900"}
        gap={"30px"}
        justifyContent="center"
      >
        <Box p={"10px"}>
          <Heading
            size="lg"
            mb={"30px"}
            color={configs.template.footer.heading}
          >
            CONTATO
          </Heading>
          <Flex
            align="center"
            pt={"10px"}
            pb={"10px"}
            pr={"5px"}
            pl={"5px"}
            color={configs.template.footer.text}
          >
            <Icon as={FiMapPin} mr={"15px"} />
            <Box>
              <Heading size="xs">ENDEREÇO</Heading>
              <Text fontSize="sm" textAlign="justify">
                Av. Pedro Mariano de Sá, 1444, Centro, Pedro Afonso - TO
              </Text>
            </Box>
          </Flex>
          <Flex
            align="center"
            pt={"10px"}
            pb={"10px"}
            pr={"5px"}
            pl={"5px"}
            color={configs.template.footer.text}
          >
            <Icon as={FiPhone} mr={"15px"} />
            <Box>
              <Heading size="xs">TELEFONE</Heading>
              <Text fontSize="sm" textAlign="justify">
                (63) 3466-1267
              </Text>
            </Box>
          </Flex>
          <Flex
            align="center"
            pt={"10px"}
            pb={"10px"}
            pr={"5px"}
            pl={"5px"}
            color={configs.template.footer.text}
          >
            <Icon as={AiOutlineMail} mr={"15px"} />
            <Box>
              <Heading size="xs">EMAIL</Heading>
              <Text fontSize="sm" textAlign="justify">
                contato.nk.info@gmail.com
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box p={"10px"}>
          <Heading
            size="lg"
            mb={"30px"}
            color={configs.template.footer.heading}
          >
            MINHA CONTA
          </Heading>
          <Box color={configs.template.footer.text}>
            <Link href="/">
              <Flex align="center" cursor="pointer" mt={"10px"} mb={"10px"}>
                <Box as={RiArrowRightSFill} size="20px" />
                <Text fontSize="sm">Sobre Nós</Text>
              </Flex>
            </Link>
            <Link href="/">
              <Flex align="center" cursor="pointer" mt={"10px"} mb={"10px"}>
                <Box as={RiArrowRightSFill} size="20px" />
                <Text fontSize="sm">Contate-nos</Text>
              </Flex>
            </Link>
            <Link href="/">
              <Flex align="center" cursor="pointer" mt={"10px"} mb={"10px"}>
                <Box as={RiArrowRightSFill} size="20px" />
                <Text fontSize="sm">Minha Conta</Text>
              </Flex>
            </Link>
            <Link href="/">
              <Flex align="center" cursor="pointer" mt={"10px"} mb={"10px"}>
                <Box as={RiArrowRightSFill} size="20px" />
                <Text fontSize="sm">Histórico de Compras</Text>
              </Flex>
            </Link>
            <Link href="/">
              <Flex align="center" cursor="pointer" mt={"10px"} mb={"10px"}>
                <Box as={RiArrowRightSFill} size="20px" />
                <Text fontSize="sm">Busca Avançada</Text>
              </Flex>
            </Link>
          </Box>
        </Box>

        <Box p={"10px"}>
          <Heading
            size="lg"
            mb={"30px"}
            color={configs.template.footer.heading}
          >
            A EMPRESA
          </Heading>
          <Box color={configs.template.footer.text}>
            <Link href="/">
              <Flex align="center" cursor="pointer" mt={"10px"} mb={"10px"}>
                <Box as={RiArrowRightSFill} size="20px" />
                <Text fontSize="sm">Sobre Nós</Text>
              </Flex>
            </Link>
            <Link href="/">
              <Flex align="center" cursor="pointer" mt={"10px"} mb={"10px"}>
                <Box as={RiArrowRightSFill} size="20px" />
                <Text fontSize="sm">Contate-nos</Text>
              </Flex>
            </Link>
            <Link href="/">
              <Flex align="center" cursor="pointer" mt={"10px"} mb={"10px"}>
                <Box as={RiArrowRightSFill} size="20px" />
                <Text fontSize="sm">Minha Conta</Text>
              </Flex>
            </Link>
            <Link href="/">
              <Flex align="center" cursor="pointer" mt={"10px"} mb={"10px"}>
                <Box as={RiArrowRightSFill} size="20px" />
                <Text fontSize="sm">Histórico de Compras</Text>
              </Flex>
            </Link>
            <Link href="/">
              <Flex align="center" cursor="pointer" mt={"10px"} mb={"10px"}>
                <Box as={RiArrowRightSFill} size="20px" />
                <Text fontSize="sm">Busca Avançada</Text>
              </Flex>
            </Link>
          </Box>
        </Box>

        <Box p={"10px"}>
          <Heading
            size="lg"
            mb={"30px"}
            color={configs.template.footer.heading}
          >
            NEWSLETTER
          </Heading>
          <Text fontSize="sm" color={configs.template.footer.text}>
            Receba todas as informações mais recentes sobre eventos, vendas e
            ofertas. Inscreva-se no boletim informativo hoje.
          </Text>
          <Box mt={"10px"}>
            <InputGroup>
              <Input
                placeholder="Seu melhor Email"
                bg="transparent"
                _focus={{ borderColor: configs.colors.dark }}
                _placeholder={{ color: configs.colors.light }}
              />
              <InputRightElement
                children={
                  <IconButton
                    aria-label="Search database"
                    icon={<RiSendPlaneFill />}
                    fontSize="25px"
                    size="sm"
                  />
                }
              />
            </InputGroup>
          </Box>
        </Box>
      </Grid>
      <Box
        borderTop={`1px solid ${configs.colors.dark}`}
        pt="25px"
        mb={["0px", "0px", "-30px", "-30px", "-30px", "-30px"]}
        w={"100%"}
      >
        <Flex
          color={configs.template.footer.text}
          align="center"
          justify="center"
        >
          <Text
            color={configs.template.footer.text}
            fontSize={["xs", "xs", "xs", "xs", "sm", "sm"]}
            mr={10}
          >
            © NK Informática eCommerce. 2021. Todos os Direitos Reservados.
          </Text>
          <Link href="/">
            <Icon
              as={FaInstagramSquare}
              fontSize="30px"
              mr={"20px"}
              cursor="pointer"
            />
          </Link>
          <Link href="/">
            <Icon as={FaFacebookSquare} fontSize="30px" cursor="pointer" />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
