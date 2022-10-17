import React from "react";
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Boton } from "./Boton";
import Pdf from "react-to-pdf";
import { useRouter } from "next/router";

export const Voucher = ({
  data,
  setHiddenForm,
  setHiddenVoucher,
  hiddenVoucher,
  setFormData,
  initialState,
  setProductoNombre,
  setProductoId,
}) => {
  const ref = React.createRef();
  const fileName = `voucher#${data.voucherCodigo}.pdf`;

  const handleReturn = () => {
    setHiddenForm(false);
    setHiddenVoucher(true);
    setFormData(initialState);
    setProductoNombre("");
    setProductoId("");
    document.getElementById("productos").value = 0;
  };
  return (
    <>
      <Box id="container" className="voucher-layout" hidden={hiddenVoucher}>
        <Box id="container-pdf" ref={ref} className="voucher-layout">
          <Box>
            <div>
              <div className="voucher-layout css-0">
                <h2 className="chakra-heading voucher-header css-1dklj6k">
                  {data.nombre}
                </h2>
                <p className="chakra-text voucher-label css-0">tu Voucher</p>
                <p className="chakra-text voucher-data css-0">
                  {data.productoNombre}
                </p>
                <p className="chakra-text voucher-label css-0">
                  se ha generado exitosamente
                </p>
                <p className="chakra-text voucher-label-l css-0">
                  Tu ID para canjear el producto es:
                </p>
                <p className="chakra-text voucher-data-l css-0">
                  # {data.voucherCodigo}
                </p>
              </div>
            </div>
          </Box>
        </Box>

        <Pdf targetRef={ref} filename={fileName} onComplete={handleReturn}>
          {({ toPdf }) => (
            <button
              style={{
                minWidth: "initial",
                height: "45px",
                backgroundColor: "#d21a28",
                color: "#fff",
                padding: "0 48px",
                marginLeft: "10%",
              }}
              onClick={toPdf}
            >
              Descargar PDF
            </button>
          )}
        </Pdf>
      </Box>
    </>
  );
};
