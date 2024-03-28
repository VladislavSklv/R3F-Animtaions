import { Affix, Button, Stack } from "@mantine/core";
import { useCharacterAnims } from "../contexts/CharacterAnims";

const Interface = () => {
  const { animations, setAnimIndex, animIndex } = useCharacterAnims();
  return (
    <Affix position={{ bottom: 50, right: 40 }}>
      <Stack>
        {animations.map((anim, index) => (
          <Button
            onClick={() => setAnimIndex(index)}
            key={anim}
            variant={index === animIndex ? "filled" : "light"}
          >
            {anim}
          </Button>
        ))}
      </Stack>
    </Affix>
  );
};

export default Interface;
