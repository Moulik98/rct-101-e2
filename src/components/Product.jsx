import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel} from "@chakra-ui/react"

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;

  const [prod,setprod]=React.useState([]);
  const[page,setPage]=React.useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/products")
    .then((s)=>{
      setprod(s.data)
    })
    console.log(prod)
  },page)
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category">menu</Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
