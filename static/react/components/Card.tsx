import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardImageOverlay,
  CCardLink,
  CCardSubtitle,
  CCardTitle,
  CCardText,
  CListGroup,
  CListGroupItem,
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
} from "@coreui/react";

interface ICardProps {}

const Card = (props: ICardProps) => {
  return (
    <CRow>
      <CCol sm={6}>
        <CCard>
            <CCardImage src="/images/800x600.png" />
          <CCardBody>
            <CCardTitle>Special title treatment</CCardTitle>
            <CCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CCardText>
            <CButton color="primary" href="#">
              Go somewhere
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm={6}>
        <CCard>
          <CCardBody>
            <CCardTitle>Special title treatment</CCardTitle>
            <CCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CCardText>
            <CButton color="primary" href="#">
              Go somewhere
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Card;
