import styled from "styled-components";

export const StyledArticle = styled.main`
  max-width: 1023px;
  margin: auto;
  padding: 5px;

  .rows {
    display: flex;
    justify-content: space-between;

    .article {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      overflow: hidden;
      position: relative;
      margin: 3px;

      .imgContainer {
        height: 400px;
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .title {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background: black;
        color: white;
        padding: 20px;
        height: 100px;

        h2 {
          font-size: 20px;
          text-align: center;
        }
      }
    }

    button {
      padding: 2px;
      margin-top: 10px;
    }
  }
`;

export const width = {
  large: 1023,
};
