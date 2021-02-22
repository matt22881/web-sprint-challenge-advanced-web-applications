import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const data =[
  {
    "color": "aliceblue",
    "code": {
      "hex": "#f0f8ff"
    },
    "id": 1
  },
  {
    "color": "limegreen",
    "code": {
      "hex": "#99ddbc"
    },
    "id": 2
  } 
]

test('Renders Page without errors', () => {
  render(<BubblePage />)
})

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  const mockGetData = jest.fn();
  render(<BubblePage colors={data} />)
  // const bubbles = screen.getAllByTestId('bubble')
});
