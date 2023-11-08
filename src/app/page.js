import { 
  Description,
  Button, 
  Main, 
  Heading, 
  Text, 
  Box} from './components/Styled'
  import BrainBuild from './assets/iqbrain.svg'
  import HeroImage from './assets/hero-img.svg'
  import Image from 'next/image'
  import LogoImg from './assets/KIQlogo.png'
  import { FaFacebook, FaTelegram, FaTwitter } from 'react-icons/fa'



const Home = () => {
  return (
    <Main>
      <Box flex pd="5rem 0" bgColor="#eee">
        <Box pd="2rem 8rem">
          <Text size='sm' heavy>Welcome to Krypto IQ</Text>
          <Heading xlg italize>Learn and Earn in a Fun Way</Heading>
          <Text size='sm'>Learn and Earn in a fun way</Text>
        </Box>
        <Box flex jc="center">
          <Image width={300} height={300} alt='hero image' src={HeroImage} />
        </Box>
      </Box>

    {/* About Section */}
      <Box flex fd="column" pd="2rem 8rem" ai='center'>
        <Heading lg color='#eee'> Krypto <Text as='span' color='yellow'>IQ</Text> </Heading>
        <Text center size="sm" light color='#eee' width="50%">We are here to help you make money while you are catching all the fun on this exciting crypto space</Text>
        <Button small bgColor='yellow' color='#111'> Learn More... </Button>
      </Box>

      {/* Join Section */}
      <Box flex pd="2rem 8rem" ai="center">
        <Box>
          <Text>Join Us &</Text>
          <Heading as="h2">Boost your Crypto Knowledge</Heading>
          <Text>follow</Text><span><FaFacebook /><FaTwitter /></span>
        </Box>
        <Box>
          <Image src={BrainBuild}/>
        </Box>
      </Box>

      <Box bgColor="yellow">
        <Heading as='h1'>How it Works</Heading>
        <Box w="100%" flex style={{flexWrap:'wrap'}}>
          <Box w="50%" pd="4rem" >
            <Box w='20%'>
              <Heading as="h3" bgColor="#111" color="#eee" pd=".5rem">1. Join</Heading>
            </Box>
            <Text>Begin your earning journey with us by following us on twitter and joining our telegram channel to get updates and learn your way into earning your probably first crypto</Text>
          </Box>
          <Box w="50%" pd="4rem">
            <Heading as="h3">2. Learn</Heading>
            <Text>Read our threads, twits and channel updates to get good knowledge and understanding on crypto assets, defi, nft, blockchain and more</Text>
          </Box>
          <Box w="50%" pd="4rem">
            <Heading as="h3">3. Play</Heading>
            <Text>Keep Watch and join our learn to earn quiz and competitions, get the right answer while fulfilling all necessities</Text>
          </Box>
          <Box w="50%" pd="4rem">
            <Heading as="h3">4. Earn</Heading>
            <Text>Correctly answered our question? Drop your wallet to receive appropriately</Text>
          </Box>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box w="100%" flex as="footer" bgColor="#111" gap="10px">
        <Box w="50%" flex jc='left' ai="center" pd="2rem 8rem">
          <Image src={LogoImg} width={150} height={50} />
        </Box>
        <Box w='50%' flex gap="20px" ai="center" jc="end" pd="2rem 8rem" color='white'>
          <FaTwitter color='white'/>
          <FaTelegram color='white'/>
        </Box>
      </Box>
      
    </Main>
    )
  }
export default Home