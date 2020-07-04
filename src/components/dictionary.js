import React, { useEffect } from "react";

const Dictionary = () => {
  useEffect(() => {
    fetchItem();
  });
  const fetchItem = async () => {
    const data = await fetch(
      "https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=3bbad435-77ad-481b-8079-92c0dd4d11f1"
    );
    const words = await data.json();
    console.log(words);
  };
  return (
    <div>
      <h2>Dictionary</h2>
    </div>
  );
};

export default Dictionary;
