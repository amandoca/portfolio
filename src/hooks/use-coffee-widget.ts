import { useEffect, useState } from "react";
import { useTranslate } from "./use-translate";

const COFFEE_MESSAGE_VISIBLE_TIME_IN_MS = 3200;

export function useCoffeeWidget() {
  const { t } = useTranslate();

  const [message, setMessage] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const coffeeMessages = t("coffee.messages", { returnObjects: true }) as string[];

  function getRandomCoffeeMessage() {
    const randomMessageIndex = Math.floor(Math.random() * coffeeMessages.length);

    return coffeeMessages[randomMessageIndex];
  }

  function showRandomCoffeeMessage() {
    setMessage(getRandomCoffeeMessage());
    setIsMessageVisible(true);
  }

  useEffect(() => {
    if (!isMessageVisible) {
      return;
    }

    // A mensagem some sozinha para não atrapalhar a navegação.
    const hideCoffeeMessageTimeout = window.setTimeout(() => {
      setIsMessageVisible(false);
    }, COFFEE_MESSAGE_VISIBLE_TIME_IN_MS);

    return () => {
      window.clearTimeout(hideCoffeeMessageTimeout);
    };
  }, [isMessageVisible, message]);

  return {
    buttonLabel: t("coffee.button_label"),
    isMessageVisible,
    message,
    showRandomCoffeeMessage,
  };
}
