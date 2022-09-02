import React, { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";

const API_URL = "https://624c9312c172b69d69274ae4.mockapi.io/api/v1/users";

export default function StoriesBar() {
  const [userStories, setUserStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((resposta) => {
        if (resposta.ok) {
          return resposta.json();
        }
        setErro(true);
      })
      .then((json) => {
        const storiesArray = json.flatMap((usuario) => usuario.stories);
        setUserStories(storiesArray);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>CARREGANDO!</div>;
  }

  if (erro) {
    return <div>ERRO!</div>;
  }

  return (
    <div className="container">
      <section className="stories">
        <div className="stories__container">
          {userStories.map((userStory) => (
            <Avatar
              key={userStory.id}
              imgSrc={userStory.story}
              clicavel={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
