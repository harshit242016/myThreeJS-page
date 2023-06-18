import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full stack developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Harshit Srivastava
          </Heading>
          <p>Full Stack Developer ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/harshit.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Harshit is a full-stack developer based in Bengaluru with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera and bike. I love exploring new cuisines,
          places, technologies and life.
          My quote "Dev for Life".
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Varanasi, India.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed High School from Lucknow, India.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed Bachelor&apos;s degree in
          Computer Science and Engineering from Noida, India.
        </BioSection>
        <BioSection>
          <BioYear>2021-22</BioYear>
          Worked as a Associate Software Engineer @Accenture, India.
        </BioSection>
        <BioSection>
          <BioYear>2022-present</BioYear>
          Working as a Full Stack Developer @Ather Energy, India.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link target="_blank">
            Programming
          </Link>
          , Playing Chess,{' '}
          <Link target="_blank">
            Photography
          </Link>
          , Travelling..
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/harshit242016" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @harshit242016
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/harshit242016" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @harshit242016
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/stayharshit" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @stayharshit
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Let's Connect
        </Heading>
        <p>
          If you need any assistance or guidance, feel free to reach out to me directly.
        </p>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
