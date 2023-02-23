import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopBotton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "tranasparent"};
    color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Botton = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`

`

const ProductId = styled.span`

`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`

const ProductSize = styled.span`

`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer= styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount= styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice= styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
`



const Cart = () => {
  return (
   <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopBotton>CONTINUE SHOPPING</TopBotton>
            <TopTexts>
                <TopText>Shopping Bag (2)</TopText>
                <TopText>Your WishList (0)</TopText>
            </TopTexts>
            <TopBotton type="filled">CHECKOUT NOW</TopBotton>
        </Top>
        <Botton>

            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://http2.mlstatic.com/D_NQ_NP_957223-CBT52958400604_122022-W.jpg"/>
                        <Details>
                            <ProductName><b>Product:</b> SHIRT</ProductName>
                            <ProductId><b>ID:</b> 9387546211</ProductId>
                            <ProductColor color="LightBlue"/>
                            <ProductSize><b>Size: </b>XL</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://colombia.com.co/wp-content/uploads/2020/05/6777-9455OV-3-270x320.jpg"/>
                        <Details>
                            <ProductName><b>Product:</b> SHOES-ES</ProductName>
                            <ProductId><b>ID:</b> 7546211</ProductId>
                            <ProductColor color="Black"/>
                            <ProductSize><b>Size: </b>41</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 45</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary></Summary>
        </Botton>
    </Wrapper>
    <Footer/>
   </Container>
  )
}

export default Cart