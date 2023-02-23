import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'

import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;

`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;

`
const Title=  styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem= styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 90%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>DAHEFI.</Logo>
            <Description>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum."  
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>Calle 11 # 7-19 Los Fundadores Guamal-Meta
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>+57 310 274 4489
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>herreraf.danilo@gmail.com</ContactItem>
            <Payment src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEhUSEhMVFRUXGRgaFxcYGR4dGBoWHRgZHRkYHx0eICggHR4nHhoXIzEhJSkrLi4uHR8zODMtNygtLisBCgoKDg0OGxAQGzImICYvLS02LS0tLS8vMi8vLS4vLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS8tLS0tLf/AABEIAHEBvQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABBEAACAQMCAwQHBgUDAwQDAAABAgMABBESIQUTMQZBUWEUIjJxgZHRBxUjUpKhQlNiscEzcrIW4fA0NXOCk7Px/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EADcRAAEDAgMFBgQFBAMAAAAAAAEAAhEDIQQSMUFRYXHwBROBkaGxIsHR4QYUFTJSQlPS8WJykv/aAAwDAQACEQMRAD8A3GiiiiIopC6uVjRpJGCooJZj0AHUmo3hfamzuX5dvdQyvjOlHBOPdRFM0Uzg4jE8jwpIrSR6S6A+sobOnI7s4NNG7S2gn9GNzDz845esa8+GPHyoil6KZ3XEIo2jSSRUaVtMak4Lt1wPE07Joi9oqFtu1VlJNyEuoWlyRoDgtkdRim8vbbh6uY2vYA4YqVLjIYHBXHjnaiKxUVEcR7SWlvIsU9zFHI2MKzAE56bU7TiERlMAkUyhA5TPrcsnAbHhnbNETyioS57U2ccfNe5iWPW0eosAOYvtJnxHhTiw47bTRtNDPFJGudTqwKrjrk91EUnRUVwjtBa3WoW1xFNpxq0MDjPTpS/FOLQ2ycy4lSJM41OwAz4b0RPqKjPv+25HpXPi5H83UNHXHWubbtDayQvcR3ETwpnXIrAqoHXJ7qIpWimL8UhAiJlQCYgRHPtkrqAXx2BNN+MdorW1Ki5uI4SwJUOwGQOpGaIpaioe07TWksUk8dzE8UX+o4YFV2zue7anF7xiCKEXEsqJCdJ5jHC4b2d/PIoikKKi+EdobW61ejXEc2n2tDA4pS44xAjSI8qK0ScyQE7pH+c+A86IpCiq5D244c2dN7AcAscONlHUnyFKWPbKwmkWKK7gkkY4VVcFifIURT9FM7XiMUjyRxyKzxECRQclCRkA+G1LXE6orO7BVUEsT0AHUmiJaiq5a9t+HyOscd7AzuwVVDjLMTgADxJIFKWfbOwlcRR3kDuxwqhxknwFEU/RTG64nDHJHFJIqySlhGhOGcrgtpHfjIrp+IxCVYDIolZSypn1ioOCQPCiJ5RUa/G7cLK5mjCwtplYsAI222Y9x3HzptZ9qrKVJJYrqF0iGqRlcEIvifAURTdFQFl2wsZiyxXcLlVZ2CuDhFGWY+QFe8P7X2M8ixQ3cMkjZ0orgscAscDyAJ+FEU9RUDbdsbCSQQpeQNITpCBxqLeGPGjiHbCxgkaKa7hjkXGpGcBhkAjI9xBoinqKjrbjEEjrEkyM7RiVVB9YxN0cD8p8a5PHbblyS8+MRxMVkcsNKspwyk9xB7qIpOioi27SWkkL3EdxE0MftyBgVX3nupzd8UhiCNJKiCRlVCxwGZvZA8zRE+ooqJPG4/SxZgM0vL5jEDKoucLqPcWOcDyNEUtRTDi3F4LZA9xKkSE4DOcDPhmmEXa+xaJ5lu4THGVDuHGlSxwoJ7s0RT1FQFt2xsJFdo7uFljXVIQ4IVcgaj4DJFKcK7VWVy/Lt7qGV8FtKMCdI6n3biiKboqCh7W2Ll1S7gYxqzOA49VVBLE+QAJPupO17a8PkdY472BnY4VQ4JJ8AKIrDRUZa8dt5DGI542MusxgH2wjaXx46Tsa9l41brzdU0a8jHOy2OXkAjV4ZBB+NEUlRUbwjjdvdKWtp45gpwSjA4PnjpUlREUUUURFFFeURQnbb/2+7/8Ahk/4mqP2e4ZcPDw69uhbQW9lAJVeMsZHj9GwNRIAUY3I376064hV1KOoZWBDKRkEHqCKSksI2i5BjUxadHLI9TRjGnHTGNsURYx2S4o0d/b8QkhuI/TXljneRGWIrIwNtpY+rkBQNuteJfRx8Ob8K1mk9Nm5scjMJzNz/wAErpIbVpx8AK2eewidBG8aMi6SFKgqCu6kDuxgYpBuB2xl55t4ud15mhdefHOM586Isn+0S+a4vZmiiuJDYLHyHijZkW6V1kk1suwwoUb9N61ex4jHcWizhgI5ItWrOwBXffy3pza2UcerlxqmtmZ9IA1OxyzHxJPU17a2UcSCONFSMbBFACge7pRFmfBL30H0KASWV5bPKI4XjAFwurVhzgkMQPaYBeprnsTNcK9wFksVh9PuNayg84rzvX0nUB0zjbrWiWnZ+1ifmxW0KSfnWNQ2/XcCkZOytkzF2tICxOosY1yWznOcdc70RZ5xS5jSbjRcWzPrj1JcEjVbcgbLj1vb6Y7z4077N8RSPiMUk+i3EvC4NKu2FBErFkDOckqPE5rQb3glvM4kmgikdejOisR8SK64hwiCcKJ4Y5Qvs60DY92RtRFjtmXa3sXh0EycWuGiL+wwJkwxxuV613fozWXGJptKXBnt454Y1IRI45o/X8WDxkkt+X3GthPDYcRjlJiI5jGkYQjoVH8Pwr0cOi1vJy01yALI2kZdRnAbxG52PjRFRbaWB+NWhtWjYCyk5hiII06l5eor8cZp52yZF4nwxpioizOMv7HNKro67avax8atXDuDW9vnkQRRava0IFz78Clb/h8U66Jo0kT8rqGGfHBoizLtFLYE2rW2gW44mnpLb8gy6T62SdGM942zmkeNSRs3H2gKGP0SEMUxpMmiXO42LVqH3VByuRyY+TjHL0DRj/bjFJw8Ft0iaBIIlifOqMIAjZ2OR0O3jRFktkstrc8M4fJqeITie1kO/wCC0L64ifFHbbyI8q0X7SEH3Xekgf6EmNv6TU3Jw+JihaNCYzmPKg6DjGV8NtqVubZZEaORQ6MCGVhkEHqCO+iLN+392ptbGwCSOLnltMkCFpDbxoGfAXfdtAz4ZqAk4iz8DktWVlktLqGILIpDCMzI0GpTuBpIXx9WtiXh8QcSiNdaroVsDUE/KD3DypKfhEDl2eGNi+kuSoJYp7BPjjAx4URUbgExXit3NfvBBJb26qAnqxtAzaucWY74YFfLfxphx64SW74u8brIo4YoLIQVyeYcZG2cb1pdxwuF21vFGzaCmplBPLb2k3HsnwpO24LbxxtFHBEkb51oqAKwOxyAN9vGiKrdgJLgxwrNJYtHyV0rEDzfZGNWWIO3XakuDXsdtLxm4kACwzBzsM4W2jOB5noPfVpsezdpC4khtoY3GcMqKG367gU4m4TAwkVokIlIMgKjDkYwW8TsPlRFkX2e37299BJLFcRniCuLhpY2VGuSxkiKE9Rp1KAPzVslvcJIupGV13GVIIyCQRkbbEEGk7uwjkVVkjVgpDKGUEKwBAYeBAJpHgfCY7WFYI86QXbfclncux/Uxoir3ZyJfvTifqjY22Nun4C/Ks24Ssr2fDYZ+SlpLd/64B5iyKzMik9BqYac1ucVoiu0iood8a2A3bAwMnvwKb/c9vyhDyY+UCGCaRpDA5Bx0znfNEWR9u+IPNfXFxFDcSGwEa27RRu0YmVhJPrZdhlNK+4+VSPaiN73iNncWUmmYWLXNv8AlZta4Rv6WDFT761C3sIo1ZI40VWLFgAACW9onxJri14VBGVMcUaFFKqVUDSpOSox0Gd8URZHwZ4r+zvpJJltDLfo6GbGkTKqERupIyMgjHlUjxjjbtBxO1mS1aVbNnNxbeyy7gI4JJUjJIGo9/StJk4Nbsro0ERWRtTqUUhn/MRjc+dcQcBtkjeJLeJY32dFRQrjwYAb/GiKtwR3I4dOZ1twnoj6DGDq/wBI+1nbp4d9MfszluPRrVZJLIw+jroRAfSM6BpzliM41ZwKv7W6lDGVGgjSVxtpxjGPDFRtp2Ys4nWWK1gSRc6XWNQwyCDggbbEj40RY/w/mta2UU3JjtJb6T8YAmVZEmdkUnoNRBAI8D41Y4ZbleKcU9Gks09e3z6SCSTydtOGG3jWjNwiAx8kwx8rOrRpGnVq1aseOd8+NNrvszZyuXltYHc9WaNSTgAdSPACiLP+11jLJxb0i0b8e2tI5o1U+rKokfXEfEOmQKg7W/SaxincaYX4xrkD9FRhKcP3YDFevfitph4dEjB0jRWCBAQoBEY6IP6R4VyOFw6Hj5MeiQkumkaWYnJJHQkneiKh9spbFrXivougz+jj0ho86Tt6gJB0asZ86gPtBl9LkS0WK4lFvahwYEZ9N26KYdWnoAozv3MK1eHgtusTQLBEsT51RhAEbPXIxg91L21jHGWaONULkFyoALEDAJ8cAAURRvZLjXpdlDc/xMnrDwkAwwPh6wO1UHs5x+4aayla+Lvc3NxFLakJhI05mnAA1Lp0Jueur56jZ2ccQKxIqAksQoABZjljgd5NIQcFt0lMyQRLKc5kCKGOeu+M0RVP7VywSyKFA3pkOkyewDnbVuPV8d6je2ss7cKk5z2ryekW2PRwdGOdHjUCxPXPf0rQuJcNhnXRPEkqg5CuoYZ8cGmsHZy0RGjS2hVGKsyhFALKcqSMdQRkURVXtzHcDhV96SsAPL9Tkhun8Wc/DFKxTXJtLpZZLNz6LJyxbAiTVy265Y+XTvq6XdskqGORVdG2KsMgjzBplw/s/awNrgt4YnxjUiBTjwyBRFS+yM/DTbcKU8prjQOQE3cPo/FyF3A9rVq2qT7PxL95cV2Gy2uNht6ktWS04JbxO0sUEUcje06ooY567gZ3pzHaIrO6ooZ8a2A3bAwMnvwCaIsmsl5XB7G/AObO6ndsDJ5LXUyTD9Jz7wKQu4s8LhvJxgXfEYbmbV0ELSnSG/pCaR4YxWtx8MhWIwCJBEdWYwo0HUSzbdNyST767exjMfJMamLSF0EDRpAwFx0xjuoipnA5on45cm3ZGQWkYcx4K6+Z6uSNtWnOPKr9THh3C4YAVgijiBOSEUKCfE460+oiKKKKIkpWwNvIfM4o5I8T8zRcdPiv/IVG8dvmgieYYKINTDBJwOpGD3da44kCwJ4DXroXXQJ2xzUlyR5/M0ckefzNVbjXasQ8P9MXSzNgIM5UsTj342JqGuO2l0h4fGUh5l1pLDDYVWdQmPW64Od6sosNVge3Q77bJ0N9FXUeKbi12o8dse60Lkjz+Zo5I8/maoF92yu5ryS04fFExizqaUnfBAbABHeQO+pi/wC0M1rw43N2iLcDI5an1S5YhB1O2ME71I0XiJ1MWm9+CiKzTPDbssrPyR5/M15H1I8MYqofZ72slvhMs6qkkZHqqCPVPiCc5yCKuCe03wqD2Fji12qkx4e3METHoPE0ckefzNey9V9/+DUX2m4uLW3abGo9EX8zHoP71W5waCToFdTpuqPDGCSbJ/MVXdm0jxLY/vXSBSMg5HiDXzxxji1xO5eZ5CTuM6guPLuA91SnZPilxExZHkC9CNLMGznbAzg9+a89/aTGAucLcx16r6Wp+F6jaWbvAXboMcp19FuLBR1bHvauxEPE/M1m6zlxzMuQd8nPXzz0PlUrwPi7RuFJJQnBHXHmKw0e32OqBr2QN8z52+a8yp2U9rSWmSNkK6ckefzNER6+RxXYNcQfxf7jX0C8pcXM+hWY9FUsfh//ACoA9pD+Rf3qY4u2IZT4Rv8A2NZ/YASamZiqrgZA3JOTge4as/DxrbhaLHsLnDaF52NxFSm9rWbQVaP+pD+Rf3o/6kP5F/eob0OPP+qSMnov8Izh+uNJIwO/Oa99ATb123GfZ6b4GfjV/dUd3oVm/MYnf6tUx/1IfyL+9H/Uh/Iv71CCzi2JmYAk9R0xgEkZyBkgfM91IX8KomtXYkFQykAEas46HwA8iCK6KFEmI91F2KxDRmJ9Rz9lc+EcT52oYAIx0qUQ5FU7sJNqeb/6/wBzVvi6fP8AvWHE0xTqFo4ey9LB1TVoh54+hIXB3YjfAx89/wDtXXKHn8zQntN8P812aoWpRlxeqriNQ7vjJVT7K9xJJAAJ2G+TTLjHHRbLrlhm0ZwXUhgvvw2R1qJ7SRuwdYgxIuImmAzqMZxoOOpUEfMeRrziistxfvICLcwKDqzpaTSNOPEjy8fdWhtNtp++z62WN1Z0kDf4D92vlf7XtPDbqOeNZYnLI3Q5PyPgR4U75I8/mao/2ShhbSE50F/U9+PWx+1Xyq6rAx5aNiuw9TvKbXnaEhImASCdt+tLg1xN7J9xpnxZwsEjEMQqMSEyGwBnAI3zVRMCVeBJAC9ficQJUyICMAjIzknA/fFPhWKwXTqkMzYZjNholwHVQ2dQOeuxx8MVqPEWIKYacKVb/TXUdQ0aQRpO5BbrttWehWe8HOIgxt2Eg6gaEG+h2FbK2Ea1wFN06i4IuBMREzfSJG1TVFV1fSWQyEsjIuBGoX8QhfXbfOCTnSM42yc529e5nZdIV1aNWLMFwJHC4UJnqrE6jjpgDxq/NwVPcH+Q8+uU6SYVhoqCklnxyhr1AkmXAwY+oxtpLn2dONtz4ZRgll1EyGXVtoUKSh9X1c6Vx1znLA58sUzcFwUCRMjrrnwVjoqsiS5WPSeYZOWzggDJbl55ZYDSGEhAHiPdXcUk5cxpzuW2PxJFCsnXWBkDORpxldjnrjFcz8FI4cxMiOuo1OyVY6Kj+FtJhklyWRsByMa1wCreGcHB8wakKmqCIMJte3iRI0krBEUZZj0ArL+N/a6dRWzhBX+ZLnf3IMY+J+FMvth4yZZfRkcaISvMTUMtI4ypC5ydIG/hkeNUrh3CnljZ0Vm05BCxs24AO5UYFb8LQpubmfv8ufMEHlfavPxNd4dlYrXB9qt8DlliYeBQj9w1Xbsj9o8N2whkXkTH2QTlGPgrYG/kax2PhsrprSGVk39dUYrt13Axt3+FNZLKUJzuVKI9iJNDBOux14x1781rrYSjECxWelia03k+C+pRXtVL7NO0BvLJWc5ljPLkPiQAQ3xUj45q214zmlpIK9Zrg4AhFcs2K6rNPtkv5lt1ity4Y5Z9P8sDBx4kE9P+1da0uMBM9NpBqOyjf7eZtcgXuQLpz2t+1K2s5OUi+kSD2whGF8tW4zURw37Z4XkAmj5KHY5yzD+rUPVI8utYgte1qFFsK2lDCS4Zp2HZyiDPOeS+vLG+jmQSROsiMMhlIIIp3XzB9nPE5YryNYyxQnU6AnJA/L5k4GO+vpuNsgHpnuNZ6jAwxKhkqAZnCASQDOsRPERP3SlFFFVriSuOnxX/AJCuLu3EiPGejKVPxGK7uOnxX/kK7NEWB8BspbmeLhbg8mCeR3/2jGoHy2I/+5q2cSYS9oYh/Bbx5by0xs392StLSBQSQqgnqQBk/GgQLnVpXUepwM/PrWt+Kl0xsPm65PiszcOQAJ2g+A0HgsS7X8UsLki5tOfHeFlOkKRk7ZJxsCB3qc9KcdpL66u3s7MxmeWGNJLiMbapDglWPTZMZI73PhWxraIDkIgPjpGfnXQgUEsFUE9+Bn510YoCIbpMSd/gLcFE4YmZOusCFlvYu7lj4xMtxD6O10hfl5z6w9bIPniQ1qie03wrkwrqDaRqHQ4GfnXSH1m+FZ6tTOQYiwHkr6bCwRMr2Xqvv/warnbWTlRx3GlmEL6iB46GCsfIMVqxy9V9/wDg0ncQq6lGAZWBBB3BB6giqnCQtFJ4Y8OcJG0bwbEeIJWTnthbHA5bDC6FDBHVVDhg2C43G+3fkbilI+0lvLkBNtIA1iMkgvIZFGCMBtanV3EAY76fcY+yxWctbyhQeqyA7e4jr8R8ad9nPs2SFtU0pY9wQkD4nqfdt8axE4o2DRPHT3X0jj2S2mXtqOndtm3/AB1trPIpvZXmVRmBBDSkCNlCaXdnQ4BAJAKqR5ZzUknEQz6VQjOQmNPVlIGe/YkkY8fKnsvZU59WQY8xv+1SPCeBLCdZOt+49w9w/wA159M9pVHZKjWtG0/Q5ieWzeIlebUfgwC5pk7uh6mTxUvEuAB4ACvIP4v9xrsVxF/F7zXvLyUy45/6ef8A+J/+LVk1txWWMaY5GVc9Btvtvnr3CtZ42haCZVGWaJwB4kqQBWPHh0/8iX9DfSvV7PLMjg6Ndv3Xjdp03ue0snQ6Tw3K28EvZHiDM7btIM9FUKFIGAM7lidsnyp9DJJsNMo29ksFIOGbScDSW2yAoPwqjJa3K+zHOvuRwP2FAtLrb8Obbp6r7e7bb4VodQaSSCPRVMq1A0AgmNvvqCr1GHLqrB1LZJJbGcBQvdg7M22W9wpvfRcyPDhsEOcltg6Z0926DPXOOuwqn8i7/JP+l68a2uiMGOcjvBVyD+1RFCDIcOvFdNUkQWE9cgrf9mL5eb3J/dqvsXT5/wB6on2aWsiNMZI3QEIBqUrkgsT1q+RdPn/evPxxBruI4ewW/s2maeGa08fcrlPab4f5qv3PGnQsTgqJHTAHrKAuoPjO4HeNv8VPofWb4f5qDks7gmQgoMl9Awuevq5OncEdQQeg3qinl2q+vmj4Z8EjecSids6ZVkTJDJjVoDYY7HDLqHsn34qO4nbRzoTO0z8to/w3OkDWQAzBOqjrnfpjPWpR7G6L+1HpGrB0qSCSdLYwMgDIIyM5pVrS4JO6AEDAGOoUgg5ByNWD7iRVrSGxB9ftzWdwc6ZBvw4bb7La+Nkmt8ts3JOnlpGSoRcY0gsQd/AHHiakeD3plTUwIOSM7YYZOCME4+NMIbG49XUISBp1LgYJ/iZTjIHQhTnbIz0NPeEQyqrCXTqztpxg7AE4AGMnJxvjNVuyxxsraZfmgzF7R5bfKykZvZPuNczSaULdcKT8hXUvsn3GuZo9SFfFSPmKqWkql9j+0y3Cu8kMACRxy5t8yFS+fwyoXUJBjoM9am5u1dqqI5dsPzAoEUhfMZAkBQKWGnO+RVetuxVwkBTnxK6wRwxmNGQMqSKzcw68ksF05GMBmx1p9wjsrLG8bvJF6hutkVsfjiPGNRJGkoe85B7q0PbRJJB8By5b1WC/QqYPaK21RoJC5lVHTQjuNDnCMSqkKpPQtgbGmV52ug5dyYHDywRTSBSrBX5YOrSxADgMACVJxmkOF9n7m2aLkywFeVBFMHR84iyNUZDDGpSRg9Dvv0plD2LmEbQGaPlJb3EFvhDrxMMBpTnBKjA9XGeu1RDaW/ry612LpLtyn17SW/NSBnxKwXbSxUMy5CF8aQxHRScmmr9tbMZzK4wCc8qXGkHSzZ0YKqdi3Qd9NR2Xm5v+rHyXlinlXQeZzY1QaUbOAhMancZG/XOyknZhzCI+YuRbzw5wesrKQevQYoG0t/rz4ck+NL2/amL0qW1kOl1kVIzpfS2qJHA140BjqIC5ycCmt5xeOa1zI+Fd3GY1m04R8AO2kGI50htWBnUN6TPZWczktLGLczW85AU80vAkQVck6QpaME7Zxt5htxDsXO66Vmi0n0jKurlVaWUyCRQGGXGy5PTqPAiyk6BmjTQkHjBABB5Gy7LheFPdlrSSKIrKsaesSFRi2AQMg57856bVPUlApCgHqABt06UrWdjcoj3v6m58Va92ZxdAHAaLA+22FuLozKHCykjAfUpYeoC+AoVhvgE+z41zJAY5bQvKkUEEcRcCUBlbeVxy86y7FgPZ39WrP9s3ZmSRVu4F1BRiZVHrED2XP5sbjyzWR3V80rmRzqZsZPwwP2Arfg2w2Z1J8J2AWG+8Te5JErBiHQ6I3dTqrteSJLl7wJENGObHcBiMeyFgRiDkHcDA9o9a57RcQCtcTpEn4gkjWRboSKY5AUBEQPTQRhcYXbpiqLzKX4fZSTyrDCheRzhQP3PkPE1qcBvt4x7/AG4KhtQ6AX64LXPsGQ8q6b+EyRge8KSf2ZfnWrVAdiuz4sbSO3Bywy0jeMh9o+7uHkBU/XmVX53ly9Gk3KwBFMuIcPjmXTKgYd2eoPiD3V5DxOJ5ngWRTLGAXT+IK3Q48POuoeJRs8qK2WhxzB+XIyP2qsGNFItDhBEhZN26+ydcNPZHT3vCRkY7yuNwe8jesuPArnWE5LEnoV9ZffkdB78V9NcN7UW9wyrCztqzpPLcKcf1FdPd40nd8Qs7Vyp0LI41FI0LOy/mKqCcedXtrOBvdWtNNtItA+IaGbeIOwbMpba25VL7I+x626NcyetK+ykjZQOun3n+LvxWmCmHDeJwzRc2F1ZBkEr3EdQR1BHgaSbj9uLcXfMHIbBD743OB+9VPdmcSqWBwaA4yd/20F9gsNFK0Uyl4lEsscDNiSQMUXxC+18qe1FSXJGdjSfJHi36j9aWpnd8QiixzJETPTUQK4SAJKk1rnHK0SeCX5I8W/UfrXnJHi36j9aTtL1JBmN1ceKnNORQEG4XCCDBEFJckeLfqP1r3kjxb9R+tK0V1cSXIHi36m+tdJGB0ruo+DisTytCrgyKMsu/T39D1HSuEgaqQa4gkCY14c09Zc7GueSPFv1H60hxG85S5xknpUZ9+N+Vf3rJX7Qw1B2Sq+DyJ9gVNlCo8S0Ka5I8W/UfrRyR4t+o/WoX79b8q/vR9+N+Vf3qn9YwP9z0d/ip/la38fUfVTPJHi36j9a95I8W/UfrUL9+N+Vf3o+/G/Kv70/WMD/c9Hf4p+Vrfx9R9VNcgeLfqb612q42FQY4435B+9TMEoZQw7xWjD42hiCRSdMa2I9wFW+i+n+4JQiik3Y5wMe8/SvMP4r8j9a1KtKfGvcUlh/FfkfrRh/FfkfrREp8aPjSeH8V+R+tGH8V+R+tEShWvQKRJcbnSfIAg/3pVTneiLh4gTnf4Ej+1eckeLfqP1oZznC426k/SjD+K/I/WiI5I8W/UfrXvJHi36j9a8w/ivyP1ow/ivyP1oiOSPFv1H60ckeLfqP1ow/ivyP1ow/ivyP1oiOQPP4kn/NLUhlhudJHkMf5pbNEXtFIEsSdOBjbcZrrD+K/I/WiJWiksP4r8j9aMP4r8j9aIlaKSw/ivyP1ow/ivyP1oiVopDUw9rBGcbAj/NL0RFFFFEXhFUfj/wBl9jcsZApgc9TFspPiVO2fdirzTNeIRmQxBxrAzj/zbPlUmki4QszbJWcxfYrbg5a5mYeGFH71dOznZS1sgRbxBWOzOd5G8ix3x5DAqdzXtdc9ztSotY1ugXgFe0UVBSVBuOyhuL+7mYPCwEBt7lMB1cK2oA/xL0DIdjTzsvZXSy3zXSKHkMel09iQLEV1DO4J717quNFdlFnnYKzliEEco4irKGDI+n0Yddtt8eG9Pmhns7i7kWB5hctrjmQB2jYRhRG6FgxUEZGnbGeh3N1opKKkdkbe5ea9nuYDbNKkKcvYoxVXzNqBIydWCOoCjOdqivu+6bh8fC/RZFkVkVpSV5HLWTPMDA5OQPZxnPzrS8V7SUVZ4rZSNxKylVCY0ScOwxhSygKD76s9eCva4iacQn5cUjgZ0IzY8cKTj9qz2KVw0DMFluLg6syDUFjLYUKM4GfWPlitMNZL2gvyLx3i9QRnQpUDCgDG3cO/pWDHHLlcT1tO7Sy97sRveF9MNvEzvGgadsZiCd8eBl7adYuJSmMhYVUmTHs7KNR/XU1D20hOzJIuWATK+0M41DHdmoLtHw9La2SOLLPOwLuerAbgeQyRROIhexxkjlWkeWPiU9Y+8lyMj31S19SmS0EC8xEj4r+gEnjK1OoYfEtbUdJhpAOhIZaTrdzjF9nFWTiPaqGJnjw7On8Kjqep38hua7ftTAsMU7FgspIAxkgg4bOPAiqVbT4t7m5c/iTMYl8fW9aQj4EDPd8aVt7YPPbWz+xDHqlB6AkmSQH5qp9xqQxVU6RfTxMD0vyUT2VhmiHT8MyZ1hkugf8AYtHidyt/DO08UxlGlkESliXGMoOrY7tt9/GkuztlbvI17Dry+oYbYKc+sQPP3+NVC5uyyXU/89wieOnVrPyAQfGrv2ZKrGIkG0aqGbbBkIy4HmNs++p0apqPAfBiSLc45WB+qz43CjC0nGlImGkTaIGbn8RA87Qlu0Psr7zVW4hxBYhvux6D44Hu328+6rT2h9hfeaw3tpxeZeIRCNS5SVSIx/GRpCr8iSP94NeP2hhDie0C3cyd2k9fNYqNXu6APH5q0dp+0V3aKs3JjkhyBJuwZCSAoyTvnP5anuCcVS5hWaPoeoPUHY4PzHzqhdo+Gw3tvPdxxzwTxjMkbqyh2A9nB2LdwI78VLdk+HTw2JWPIkLJnpnA068Z2yN1H+2sFXDYf8sCLVA6DNtY4uBAnUG42Srmvf3h2iJ6sPJXUMM4yM+HfXVVM2N2up1d9b6AzYjztCBnHTAfOVzTie3uGZCzTrpmYvpaMLyikqqVB3IGY8ht+p3IFee6gBEOB5cugrg/grHVq4Z/pJ7v81Qez88kiu8jBhnShGMMq7GTYfxHPlsMVfeG/wCknu/zXvfh9uStVadzfcrHjTLGniu7qZY1aRzhVGSfACq1ddurVHjQkkyMV9ygD8Q/05OPn4GrHxGINFIp3BRgfcQawGxiWWJ7xpQrhSwjZSV5ecaQ2dmHh5+dfWsFPIcxvIA1iTpoCdV5rGvdVFpYAS6BLgBqQCRsW6ff9tjPpEePHO3zr0cetj0nj/VVB4dcp6PGOYgja3ZWBmUAZL4PJO5YDSR8KUteQCCTarGnKKOrLzzuobWM5OxJII2r5R/4hexzmup3BIs6ZgkRzJ2axfTX6U9jUgD+47oi+wbNTu1AknS97HHbf+fH+qvfvqD+cnzrPLGNY0ClrRhl+czOjPpOdJjIPhjp39acve5OpHtiOUoiEjICXwMiUZHrj1sZwKme34fGWW758B53df8Ao+LgjuxGT8OaN9t8brb7x8N+C0KG6R/YYNtnI6YPn0paH2V9w/tUB2XziRttLaM6fYMun8Qoe9c99T8Psr7h/avew9bvqTakRImCvBxFLuarqczH09xoV4ntN8P80wv+OQQtokkAbrgAnA8TjoKfp7TfD/NVqN2t5ptcDyCVwUZBnIIxpbwx8q7VcREecE+gWSq8tiPOCU8vu1VrFEJpJgELFV2JLMOoUDc/CkLLttZy5Ec2cAE+q22SRvt126VUEikhmgvvR3miRZYzGi62hcuCGC9T0K5HTNI8Njknv5ZjZywxycnZkKhgH3YjHfjceVViq4080Xjw91nNd+UH5HrwWj8P41DMxWNwWAzggg48RnqPOm8vae2UkGUbZ3AOMjqAcYJ8qQ7RWhaSDlggkuC6j2VKnqR0GcVEXjP6EbUWriRVA29kYPtau/xqD61RsjdN4N7C3DXipVKtRsi1tsG9gY148feLkzAoSOhXP7UsvSm0Y/CAP5B/anK1sWtRvFLzkwyy4zoDtjx0jOKyeL7RuISPpjEZLdEWMsf75PvrT+0//pLj/ZJ/xrIewXERC8geOUpKojMsYOqMnoQR4/4rLXcQ9rQYWDFvcHtaHQCpibtpxNNYkEaFF1EPHpOk94BO/fXn/XHEs41Q7IHPqjoRkd/WndrwUxyXhmdrmSARrEWRpSFcagTHnJxnHlSdz6Onpt0LcERxwJy5EKrzmO50dVBGDgVS9tfUVIF7EbhzG4nxVYzgSXO27dxO4Hd1MKKH2m3/AOaL/wDH/wB6dp294iYWnBi0KwQnQM6j4DVmmdjbx3Ecdw6IojkczaVCjGBpXHhnAApvxvQLC3cRKslxLK+QACERsKB/as1HFuqOe0E/DM8wYHmL+IlReysymKjqmoka7hfTYTl5zuK1fspxKS4soJpSC76S2BgZ5mNh8KsdVH7Pv/bbb3L/APsq3V67f2hejRJNNpO4eyKKjeOcTW2gedlLBRsq9WJOFUZ2ySQKg7ftg3pUVnPbmKaRumsMvLMcjq4I67xsunrny3qSsVuqocR4RyWMyNq3yiH2tXU/7gOuOppF+2krXUtpBaGVogzM3MVRpUqD17zq2FME7XrOXnNtzI4niSEhtMhlkVCsbKdvab2s428q6DCtpVSw8OurK5cEuJJIlaVcN8tQ/Njuz4VJVSx20fneim1IuFLcxeYuhECB+Zq/iUqegGc91Nbf7S4mXmGF9DIXi05LHdQiPkBUZiy43I864q3EEkgQr9RVQ7O8XuZeIXMU8ZhCQW7LFqVhlnmy4I8QAD/tq30XF5RUVxniTQKrBNSlsOxOFjUAks2ASBtjOMDvwN6iL3tE7FooAoYmMpJuVKNKIywyoBO+xGV86m2m52ig6oBZWyiqlP2glZAY4ygMkQV3zpZWk0lckYyR+XPWnDdodSSDSyMg0yFRraOVpNCgLj1vz/7cHG9d7p+5c71kTKstFQNtxKRVZJFDSrII1I9VX1AMG79O2cjxHmK5j45q0hUDMSwIDdGGrA6YwcZG4OCNqd05QOIYDBN+rcxtA56XVgFe1GcMv+cCyr6nq756kjJH/wBc4Pnkd1SdQIIMFWseHjM3RFUnivZUiG5ZGLs7K6jG40liV886j+1XavDVNWi2oIdx9RC14bF1cOZpnaDzgyPVZmnEY7mCKCRZufEcKY1BJxsvUjSenXwzS3aXs5HBC05Zyx0jDHP4h9pi38R9qr+lsoJYKoJ7wBmkuIcPjmTlyrqXIOPMdDtWY4SWHNBdFjEcl6Le1stVuQFrJkgGdTJiwgfUwQLKo2PY0NHE7zOFChig7iQCcHuzt3VH8B4ALkzusjRAOVXG+UOcg952x31oyxgDTjbGMeVNuHcOjhUrGukMxYjJPrHr191SODZLYFrz8lAdsV8j5ccxiLCAJk+OmwqvTdiIjEsYZgwOS53JHeAOgFWTh9kkMaxoMKo/8NO6K0Mo02GWiNiwVsXXrNy1HkiZ8evJQ/aH2V95rOe1fY8XTLLFKYZlIIbGRkdDsQQdhuK1LiFkJVxnBHQ1HfcX9QrwsfhcYcZ3+HGwDVvGQQdR5hXUatLusj/n8lTLPhUpjjW5lDlBuyg5Y59o52B9wyO41MxoFAUDAGwFTX3EfzCj7i/qFeU/snHv1aOWZseUrSMVRG33URRUv9xH8wo+4v6hUP0XG/wH/pv1XfzdLf6FQ4q1cM/0k93+ajRwM/nFTEEelQo7hXs9i4CvhnvdVESABcHfuWXF1mVAA0rrVuR5VUZ/s3sGmMxhbdtZQO3KL/mKZxVsdDnIx8aPW/p/evoWuLbgwsBaDqEl6DF/Kj/SPpR6DF/KT9A+lKYbwX96MN4L+9cU8795SfoMX8qP9I+lHoEX8qP9I+lKet4L+9GG8F/eiZ37yuzsK8h9ke4f2rghjtsPdvSwFFFJp7TfD/NQs/CJRI728/LEhy6suoBumob7HyqZZDnIxv1zXuX8F+Z+lQewO1+ii5gdr9E24VYLBGI1JOMkk9SxOST7zT2k8v4L8z9KMv4L8z9Kk0BogLrQGiBomz8OQsWOrJ/qPl3Z8q5+6Y/6umn2j0+dO8v4L8z9KMv4L8z9K6uZRuXkgwhHgP8AFKrSJVjscAeW9LUUlC9pATa3AAJJSQADqTp6VjfBbq6t0KxLcJq3bQCAdtjgr1reTGe7B3zvXmlvBfmfpVb6eYgzCzV8Oajg4OiN3+1gdsZ0cyKl0JG9p11AnxycZO9DpI2oPDdMGYMwJPrYxgtkbkeNb7hvBfmfpRhvBfmfpUO4tE+iz/p4/mfL7r5/S2YKy+j3OknOkE6fLIxua4uLWRkVRDcErsoYEqozuFGNq+g8N4L8z9K80t4L8z9Kj+Wb0Ah7PB/rPl91AdjrN4bGCOQaXULkeGXzg+e9Wam4jPfgDOdu/HSnFaAIELe1uVoG5Q3avhJu7Z7cafX051ZwVDAsNt9wCKYzdlLZIjGIHkDMrFuYTKGX2GDs2oae7B2qz0V1SVU4NwGG2d5IrSRWZSpOvUWDMCc5brnfNJP2bth6voUhBQR7MMFV3Ut6w9ZTnS3Udxq4UURVjh/A4YHVoraQsNeXZ9TMWCglyzZbIAAJz07q4s+zlvkobWTQyMgV31RojblFXUdAOB7I7hVqooiieDcChtdXJU5fGtmZndsbKCzEnABOB3VLUUURNbqyjkxzEV8HI1AHB8RSS8MhBJESAk5J0jJIOR++/vp9RXZOi5lCY/dMPr/gx/ie36o9b30na8NEayAMxeQlmk21asaQemNgABt3VJUUk71zKFFjg8eFUgkBmY5OdTEEZbPU4NKS8PQ7qAjDGlgBlQOmMjw2qQorud29R7pg0HXXUpvaWqxoqIMKowB/5305rwV7UVMAAQEUUUUXUUUUURFFFFERRRRREUUUV1EUUUURFFFFERRRRREUUUVxEUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURf/2Q==" />
        </Right>
    </Container>
  )
}

export default Footer