import styled from "styled-components";

export const Container = styled.div`
    width:100vw;
    background-color:#f5f5f5;
    /* height: auto; */
    height:100vh;
` 
export const CenterContainer = styled.div`
  /* text-align: center; */
  /* justify-content: 'center'; */
  background-color:#f5f5f5;
  width:100%;
  overflow:auto;
  word-break:break-all;
  /* left:'2rem'; */
  /* height:100vh; */
`;
export const NoData = styled.div`
  font-size: 1.5rem; 
  text-align: center;
  /* margin-left: 2.5rem; */
  color: #808080;
`;

export const TableContainer = styled.div`
  text-align: center;
  color: 'gray';
  background-color:#fff;
  justify-content: center;
  width:60vw;
  height:20vh;
`;

export const Title = styled.h1`
  font-size: 1.5em; 
  text-align: left;
  margin-left: 2.5rem;
  color: palevioletred;
`;

export const UserForm = styled.div`
 background: #f5f5f5;
 padding: 20px;

 h1 {
   border-bottom: 1px solid white;
   color: palevioletred;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
   margin-top: 5px;
 }

 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
   cursor: pointer;
`;
