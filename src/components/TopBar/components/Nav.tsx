import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/farms">
        Menu
      </StyledLink>
      <StyledAbsoluteLink
        href="https://beagleinu.com/#/"
        target="_blank"
      >
        Beagle Inu 
      </StyledAbsoluteLink>
      <StyledLink exact activeClassName="active" to="/nfts">
        NFTs
      </StyledLink>
      <StyledAbsoluteLink
        href="https://pancakeswap.finance/swap?chainId=97&outputCurrency=0x47161F942087eab16292d02d5d68EE26C41a364b"
        target="_blank"
      >
        Swap Test
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://testnet.binance.org/faucet-smart"
        target="_blank"
      >
        Faucet
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.yellow};
  font-weight: normal;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.yellow};
  }
  &.active {
    color: ${(props) => props.theme.color.yellow};
    font-weight: bold;
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.yellow};
  font-weight: normal;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.yellow};
  }
  &.active {
    color: ${(props) => props.theme.color.yellow};
    font-weight: bold;
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
