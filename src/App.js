import {
  Box,
  ChakraProvider,
  Grid,
  Heading,
  Image,
  theme,
  VStack,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="l">
        <Grid>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={14}>
            <Image
              width="55%"
              padding={10}
              src="https://readme-typing-svg.herokuapp.com/?center=true&vcenter=true&width=600&height=75&font=rubik&size=30&duration=3000&color=000000&lines=Përshëndetje%2c+My+Name+Is+Jodis!;እው+ሰላም+ነው%2c+My+Name+Is+Jodis!;أهلا%2c+My+Name+Is+Jodis!;Բարեւ+Ձեզ%2c+My+Name+Is+Jodis!;Salam%2c+My+Name+Is+Jodis!;হ্যালো%2c+My+Name+Is+Jodis!;नमस्ते%2c+My+Name+Is+Jodis!;Szia%2c+My+Name+Is+Jodis!;Olá%2c+My+Name+Is+Jodis!;ਸਤ+ਸ੍ਰੀ+ਅਕਾਲ%2c+My+Name+Is+Jodis!;Buna+Ziua%2c+My+Name+Is+Jodis!;Привет%2c+My+Name+Is+Jodis!;Talofa%2c+My+Name+Is+Jodis!;Halò%2c+My+Name+Is+Jodis!;Здраво%2c+My+Name+Is+Jodis!;Mhoro%2c+My+Name+Is+Jodis!;Hola%2c+My+Name+Is+Jodis!;안녕하세요%2c+My+Name+Is+Jodis!;こんにちは%2c+My+Name+Is+Jodis!;Здраво%2c+My+Name+Is+Jodis!;Сайн+Уу%2c+My+Name+Is+Jodis!;नमस्कार%2c+My+Name+Is+Jodis!;Aloha%2c+My+Name+Is+Jodis!;Bonjour%2c+My+Name+Is+Jodis!;שלום%2c+My+Name+Is+Jodis!;Χαίρετε%2c+My+Name+Is+Jodis!;Kamusta%2c+My+Name+Is+Jodis!;Hallo%2c+My+Name+Is+Jodis!;你好%2c+My+Name+Is+Jodis!;Здравейте%2c+My+Name+Is+Jodis!;Добры+Дзень%2c+My+Name+Is+Jodis!;Dia+Dhuit%2c+My+Name+Is+Jodis!;Ciao%2c+My+Name+Is+Jodis!;ສະບາຍດີ%2c+My+Name+Is+Jodis!;Kia+Ora%2c+My+Name+Is+Jodis!"
            />
            <Heading>Software Engineer | Brisbane, Australia!</Heading>
            <Wrap>
              <WrapItem>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt="linkedin.com"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg"
                  alt="kaggle.com"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg"
                  alt="stackoverflow.com"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg"
                  alt="www.codechef.com"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codesandbox.svg"
                  alt="codesandbox.com"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/dribbble.svg"
                  alt="dribbble.com"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg"
                  alt="dev.to"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/behance.svg"
                  alt="www.behance.com"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hashnode.svg"
                  alt="hashnode.com"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg"
                  alt="medium.com"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg"
                  alt="codepen.io"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg"
                  alt="hackerrank"
                />
              </WrapItem>
            </Wrap>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
