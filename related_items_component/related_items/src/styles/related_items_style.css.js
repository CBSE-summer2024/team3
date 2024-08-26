import { css } from "lit";

export const relatedItemsStyles = css`
  :host {
    display: block;
    padding: 16px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }
  .related-items {
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: flex-start;
  }

  .card {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 200px;
    text-align: center;
    padding: 16px;
  }
  .card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .card .name,
  .card .price {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
  .card .name {
    font-size: 16px;
    font-weight: bold;
    margin: 12px 0 4px;
  }
  .card .price {
    font-size: 14px;
    color: #333;
    margin: 4px auto 12px;
  }

  .card .price {
    max-width: 100px;
  }
  .card button {
    background-color: #e91e63;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
  }
  .card button:hover {
    background-color: #c2185b;
  }

  .card button:focus {
    box-shadow: 0 0 0 3px #009688;
  }
`;
