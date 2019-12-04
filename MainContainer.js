import React from "react";
import styled from "styled-components";
const Maincontainer = styled.div`
  direction: rtl;
  text-align: right;
  li {
    text-align: right;
  }
  .rbt-aux {
    left: 0 !important;
    right: auto !important;
  }
  .selectedentity {
    width: 20rem !important;
  }
  .dropdown-item {
    text-align: right !important;
  }
  .badge-total {
    font-size: 1.3rem;
  }
  .bd-right-fix {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-top-left-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
  }
  .bd-left-fix {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
  }

  .react-bs-table-search-form .form-control {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
  }

  .react-bs-table-container .react-bs-table-search-form {
    margin-bottom: 0;
    margin-top: 0.4rem;
  }

  .react-bs-table-tool-bar {
    margin-bottom: 0;
  }

  .react-bootstrap-table-page-btns-ul {
    float: left;
  }
`;

export default Maincontainer;
