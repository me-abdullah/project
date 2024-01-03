import React, { useState } from "react";
import "./App.css";
import { Container } from "@mui/material";

import Gallery from "./Components/Gallery";
import Description from "./Components/Description";
import MobileGallery from "./Components/MobileGallery";
import prod1 from "../Product2/Pictures/B25.webp" ;
import prod2 from "../Product2/Pictures/p2.25.webp";
import prod3 from "../Product2/Pictures/p250.webp";
import prod4 from "../Product2/Pictures/p400.webp";
import prod5 from "../Product2/Pictures/p900.webp";

import prod6 from "../Product2/Pictures/1.8T.webp";

import prod7 from "../Product2/Pictures/2.5T.webp";
import prod8 from "../Product2/Pictures/400T.webp";
import prod9 from "../Product2/Pictures/900T.webp";



import thumb1 from "../Product2/Pictures/B25.webp" ;
import thumb2 from "../Product2/Pictures/p2.25.webp";
import thumb3 from "../Product2/Pictures/p250.webp";
import thumb4 from "../Product2/Pictures/p400.webp";
import thumb5 from "../Product2/Pictures/p900.webp";
import thumb6 from "../Product2/Pictures/1.8T.webp";
import thumb7 from "../Product2/Pictures/2.5T.webp";
import thumb8 from "../Product2/Pictures/400T.webp";
import thumb9 from "../Product2/Pictures/900T.webp";



const IMAGES = [prod1, prod2,prod3,prod4,prod5,prod6,prod7,prod8,prod9];
const THUMBS = [thumb1, thumb2,thumb3,thumb4,thumb5,thumb6,thumb7,thumb8,thumb9];

function Product() {
  const [quant, setQuant] = useState(0);
  const [orderedQuant, setOrderedQuant] = useState(0);


  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };
  const [dataFromChild, setDataFromChild] = useState(null);
  const [qun, setqun] = useState("25kg");
  const [pack, setpack] = useState("Bag");
  const handleDataFromChild1 = (data) => {
    setDataFromChild(data);
    console.log(data)
    if (data==="/static/media/B25.e5b92ec0324ed62514ec.webp") {
      setqun("25kg")
      setpack("bag")
    }
    else if(data==="/static/media/p2.25.b9192ff42f0de1394370.webp"){
      setqun("2.25kg")
      setpack("pouch")
    }
    else if(data==="/static/media/p250.96c954f6715f16bea0a2.webp"){
      setqun("250GM")
      setpack("pouch")
    }
    else if(data==="/static/media/p400.23ab027b975aff83337d.webp"){
      setqun("400GM")
      setpack("pouch")
    }
    else if(data==="/static/media/p900.682b24640cc44c32b3e8.webp"){
      setqun("900GM")
      setpack("pouch")
    }
    else if(data==="/static/media/1.8T.1e3b35a36622d43589f9.webp"){
      setqun("1.8Kg")
      setpack("tin")
    }
    else if(data==="/static/media/2.5T.9052817bf5744d898c13.webp"){
      setqun("2.5KG")
      setpack("tin")
    }
    else if(data==="/static/media/400T.c07bde561d7da44ce5d8.webp"){
      setqun("400GM")
      setpack("tin")
    }
    else if(data==="/static/media/900T.7bf249ea6cadd0ace93b.webp"){
      setqun("900GM")
      setpack("tin")
    }
  };

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    console.log(data)
    if (data==="/static/media/B25.e5b92ec0324ed62514ec.webp") {
      setqun("25kg")
      setpack("bag")
    }
    else if(data==="/static/media/p2.25.b9192ff42f0de1394370.webp"){
      setqun("2.25kg")
      setpack("pouch")
    }
    else if(data==="/static/media/p250.96c954f6715f16bea0a2.webp"){
      setqun("250GM")
      setpack("pouch")
    }
    else if(data==="/static/media/p400.23ab027b975aff83337d.webp"){
      setqun("400GM")
      setpack("pouch")
    }
    else if(data==="/static/media/p900.682b24640cc44c32b3e8.webp"){
      setqun("900GM")
      setpack("pouch")
    }
    else if(data==="/static/media/1.8T.1e3b35a36622d43589f9.webp"){
      setqun("1.8Kg")
      setpack("tin")
    }
    else if(data==="/static/media/2.5T.9052817bf5744d898c13.webp"){
      setqun("2.5KG")
      setpack("tin")
    }
    else if(data==="/static/media/400T.c07bde561d7da44ce5d8.webp"){
      setqun("400GM")
      setpack("tin")
    }
    else if(data==="/static/media/900T.7bf249ea6cadd0ace93b.webp"){
      setqun("900GM")
      setpack("tin")
    }
  };

  return (
    <main className="App mt-8 min-h-screen" >
      <Container component="section" maxWidth={"lg"}>
     
        <section className="core">
          <Gallery IMAGES={IMAGES} THUMBS={THUMBS} prod1={prod1} sendDataToParent={handleDataFromChild}/>
          <MobileGallery IMAGES={IMAGES} THUMBS={THUMBS} prod1={prod1} sendDataToParent1={handleDataFromChild1} />
          <Description
         
            qun={qun}
            pack={pack}
          />
        </section>
      </Container>
    
    </main>
  );
}

export default Product;
