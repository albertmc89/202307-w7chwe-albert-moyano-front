import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store";
import NewRobotForm from "./NewRobotForm";

describe("Given a NewRobotForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Robot name:', 'Speed (0 - 10):', 'Endurance (0 - 10):', 'Image:' fields", () => {
      const nameInputLabelText = "Robot name:";
      const speedInputLabelText = "Speed (0 - 10):";
      const enduranceInputLabelText = "Endurance (0 - 10):";
      const imageInputLabelText = "Image:";

      render(
        <Provider store={store}>
          <NewRobotForm />
        </Provider>,
      );

      const nameInput = screen.getByLabelText(
        nameInputLabelText,
      ) as HTMLInputElement;
      const speedInput = screen.getByLabelText(
        speedInputLabelText,
      ) as HTMLInputElement;
      const enduranceInput = screen.getByLabelText(
        enduranceInputLabelText,
      ) as HTMLInputElement;
      const imageInput = screen.getByLabelText(
        imageInputLabelText,
      ) as HTMLInputElement;

      expect(nameInput).toBeInTheDocument();
      expect(speedInput).toBeInTheDocument();
      expect(enduranceInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
    });
  });

  describe("When user writes 'Chronodroid', 9, 7,'https://upload.wikimedia.org/wikipedia/commons/8/84/Toyota_Robot_at_Toyota_Kaikan.jpg'", () => {
    test("Then it should show 'Chronodroid', 9, 7, 'https://upload.wikimedia.org/wikipedia/commons/8/84/Toyota_Robot_at_Toyota_Kaikan.jpg'", async () => {
      const nameText = "Chronodroid";
      const speedNumber = 9;
      const enduranceNumber = 7;
      const imageText =
        "https://upload.wikimedia.org/wikipedia/commons/8/84/Toyota_Robot_at_Toyota_Kaikan.jpg";

      render(
        <Provider store={store}>
          <NewRobotForm />
        </Provider>,
      );

      const name = screen.getByRole("textbox", {
        name: /name:/i,
      }) as HTMLInputElement;
      const speed = screen.getByRole("spinbutton", {
        name: /speed/i,
      }) as HTMLInputElement;
      const endurance = screen.getByRole("spinbutton", {
        name: /endurance/i,
      }) as HTMLInputElement;
      const image = screen.getByRole("textbox", {
        name: /image/i,
      }) as HTMLInputElement;

      await userEvent.type(name, nameText);
      await userEvent.type(speed, speedNumber.toString());
      await userEvent.type(endurance, enduranceNumber.toString());
      await userEvent.type(image, imageText);

      expect(name.value).toBe(nameText);
      expect(speed.value).toBe(speedNumber.toString());
      expect(endurance.value).toBe(enduranceNumber.toString());
      expect(image.value).toBe(imageText);
    });
  });
});
